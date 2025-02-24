// import { NextResponse } from "next/server";
// // import dbConnect from "@/lib/db";
// import Transaction from "@/models/Transaction";
// import dbConnect from "@/lib/dbConnect";

// export async function POST(request) {
//   await dbConnect();
//   const data = await request.formData();
//   console.log("one success", data);
//   const name = data.get("firstname");
//   const email = data.get("email");
//   const phone = data.get("phone");
//   const amount = data.get("amount");
//   const status = "Success";
//   const paymentMethod = "PayU";

//   const transaction = new Transaction({
//     transactionId: data.get("txnid"),
//     name: data.get("firstname"),
//     email: data.get("email"),
//     phone: data.get("phone"),
//     amount: data.get("amount"),
//     status: "Success",
//     paymentMethod: "PayU",
//   });

//   const res = await transaction.save();
//   const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment`;
//   return NextResponse.redirect(redirectUrl);
// }

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
      user: "aman@codelinear.com", // Replace with your Gmail
      pass: "ionx trgf ubtb xzcj", // Use App Password (not your Gmail password)
    },
  });

  await transporter.sendMail({
    from: '"Your Company" aman@codelinear',
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
    console.log("on success", data);

    const name = data.get("firstname");
    const email = data.get("email");
    const phone = data.get("phone");
    const amount = data.get("amount");
    const txnid = data.get("txnid");

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const selectedTime = searchParams.get("selectedTime");
    const selectedDate = searchParams.get("selectedDate");
    const dob = searchParams.get("dob");
    const tob = searchParams.get("tob");
    const country = searchParams.get("country");
    const state = searchParams.get("state");
    const city = searchParams.get("city");
    const gender = searchParams.get("gender");

    // const svgString = data.get("country"); // Additional data passed from PayU
    // console.log("on success page aditional line 58", city);
    // console.log("on success page aditional line 58", svgString);
    // console.log("on success page aditional line 58", state);

    // Save transaction to the database
    // const transaction = new Transaction({
    //   transactionId: txnid,
    //   name,
    //   email,
    //   phone,
    //   amount,
    //   // svgString,
    //   status: "Success",
    //   paymentMethod: "PayU", // Save additional data to the database
    // });
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
      session: 1,
      status: "Success",
      paymentMethod: "PayU", // Save additional data to the database
    });

    await transaction.save();

    // Update slot status to "booked"
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

    // Prepare WhatsApp message
    const message = `Payment Successful!\nName: ${name}\nEmail: ${email}\nPhone: +91${phone}\nAmount: ${amount}\nTransaction ID: ${txnid}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}`;

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
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment`;
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in success URL:", error);

    // Redirect to the payment failure page in case of an error
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/booking`;
    return NextResponse.redirect(redirectUrl);
  }
}
