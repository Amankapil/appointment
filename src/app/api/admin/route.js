// import { NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Availability from "../../../models/Availability";

// export async function POST(req) {
//   await dbConnect();

//   try {
//     // Ensure request body is parsed properly
//     const data = await req.json();

//     // Extract date and slots (handling single date per request)
//     const [date, rawSlots] = Object.entries(data)[0];

//     // Ensure slots is an array (force JSON parsing if needed)
//     const slots = Array.isArray(rawSlots) ? rawSlots : JSON.parse(rawSlots);

//     // Validate date format
//     if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
//       return NextResponse.json(
//         { error: `Invalid date format: ${date}` },
//         { status: 400 }
//       );
//     }

//     // Validate slots structure
//     if (
//       !Array.isArray(slots) ||
//       slots.some(
//         (slot) =>
//           typeof slot !== "object" ||
//           !slot.time ||
//           !["available", "booked"].includes(slot.status)
//       )
//     ) {
//       return NextResponse.json(
//         { error: "Invalid slots data" },
//         { status: 400 }
//       );
//     }

//     // Check if availability for this date already exists
//     const existingAvailability = await Availability.findOne({ date });
//     if (existingAvailability) {
//       return NextResponse.json(
//         {
//           error: `Availability for ${date} already exists`,
//           data: existingAvailability,
//         },
//         { status: 409 }
//       );
//     }

//     // Insert new availability
//     await Availability.create({ date, slots });

//     return NextResponse.json(
//       { success: true, message: `Availability added for ${date}` },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error adding availability:", error);
//     return NextResponse.json({ error: "Insertion failed" }, { status: 500 });
//   }
// }

// export async function GET() {
//   await dbConnect();

//   try {
//     const availability = await Availability.findOne({});
//     return NextResponse.json(availability || { days: [], slots: {} }, {
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Availability from "../../../models/Availability";

export async function POST(req) {
  await dbConnect();

  try {
    // Log request body
    const data = await req.json();
    console.log("Received data:", data);

    // Extract correctly
    const { date, slots } = data;

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: `Invalid date format: ${date}` },
        { status: 400 }
      );
    }

    // Validate slots structure
    if (
      !Array.isArray(slots) ||
      slots.some(
        (slot) =>
          typeof slot !== "object" ||
          !slot.time ||
          !slot.duration ||
          ![15, 30, 60].includes(slot.duration) ||
          !["available", "booked"].includes(slot.status)
      )
    ) {
      console.log("Invalid slots data:", slots);
      return NextResponse.json(
        { error: "Invalid slots data" },
        { status: 400 }
      );
    }

    // Check if availability for this date already exists
    const existingAvailability = await Availability.findOne({ date });
    if (existingAvailability) {
      return NextResponse.json(
        {
          error: `Availability for ${date} already exists`,
          data: existingAvailability,
        },
        { status: 409 }
      );
    }

    // Insert new availability
    await Availability.create({ date, slots });

    console.log(`Availability added successfully for ${date}`);
    return NextResponse.json(
      { success: true, message: `Availability added for ${date}` },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting availability:", error);
    return NextResponse.json(
      { error: "Insertion failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await dbConnect();

  try {
    // Extract date query parameter
    const url = new URL(req.url, "http://localhost");
    const date = url.searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        { error: "Date parameter is required" },
        { status: 400 }
      );
    }

    // Fetch availability for the requested date
    const availability = await Availability.findOne({ date });

    return NextResponse.json(availability || { date, slots: [] }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { error: "Fetch failed", details: error.message },
      { status: 500 }
    );
  }
}
