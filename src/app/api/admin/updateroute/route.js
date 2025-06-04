// import { NextResponse } from "next/server";
// // import dbConnect from "../../../lib/dbConnect";
// // import Availability from "../../../models/Availability";

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const { date, time } = await req.json();

//     if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
//       return NextResponse.json(
//         { error: `Invalid date format: ${date}` },
//         { status: 400 }
//       );
//     }

//     if (!time) {
//       return NextResponse.json(
//         { error: "Time parameter is required" },
//         { status: 400 }
//       );
//     }

//     // Find the availability document for the date
//     const availability = await Availability.findOne({ date });

//     if (!availability) {
//       return NextResponse.json(
//         { error: "No availability found for this date" },
//         { status: 404 }
//       );
//     }

//     // Find and update the specific slot
//     const updatedSlots = availability.slots.map((slot) => {
//       if (slot.time === time && slot.status === "booked") {
//         return { ...slot, status: "available" };
//       }
//       return slot;
//     });

//     // Update the document
//     await Availability.updateOne({ date }, { $set: { slots: updatedSlots } });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Slot status updated successfully",
//         updatedSlots: updatedSlots,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating slot status:", error);
//     return NextResponse.json(
//       { error: "Operation failed", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Availability from "@/models/Availability";

export async function POST(req) {
  await dbConnect();

  try {
    const { date, time } = await req.json();

    // Validate input
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: `Invalid date format: ${date}` },
        { status: 400 }
      );
    }

    if (!time) {
      return NextResponse.json(
        { error: "Time parameter is required" },
        { status: 400 }
      );
    }

    // Find and update the specific slot using MongoDB's arrayFilters
    const result = await Availability.updateOne(
      { date },
      { $set: { "slots.$[elem].status": "available" } },
      {
        arrayFilters: [{ "elem.time": time, "elem.status": "booked" }],
        upsert: false,
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        {
          error:
            "No booked slot found with this time or it's already available",
          details: result,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Slot status updated successfully",
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating slot status:", error);
    return NextResponse.json(
      { error: "Operation failed", details: error.message },
      { status: 500 }
    );
  }
}
