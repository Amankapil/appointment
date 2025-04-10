// import { NextResponse } from "next/server";
// import twilio from "twilio";
// import nodemailer from "nodemailer";
// import Availability from "@/models/Availability";
// import Overseas from "@/models/Overseas";

// async function sendEmail({ to, subject, text, html }) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "prashnadevelop@gmail.com", // Replace with your Gmail
//       pass: "hlhc laic lhil njen", // Use App Password (not your Gmail password)
//     },
//   });

//   await transporter.sendMail({
//     from: '"Prashna Siddhi" aman@codelinear',
//     to,
//     subject,
//     text,
//     // html,
//   });
// }

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio WhatsApp-enabled phone number
// const client = twilio(accountSid, authToken);
// export async function POST(request) {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       amount,
//       tob,
//       dob,
//       latitude,
//       longitude,
//       gender,
//       country,
//       state,
//       duration,
//       svgUrl,
//       city,
//       selectedTime,
//       selectedDate,
//       transactionId,
//       paymentMode,
//     } = await request.json();
//     // const file = formData.get("file");
//     // console.log(file);

//     // const back = {
//     //   name,
//     //   email,
//     //   phone,
//     //   amount,
//     //   tob,
//     //   dob,
//     //   gender,
//     //   country,
//     //   state,
//     //   latitude,
//     //   longitude,
//     //   svgUrl,
//     //   city,
//     //   selectedTime,
//     //   selectedDate,
//     // };

//     // console.log(back);

//     const filePath = svgUrl;

//     console.log(`Stored path in DB: ${filePath}`);

//     const existingTransaction = await Overseas.findOne({ email });

//     if (existingTransaction) {
//       // Update existing record
//       await Overseas.updateOne(
//         { email },
//         {
//           $set: {
//             name,
//             phone,
//             tob,
//             transactionId,
//             paymentMode,
//             dob,
//             gender,
//             country,
//             state,
//             city,
//             selectedTime,
//             duration,
//             selectedDate,
//             latitude,
//             longitude,
//             filePath,
//             amount,
//             status: "Piad",
//             createdAt: new Date(),
//           },
//           $inc: { session: 1 }, // Increase session by 1
//         }
//       );
//     } else {
//       // Create new transaction
//       const overseas = new Overseas({
//         transactionId,
//         paymentMode,
//         name,
//         email,
//         phone,
//         tob,
//         dob,
//         gender,
//         country,
//         state,
//         city,
//         selectedTime,
//         duration,
//         selectedDate,
//         latitude,
//         longitude,
//         filePath,
//         amount,

//         session: 1,
//         status: "Urgent",
//         createdAt: new Date(),
//       });

//       await overseas.save();
//     }

//     const message2 = `Hey ${name}, You booked an Urgent Appointment with us Please check the details below and horoscope.\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;
//     // Example date

//     // const message = "Hey Jagdish You have an Urgent Appointment ";
//     // const message = `Hello Jagdish, your appointment is scheduled. Please find the details below:`;
//     // console.log(message);
//     const message = `Hey Jagdish You have an Urgent Appointment at ${selectedTime} Please see the details below !\nName: ${name}\nEmail: ${email}\nPhone:${phone}\nAmount: ${amount}\nSession Time: ${selectedTime}\nSession Date: ${selectedDate}\nHoroscope URL: ${filePath}`;

//     // const res = await client.messages.create({
//     //   from: "whatsapp:+917022239292",
//     //   to: "whatsapp:+918103075691",
//     //   body: "hey you have and message",
//     // });

//     // const res = await client.messages.create({
//     //   from: "whatsapp:+917022239292",
//     //   to: "whatsapp:+918103075691", // Recipient's WhatsApp Number
//     //   template: "your_template_name", // Template Name from Twilio
//     //   messagingServiceSid: "MG94ceaf50fa68645b14949efcd6cf22aa",
//     //   contentSid: "HX3c7d2323e4d6e25518d32be7466785de",
//     //   template: "testing", // Your Twilio-approved template name
//     // });

