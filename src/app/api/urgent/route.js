import { NextResponse } from "next/server";
import twilio from "twilio";
import dbConnect from "@/lib/dbConnect";
import Transaction from "@/models/Transaction";
import nodemailer from "nodemailer";
import Availability from "@/models/Availability";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio WhatsApp-enabled phone number
const client = twilio(accountSid, authToken);

async function sendEmail({ to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aman@codelinear.com", // Replace with your Gmail
      pass: "ionx trgf ubtb xzcj", // Use App Password (not your Gmail password)
    },
  });

  await transporter.sendMail({
    from: '"Enlighen-mind" aman@codelinear',
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
    const {
      name,
      email,
      phone,
      amount,
      tob,
      dob,
      gender,
      country,
      state,
      city,
      svgUrl,
      selectedTime,
      selectedDate,
    } = await request.json();
    const transaction = new Transaction({
      name,
      email,
      phone,
      amount,
      country,
      state,
      gender,
      dob,
      tob,
      selectedDate,
      selectedTime,
      city,
      session: 1,
      status: "Urgent",
      paymentMethod: "PayU", // Save additional data to the database
    });
    // Example date
    const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD
    // Update slot status to "booked"
    const availability = await Availability.findOne({ date: formattedDate });
    if (availability) {
      const slotIndex = availability.slots.findIndex(
        (slot) => slot.time === selectedTime
      );
      if (slotIndex !== -1) {
        availability.slots[slotIndex].status = "booked";
        await availability.save();
      }
    }
    await transaction.save();

    // Prepare WhatsApp message
    const message = `Session Confirm with EnlightenMind!\nName: ${name}\nEmail: ${email}\nPhone: +91${phone}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}`;

    await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:+91${phone}`,
    });

    await sendEmail({
      to: email,
      subject: "Session Confirm with Enlighten-mind",
      text: message,
    });

    // Redirect to the payment success page

    return NextResponse.json(
      {
        success: true,
        message: `data sent to astrologer soon he will be connect you on selected time `,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in success URL:", error);
    // Redirect to the payment failure page in case of an error
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/booking`;
    return NextResponse.redirect(redirectUrl);
  }
}
