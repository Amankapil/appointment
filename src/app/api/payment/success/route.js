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
      selectedDate,
      selectedTime,
      city,
      filePath,
      session: 1,
      status: "Success",
      paymentMethod: "PayU", // Save additional data to the database
    });
    const back = {
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
      selectedDate,
      selectedTime,
      city,
      filePath,
      session: 1,
      status: "Success",
      paymentMethod: "PayU", // Save additional data to the database
    };

    await transaction.save();

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
    const message = ` Hey Jagdish You have an Urgent Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
    const message2 = `Hey, ${name} You booked an Urgent Appointment! with us Please check the details below and horoscope\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;

    const res = await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      mediaUrl: [filePath],
      to: `whatsapp:+917259691375`,
    });

    console.log("whatapp response", res);
    await sendEmail({
      to: email,
      subject: "Session Confirm with Prashna Siddhi",
      text: message2,
    });

    // Redirect to the payment success page
    return NextResponse.redirect(`https://prashnasiddhi.com/payment`);
  } catch (error) {
    console.error("Error in success URL:", error);

    // Redirect to the payment failure page in case of an error
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment`;
    return NextResponse.redirect(redirectUrl);
  }
}
