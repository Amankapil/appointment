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
      duration,
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

    // const message2 = `Hey ${name}, You booked an Urgent Appointment with us Please check the details below and horoscope.\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
    // Example date
    const message2 = `Dear ${name},  

Thank you for choosing Prashna Siddhi for your spiritual guidance. We acknowledge with gratitude the receipt of ₹${amount} for your ${duration}-minute astrology consultation.  

✅ **Your Appointment Details:**  
**Date & Time:** ${selectedTime}, ${selectedDate} 
**Mode:** Voice Call  
**Number to Call:** +91 7259691375 (Please call at the exact scheduled time)  

🔔 **To Get the Best Out of Your Consultation:**  
- Share the name of the person the question is about.  
- Mention the subject area (job, finance, health, etc.) and ask a clear, pointed question — no background needed. Mr. K Jagadish, the astrologer, will handle the analysis.  
- Note down your questions beforehand to keep the session focused.  
- Avoid cross-talk and maintain silence during the call to preserve the astrologer’s attention.  
- Avoid using speakerphones or Bluetooth devices to prevent audio distortion. Do not charge the phone during consultation.  
- Feel free to record the session for your reference.  

🙏 **A Note of Blessings**  
By following the above, you’ll receive deep insights within your chosen time. May Divine Grace illuminate your path and help you find the answers you seek.  

**Warm regards,**  
K Jagadish  
Vedic Astrologer – Prashna Siddhi  
[www.PrashnaSiddhi.com](http://www.PrashnaSiddhi.com)  
`;

    // const message = "Hey Jagdish You have an Urgent Appointment ";
    // const message = `Hello Jagdish, your appointment is scheduled. Please find the details below:`;
    // console.log(message);
    const message = `Hey Jagdish You have an Urgent Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;

    // uncomment
    const res = await client.messages.create({
      from: "whatsapp:+917022239292", // Twilio WhatsApp Number
      to: "whatsapp:+917259691375", // Recipient's WhatsApp number
      // category: "TRANSACTIONAL",
      contentSid: "HXa4b0723a3035b7507865e7694e1a028c", // Your Twilio Template SID
      contentVariables: JSON.stringify({
        1: selectedTime || "", // Static Name (Ensure it's always a string)
        2: name || "",
        3: email || "",
        4: phone || "",
        5: amount || "", // Ensure it's a string
        6: selectedDate || "", // Ensure it's a string
        7: filePath || "check in dashboard",
      }),
    });

    // uncomment

    var amount1 = 0;

    if (duration === 15) {
      amount1 = 1000;
    } else if (duration === 30) {
      amount1 = 2000;
    } else if (duration === 7) {
      amount1 = 499;
    } else {
      amount1 = 2500;
    }

    const whatsappNumber = `whatsapp:+${phone}`;
    // // uncommet
    const res3 = await client.messages.create({
      from: "whatsapp:+917022239292", // Your Twilio WhatsApp Number
      to: whatsappNumber, // Recipient's WhatsApp number
      // to: "whatsapp:+918103075691", // Recipient's WhatsApp number
      contentSid: "HX8ed84eaaf51731ee4758ae01f9bd7c71", // Replace with your Twilio-approved Template SID
      contentVariables: JSON.stringify({
        1: String(duration || "15"),
        2: String(selectedTime || "11:00 AM - 11:30 AM"),
        3: String(amount1 || "0.00"),
      }),
    });

    // console.log("Message sent:", res.sid);
    // 7259691375

    // 7022239292
    // uncomment
    // console.log("whatapp response", res3);
    await sendEmail({
      to: email,
      subject: "🌟 Your Prashna Siddhi Consultation is Confirmed",
      text: message2,
    });
    await sendEmail({
      to: "jagadish.k48@gmail.com",
      subject: "Hey You have a New Appointment..",
      text: message,
    });
    // uncomment

    const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD

    const availability = await Availability.findOne({ date: formattedDate });

    if (availability) {
      const slotIndex = availability.slots.findIndex(
        (slot) => slot.time === selectedTime
      );

      if (slotIndex !== -1) {
        // Mark the selected slot as "booked"
        availability.slots[slotIndex].status = "booked";

        // Parse selectedTime start and end
        const [startPart, endPart] = selectedTime.split(" - ");
        const parseTimeToMinutes = (timeStr) => {
          const [hourMin, period] = timeStr.trim().split(" ");
          let [hour, minute] = hourMin.split(":").map(Number);
          if (period === "PM" && hour !== 12) hour += 12;
          if (period === "AM" && hour === 12) hour = 0;
          return hour * 60 + minute;
        };

        const selectedStart = parseTimeToMinutes(startPart);
        const selectedEnd = parseTimeToMinutes(endPart);

        // Identify overlapping slots
        const remainingSlots = availability.slots.filter((slot) => {
          if (slot.time === selectedTime) return true; // Keep selected slot

          const [slotStartStr, slotEndStr] = slot.time.split(" - ");
          const slotStart = parseTimeToMinutes(slotStartStr);
          const slotEnd = parseTimeToMinutes(slotEndStr);

          // Check for overlap
          const isOverlapping =
            Math.max(selectedStart, slotStart) < Math.min(selectedEnd, slotEnd);
          return !isOverlapping;
        });

        availability.slots = remainingSlots;
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
    console.error("Error processing Urgent query:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
