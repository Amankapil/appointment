// import { NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Availability from "../../../models/Availability";

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const data = await req.json();
//     const { date, slots } = data;

//     if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
//       return NextResponse.json(
//         { error: `Invalid date format: ${date}` },
//         { status: 400 }
//       );
//     }

//     if (
//       !Array.isArray(slots) ||
//       slots.some(
//         (slot) =>
//           typeof slot !== "object" ||
//           !slot.time ||
//           !slot.duration ||
//           ![15, 30, 60].includes(slot.duration) ||
//           !["available", "booked"].includes(slot.status)
//       )
//     ) {
//       return NextResponse.json(
//         { error: "Invalid slots data" },
//         { status: 400 }
//       );
//     }

//     // Find existing availability for the date
//     const existingAvailability = await Availability.findOne({ date });

//     if (existingAvailability) {
//       // Merge new slots with existing ones, avoiding duplicates
//       const updatedSlots = [...existingAvailability.slots];

//       slots.forEach((newSlot) => {
//         const slotExists = updatedSlots.some(
//           (existingSlot) => existingSlot.time === newSlot.time
//         );
//         if (!slotExists) {
//           updatedSlots.push(newSlot);
//         }
//       });

//       // Update the existing document
//       await Availability.updateOne({ date }, { slots: updatedSlots });

//       return NextResponse.json(
//         { success: true, message: `Availability updated for ${date}` },
//         { status: 200 }
//       );
//     } else {
//       // Insert new availability if no record exists
//       await Availability.create({ date, slots });

//       return NextResponse.json(
//         { success: true, message: `Availability added for ${date}` },
//         { status: 201 }
//       );
//     }
//   } catch (error) {
//     console.error("Error inserting/updating availability:", error);
//     return NextResponse.json(
//       { error: "Operation failed", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req) {
//   await dbConnect();

//   try {
//     // Extract date query parameter
//     const url = new URL(req.url, "http://localhost");
//     const date = url.searchParams.get("date");

//     if (!date) {
//       return NextResponse.json(
//         { error: "Date parameter is required" },
//         { status: 400 }
//       );
//     }

//     // Fetch availability for the requested date
//     const availability = await Availability.findOne({ date });

//     return NextResponse.json(availability || { date, slots: [] }, {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error fetching availability:", error);
//     return NextResponse.json(
//       { error: "Fetch failed", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Availability from "../../../models/Availability";

export async function POST(req) {
  await dbConnect();

  try {
    const data = await req.json();
    const { date, slots } = data;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: `Invalid date format: ${date}` },
        { status: 400 }
      );
    }

    if (
      !Array.isArray(slots) ||
      slots.some(
        (slot) =>
          typeof slot !== "object" ||
          !slot.time ||
          !slot.duration ||
          ![15, 30, 45].includes(slot.duration) ||
          !["available", "booked"].includes(slot.status)
      )
    ) {
      return NextResponse.json(
        { error: "Invalid slots data" },
        { status: 400 }
      );
    }

    // Find existing availability for the date
    const existingAvailability = await Availability.findOne({ date });

    if (existingAvailability) {
      // Remove slots that are not included in the updated request
      const updatedSlots = existingAvailability.slots.filter((existingSlot) =>
        slots.some((newSlot) => newSlot.time === existingSlot.time)
      );

      // Add new slots that are not in the existing list
      slots.forEach((newSlot) => {
        const slotExists = updatedSlots.some(
          (existingSlot) => existingSlot.time === newSlot.time
        );
        if (!slotExists) {
          updatedSlots.push(newSlot);
        }
      });

      // Update the existing document
      await Availability.updateOne({ date }, { slots: updatedSlots });

      return NextResponse.json(
        { success: true, message: `Availability updated for ${date}` },
        { status: 200 }
      );
    } else {
      // Insert new availability if no record exists
      await Availability.create({ date, slots });

      return NextResponse.json(
        { success: true, message: `Availability added for ${date}` },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error inserting/updating availability:", error);
    return NextResponse.json(
      { error: "Operation failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await dbConnect();

  try {
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
