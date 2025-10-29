import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import LiveChatPayment from "@/models/LiveChatPayment";
import nodemailer from "nodemailer";

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

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const txnid = searchParams.get("txnid");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");
    const amount = searchParams.get("amount");
    const status = searchParams.get("status");

    console.log("Payment success data from search params:", {
      txnid,
      name,
      email,
      phone,
      amount,
      status,
    });

    if (!txnid) {
      return NextResponse.json(
        { error: "Transaction ID is required" },
        { status: 400 }
      );
    }

    // Update payment record in database
    const updateData = {
      status: "success",
      updatedAt: new Date(),
    };

    if (amount) updateData.actualAmount = amount;

    const updatedPayment = await LiveChatPayment.findOneAndUpdate(
      { txnid: txnid },
      updateData,
      { new: true }
    );

    if (!updatedPayment) {
      console.error("Payment record not found for txnid:", txnid);
      return NextResponse.json(
        { error: "Payment record not found" },
        { status: 404 }
      );
    }

    console.log("Payment updated successfully to success:", updatedPayment);
    const userMessage = `
Hello ${name},

Thank you for your payment of ₹499 for your live chat session with PrashnaSiddhi.

Your session is confirmed for today between 1 PM and 2 PM (IST).

Here are your session details:

👤 Expert: Mr. K. Jagadish (Founder, PrashnaSiddhi)
📞 Contact: +91 7259691375
💬 Mode: Live Chat (Phone / WhatsApp)
🕐 Time: 1 PM – 2 PM IST

Please make sure to contact Mr. Jagadish during the above time slot.

We’re looking forward to guiding you soon!

Warm regards,  
Team PrashnaSiddhi  
🌐 https://www.prashnasiddhi.com
`;

    const astrologerMessage = `
Hello Mr. K. Jagadish,

You have a new live chat appointment today. 📩

Here are the details:

👤 Client Name: ${name}
📞 Contact: ${phone}
💰 Amount: ₹${amount}
🕐 Time: 1 PM – 2 PM IST
💬 Mode: Live Chat (Phone / WhatsApp)

Please be available during the above time slot for the session.

— Team PrashnaSiddhi
🌐 https://www.prashnasiddhi.com
`;

    await sendEmail({
      to: email,
      subject: "🌟 Your Prashna Siddhi Consultation is Confirmed",
      text: userMessage,
    });

    await sendEmail({
      to: "jagadish.k48@gmail.com",
      subject: "Hey You have a New Live Chat Appointment..",
      text: astrologerMessage,
    });
    // Redirect to frontend with success status
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(
      `${baseUrl}/?payment=success&txnid=${txnid}&name=${name}`,
      {
        status: 303,
      }
    );
  } catch (error) {
    console.error("Error processing payment success:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/?payment=error`, { status: 303 });
  }
}

// Handle POST as well (in case PayU sends POST)
export async function POST(request) {
  return GET(request);
}
