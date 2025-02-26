// import dbConnect from "@/lib/dbConnect";
// import Appointment from "@/models/booking";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     await dbConnect();
//     const data = await Appointment.find({});
//     return NextResponse.json({
//       success: true,
//       data: data,
//       message: "found successfully",
//     });
//   } catch (err) {
//     return NextResponse.json({ success: false, status: 500, eerror: err });
//   }
// }

// export async function POST(req) {
//   try {
//     await dbConnect();

//     const body = await req.json(); // Use req.json() to parse request body in Next.js 13+
//     const { date, time, name, email, phone, person, service } = body;
//     // Create new appointment
//     const newAppointment = new Appointment({
//       date,
//       time,
//       name,
//       email,
//       phone,
//       person,
//       service,
//       meetLink: `https://meet.google.com/${Math.random()
//         .toString(36)
//         .substr(2, 9)}`,
//     });

//     await newAppointment.save();

//     return NextResponse.json({
//       success: true,
//       data: newAppointment,
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Booking error:", error);
//     return NextResponse.json(
//       { error: "Booking failed", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req) {
//   try {
//     await dbConnect();
//     const services = await Service.find({});
//     return NextResponse.json({ success: true, data: services });
//   } catch (err) {
//     return NextResponse.json({
//       success: false,
//       error: err.message,
//       status: 500,
//     });
//   }
// }

// working above
// working above
// working above
// working above
// working above

// import dbConnect from "@/lib/dbConnect";
// import Appointment from "@/models/booking";
// import { NextResponse } from "next/server";
// import axios from "axios";

// const ZOOM_API_KEY = "683lTKJAQEmsC7Lw5OxVlQ";
// const ZOOM_API_SECRET = "dPS0ED1H1b9H5VlNpWDRU9qe45WiVwAt";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/booking";
import { NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";

async function getZoomAccessToken() {
  const ACCOUNT_ID = "24gEaUE1SeyYxLjTQ6T3SQ";
  const CLIENT_ID = "683lTKJAQEmsC7Lw5OxVlQ";
  const CLIENT_SECRET = "dPS0ED1H1b9H5VlNpWDRU9qe45WiVwAt";

  const response = await axios.post(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ACCOUNT_ID}`,
    null,
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data.access_token;
}

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
    html,
  });
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { date, time, name, email, phone, person, service } = body;

    // Get Zoom Access Token
    const ZOOM_ACCESS_TOKEN = await getZoomAccessToken();

    // Create Zoom Meeting
    const zoomResponse = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic: `Appointment with ${name}`,
        type: 2,
        start_time: `${date}T${time}:00Z`, // Ensure proper format
        duration: 30,
        timezone: "America/New_York",
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          approval_type: 0,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ZOOM_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const meetingLink = zoomResponse.data.join_url;

    // Save appointment in DB
    const newAppointment = new Appointment({
      date,
      time,
      name,
      email,
      phone,
      person,
      service,
      meetLink: meetingLink,
    });

    await newAppointment.save();

    // Send Email
    await sendEmail({
      to: email,
      subject: "Your Zoom Meeting Details",
      text: `Hello ${name},\n\nYour appointment is confirmed.\n\n📅 Date: ${date}\n🕒 Time: ${time}\n🔗 Zoom Meeting Link: ${meetingLink}\n\nBest Regards,\nYour Company`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Your appointment is confirmed.</p>
        <ul>
          <li><b>📅 Date:</b> ${date}</li>
          <li><b>🕒 Time:</b> ${time}</li>
          <li><b>🔗 Zoom Meeting Link:</b> <a href="${meetingLink}">${meetingLink}</a></li>
        </ul>
        <p>Best Regards,<br>Codelinear</p>
      `,
    });

    return NextResponse.json({
      success: true,
      data: newAppointment,
      meetLink: meetingLink,
      status: 201,
    });
  } catch (error) {
    console.error("Booking error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Booking failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const data = await Appointment.find({});
    return NextResponse.json({
      success: true,
      data: data,
      message: "found successfully",
    });
  } catch (err) {
    return NextResponse.json({ success: false, status: 500, eerror: err });
  }
}