//     // const res = await client.messages.create({
//     //   from: "whatsapp:+917022239292", // Twilio WhatsApp Number
//     //   to: "whatsapp:+918103075691", // Dynamic recipient number
//     //   messagingServiceSid: "MG94ceaf50fa68645b14949efcd6cf22aa", // Required for templates
//     //   contentSid: "HXa4b0723a3035b7507865e7694e1a028c", // Get from Twilio Console
//     //   contentVariables: JSON.stringify({
//     //     1: selectedTime,
//     //     2: name,
//     //     3: email,
//     //     4: phone,
//     //     5: amount,
//     //     6: selectedDate,
//     //     7: filePath,
//     //   }),
//     // });

//     const res = await client.messages.create({
//       from: "whatsapp:+917022239292", // Twilio WhatsApp Number
//       to: "whatsapp:+918103075691", // Recipient's WhatsApp number
//       category: "TRANSACTIONAL",
//       contentSid: "HXa4b0723a3035b7507865e7694e1a028c", // Your Twilio Template SID
//       contentVariables: JSON.stringify({
//         1: selectedTime || "", // Static Name (Ensure it's always a string)
//         2: name || "",
//         3: email || "",
//         4: phone || "",
//         5: amount || "", // Ensure it's a string
//         6: selectedDate || "", // Ensure it's a string
//         7:
//           "https://res.cloudinary.com/dpmmcn7zv/image/upload/v1742885887/image_zuppxz.svg" ||
//           "", // Ensure it's a string
//       }),
//     });

//     // console.log("Message sent:", res.sid);
//     // 7259691375

//     // 7022239292

//     console.log("whatapp response", res);
//     await sendEmail({
//       to: email,
//       subject: "Session Confirm with Prashna Siddhi",
//       text: message2,
//     });
//     // await sendEmail({
//     //   to: "jagadish.k48@gmail.com",
//     //   subject: "Hey You have a New Appointment..",
//     //   text: message,
//     // });

//     const formattedDate = selectedDate.split("T")[0]; // Extracts only YYYY-MM-DD

//     const availability = await Availability.findOne({ date: formattedDate });

//     if (availability) {
//       const slotIndex = availability.slots.findIndex(
//         (slot) => slot.time === selectedTime
//       );

//       if (slotIndex !== -1) {
//         // Mark only the selected slot as "booked"
//         availability.slots[slotIndex].status = "booked";

//         // Convert time to minutes for easier calculations
//         const [startHour, startMin] = selectedTime
//           .split(" ")[0]
//           .split(":")
//           .map(Number);
//         const isPM = selectedTime.includes("PM");
//         const startTimeInMinutes =
//           (isPM && startHour !== 12 ? startHour + 12 : startHour) * 60 +
//           startMin;

//         // Define slot durations
//         const slotDurations = [15, 30, 45];
//         const affectedSlots = [];

//         // Identify overlapping slots
//         for (const slot of availability.slots) {
//           const [slotHour, slotMin] = slot.time
//             .split(" ")[0]
//             .split(":")
//             .map(Number);
//           const slotPM = slot.time.includes("PM");
//           const slotStartTime =
//             (slotPM && slotHour !== 12 ? slotHour + 12 : slotHour) * 60 +
//             slotMin;

//           if (
//             slotStartTime >= startTimeInMinutes &&
//             slotStartTime < startTimeInMinutes + duration &&
//             slot.time !== selectedTime // Keep the selected slot
//           ) {
//             affectedSlots.push(slot.time);
//           }

//           // Remove larger slots that overlap
//           if (
//             slotDurations.some(
//               (d) =>
//                 d > duration &&
//                 slotStartTime >= startTimeInMinutes &&
//                 slotStartTime < startTimeInMinutes + d
//             ) &&
//             slot.time !== selectedTime
//           ) {
//             affectedSlots.push(slot.time);
//           }
//         }

//         // Remove conflicting slots but keep the selected one
//         availability.slots = availability.slots.filter(
//           (slot) => !affectedSlots.includes(slot.time)
//         );

//         await availability.save();
//       }
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Your appointment is book on urgent basis",
//       data: back,
//     });
//   } catch (error) {
//     console.error("Error processing Urgent query:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
