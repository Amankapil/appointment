import { NextResponse } from "next/server";
import twilio from "twilio";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import Transaction from "@/models/Transaction";
import nodemailer from "nodemailer";
import Availability from "@/models/Availability";

async function sendEmail({ to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prashnadevelop@gmail.com", // Replace with your Gmail
      pass: "hlhc laic lhil njen", // Use App Password (not your Gmail password)
    },
  });

  await transporter.sendMail({
    from: '"Prashna Siddhi" aman@codelinear',
    to,
    subject,
    text,
    // html,
  });
}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio WhatsApp-enabled phone number
const client = twilio(accountSid, authToken);
export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      amount,
      tob,
      dob,
      latitude,
      longitude,
      gender,
      country,
      state,
      duration,
      svgUrl,
      city,
      selectedTime,
      selectedDate,
    } = await request.json();
    // const file = formData.get("file");
    // console.log(file);

    const back = {
      name,
      email,
      phone,
      amount,
      tob,
      dob,
      gender,
      country,
      state,
      latitude,
      longitude,
      svgUrl,
      city,
      selectedTime,
      selectedDate,
    };

    console.log(back);
    // const svgContent = atob(svgdata);

    const filePath = svgUrl;
    // const filePath = `${request.protocol}://${request.get(
    //   "host"
    // )}/${filePath2}`;

    console.log(`Stored path in DB: ${filePath}`);

    const existingTransaction = await Transaction.findOne({ email });

    if (existingTransaction) {
      // Update existing record
      await Transaction.updateOne(
        { email },
        {
          $set: {
            name,
            phone,
            tob,
            dob,
            gender,
            country,
            state,
            city,
            selectedTime,
            duration,
            selectedDate,
            latitude,
            longitude,
            filePath,
            amount,
            status: "Urgent",
            createdAt: new Date(),
          },
          $inc: { session: 1 }, // Increase session by 1
        }
      );
    } else {
      // Create new transaction
      const transaction = new Transaction({
        name,
        email,
        phone,
        tob,
        dob,
        gender,
        country,
        state,
        city,
        selectedTime,
        duration,
        selectedDate,
        latitude,
        longitude,
        filePath,
        amount,
        session: 1,
        status: "Urgent",
        createdAt: new Date(),
      });

      await transaction.save();
    }

    // Example date

    // const message = `Hey Jagdish You have an Urgent Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}`;
    const message = `Hey Jagdish You have an Urgent Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
    const message2 = `Hey ${name}, You booked an Urgent Appointment with us Please check the details below and horoscope.\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
    // await sendEmail({
    //   to: email,
    //   subject: "Session Confirm with Enlighten-mind",
    //   text: message,
    // });
    console.log(message);
    const res = await client.messages.create({
      body: message,
      // from: `whatsapp:${twilioPhoneNumber}`,
      from: "whatsapp:+15557334838",
      to: `whatsapp:+917259691375`,
    });
    console.log("whatapp response", res);
    await sendEmail({
      to: email,
      subject: "Session Confirm with Prashna Siddhi",
      text: message2,
    });

    const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD
    // Update slot status to "booked" working fien
    // const availability = await Availability.findOne({ date: formattedDate });
    // if (availability) {
    //   const slotIndex = availability.slots.findIndex(
    //     (slot) => slot.time === selectedTime
    //   );
    //   if (slotIndex !== -1) {
    //     availability.slots[slotIndex].status = "booked";
    //     await availability.save();
    //   }
    // }

    const availability = await Availability.findOne({ date: formattedDate });

    if (availability) {
      const slotIndex = availability.slots.findIndex(
        (slot) => slot.time === selectedTime
      );

      if (slotIndex !== -1) {
        // Mark only the selected slot as "booked"
        availability.slots[slotIndex].status = "booked";

        // Convert time to minutes for easier calculations
        const [startHour, startMin] = selectedTime
          .split(" ")[0]
          .split(":")
          .map(Number);
        const isPM = selectedTime.includes("PM");
        const startTimeInMinutes =
          (isPM && startHour !== 12 ? startHour + 12 : startHour) * 60 +
          startMin;

        // Define slot durations
        const slotDurations = [15, 30, 45];
        const affectedSlots = [];

        // Identify overlapping slots
        for (const slot of availability.slots) {
          const [slotHour, slotMin] = slot.time
            .split(" ")[0]
            .split(":")
            .map(Number);
          const slotPM = slot.time.includes("PM");
          const slotStartTime =
            (slotPM && slotHour !== 12 ? slotHour + 12 : slotHour) * 60 +
            slotMin;

          if (
            slotStartTime >= startTimeInMinutes &&
            slotStartTime < startTimeInMinutes + duration &&
            slot.time !== selectedTime // Keep the selected slot
          ) {
            affectedSlots.push(slot.time);
          }

          // Remove larger slots that overlap
          if (
            slotDurations.some(
              (d) =>
                d > duration &&
                slotStartTime >= startTimeInMinutes &&
                slotStartTime < startTimeInMinutes + d
            ) &&
            slot.time !== selectedTime
          ) {
            affectedSlots.push(slot.time);
          }
        }

        // Remove conflicting slots but keep the selected one
        availability.slots = availability.slots.filter(
          (slot) => !affectedSlots.includes(slot.time)
        );

        await availability.save();
      }
    }

    // const redirectUrl = `${protocol}://${host}/payment`;
    // return NextResponse.redirect(redirectUrl);
    return NextResponse.json({
      success: true,
      message: "Your appointment is book on urgent basis",
      data: back,
    });

    // const MERCHANT_KEY = process.env.PAYU_MERCHANT_KEY;
    // const MERCHANT_SALT = process.env.PAYU_MERCHANT_SALT;
    // const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    // const PAYU_BASE_URL = "https://secure.payu.in/_payment";

    // const txnid = "Txn" + Date.now();

    // const hashString = `${MERCHANT_KEY}|${txnid}|${amount}|Product_Info|${name}|${email}|||||||||||${MERCHANT_SALT}`;
    // const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // const payUData = {
    //   key: MERCHANT_KEY,
    //   txnid,
    //   amount,
    //   productinfo: "Product_Info",
    //   firstname: name,
    //   service_provider: "payu_paisa",
    //   email,
    //   phone,
    //   surl: `${NEXT_PUBLIC_BASE_URL}/api/payment/success`,
    //   furl: `${NEXT_PUBLIC_BASE_URL}/api/payment/failure`,
    //   hash,
    // };

    // return NextResponse.json({ payUData, url: `${PAYU_BASE_URL}/_payment` });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
