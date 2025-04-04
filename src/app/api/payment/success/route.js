import { NextResponse } from "next/server";
import twilio from "twilio";
import dbConnect from "@/lib/dbConnect";
// nodemailer
import nodemailer from "nodemailer";
import Transaction from "@/models/Transaction";
import Availability from "@/models/Availability";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio WhatsApp-enabled phone number
const client = twilio(accountSid, authToken);

async function sendEmail({ to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prashnadevelop@gmail.com", // Replace with your Gmail
      pass: "hlhc laic lhil njen", // Use App Password (not your Gmail password)
    },
  });

  await transporter.sendMail({
    from: '"Prashna Siddhi" prashnadevelop@gmail.com',
    to,
    subject,
    text,
    // html,
  });
}

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();
    // Parse form data
    const data = await request.formData();
    // const formData = await request.formData();
    console.log("on success", data);
    const name = data.get("firstname");
    const email = data.get("email");
    const phone = data.get("phone");
    const amount = data.get("amount");
    const txnid = data.get("txnid");

    const { searchParams } = new URL(request.url);
    const selectedTime = searchParams.get("selectedTime");
    const selectedDate = searchParams.get("selectedDate");
    const dob = searchParams.get("dob");
    const tob = searchParams.get("tob");
    const country = searchParams.get("country");
    const state = searchParams.get("state");
    const city = searchParams.get("city");
    const gender = searchParams.get("gender");
    const filePath = searchParams.get("svgUrl");
    const duration = searchParams.get("duration");
    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    const existingTransaction = await Transaction.findOne({ email });

    if (existingTransaction) {
      // Update existing record
      await Transaction.updateOne(
        { email },
        {
          $set: {
            transactionId: txnid,
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
            paymentMethod: "PayU",
            createdAt: new Date(),
          },
          $inc: { session: 1 }, // Increase session by 1
        }
      );
    } else {
      // Create new transaction
      const transaction = new Transaction({
        transactionId: txnid,
        name,
        email,
        phone,
        amount,
        country,
        state,
        gender,
        dob,
        tob,
        latitude,
        longitude,
        selectedDate,
        selectedTime,
        city,
        filePath,
        session: 1,
        status: "Paid",
        paymentMethod: "PayU", // Save additional data to the database
      });

      await transaction.save();
    }

    // const transaction = new Transaction({
    //   transactionId: txnid,
    //   name,
    //   email,
    //   phone,
    //   amount,
    //   country,
    //   state,
    //   gender,
    //   dob,
    //   tob,
    //   selectedDate,
    //   selectedTime,
    //   city,
    //   filePath,
    //   session: 1,
    //   status: "Paid",
    //   paymentMethod: "PayU", // Save additional data to the database
    // });
    // await transaction.save();

    const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD
    // Update slot status to "booked"
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

    // Prepare WhatsApp message
    const message = `Hey Jagdish You have an Paid Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
    const message2 = `Hey ${name}, You booked an Urgent Appointment with us Please check the details below and horoscope.\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;

    const res = await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:+917259691375`,
    });

    console.log("whatapp response", res);
    await sendEmail({
      to: email,
      subject: "Session Confirm with Prashna Siddhi",
      text: message2,
    });
    await sendEmail({
      to: "jagadish.k48@gmail.com",
      subject: "New Session Confirm",
      text: message,
    });
    // Redirect to the payment success page
    // return NextResponse.redirect(`https://prashnasiddhi.com/payment`);
    // return NextResponse.redirect("https://prashnasiddhi.com/payment", {
    //   status: 302,
    // }); // Use 303 for safer redirection

    return NextResponse.redirect(
      `https://prashnasiddhi.com/payment`,
      { status: 303 } // Use 303 to ensure GET method after redirect
    );
  } catch (error) {
    console.error("Error in success URL:", error);
    // Redirect to the payment failure page in case of an error
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment`;
    return NextResponse.redirect(redirectUrl);
  }
}
