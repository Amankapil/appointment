import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio WhatsApp-enabled phone number
// console.log(twilioPhoneNumber);

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const { name, email, phone } = await request.json();

    // Message to send
    const message = `New Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;

    // List of receiver numbers
    const receiverNumbers = [
      process.env.RECEIVER_PHONE_NUMBER_2, // Second receiver
      phone, // First receiver
    ];

    // Send message to all receivers
    for (const receiverNumber of receiverNumbers) {
      await client.messages.create({
        body: message,
        from: `whatsapp:${twilioPhoneNumber}`,
        to: `whatsapp:${receiverNumber}`,
      });
    }

    // Send message to sender (user's WhatsApp number)
    // await client.messages.create({
    //   body: `Thank you for submitting your details, ${name}! We will contact you shortly.`,
    //   from: `whatsapp:${twilioPhoneNumber}`,
    //   to: `whatsapp:${phone}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
