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
      user: "aman@codelinear.com", // Replace with your Gmail
      pass: "ionx trgf ubtb xzcj", // Use App Password (not your Gmail password)
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
      gender,
      country,
      state,
      svgUrl,
      city,
      selectedTime,
      selectedDate,
    } = await request.json();
    // const file = formData.get("file");
    // console.log(file);

    // const svgContent = atob(svgdata);
    const base64Data = svgUrl.split(",")[1]; // Removes "data:image/svg+xml;base64,"
    if (!base64Data) {
      return NextResponse.json({ error: "Invalid SVG data" }, { status: 400 });
    }

    // Convert Base64 to a Buffer
    const buffer = Buffer.from(base64Data, "base64");
    const fileName = `${uuidv4()}.svg`;

    const filePath1 = path.join("public/uploads", fileName);
    await writeFile(filePath1, buffer);

    const filePath2 = filePath1.replace(/^public\//, ""); // Remove "public/"

    const protocol = request.headers.get("x-forwarded-proto") || "http";
    const host = request.headers.get("host");
    const filePath = `${protocol}://${host}/${filePath2}`;
    // const filePath = `${request.protocol}://${request.get(
    //   "host"
    // )}/${filePath2}`;

    console.log(`SVG saved at: ${filePath1}`);
    console.log(`Stored path in DB: ${filePath}`);

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
      selectedDate,
      filePath,
      amount,
      status: "pending",
      createdAt: new Date(), // Save additional data to the database
    });

    await transaction.save();

    // Example date
    // const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD
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
    // await transaction.save();

    const back = {
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

    const message = `Payment Successful!\nName: ${name}\nEmail: ${email}\nPhone: +91${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHorodcope URL: ${filePath}`;
    await sendEmail({
      to: email,
      subject: "Session Confirm with Enlighten-mind",
      text: message,
    });
    const res = await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:+91${phone}`,
    });
    console.log("whatapp response", res);
    const redirectUrl = `${protocol}://${host}/payment`;
    return NextResponse.redirect(redirectUrl);

    // return NextResponse.redirect(
    //   `http://localhost:3000/transaction-summary?data=${encodeURIComponent(
    //     JSON.stringify(back)
    //   )}`
    // );
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
