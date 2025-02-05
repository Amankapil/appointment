import dbConnect from "@/lib/dbConnect";
import Availability from "@/models/Availability";
import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
// import Availability from "@/models/Availability";

export async function POST(req) {
  await dbConnect();

  try {
    const { date, time } = await req.json();

    if (!date || !time) {
      return NextResponse.json(
        { error: "Date and time are required" },
        { status: 400 }
      );
    }

    // Find the availability record for the given date
    // const formattedDate = new Date(date).toISOString().split("T")[0];
    // console.log(formattedDate);
    const availability = await Availability.findOne({ date });
    // console.log(availability);
    if (!availability) {
      return NextResponse.json(
        { error: "No slots found for this date" },
        { status: 404 }
      );
    }

    // Find the specific slot and update its status to "booked"
    const slotIndex = availability.slots.findIndex(
      (slot) => slot.time === time
    );

    if (slotIndex === -1) {
      return NextResponse.json(
        { error: "Time slot not found" },
        { status: 404 }
      );
    }

    availability.slots[slotIndex].status = "booked";
    await availability.save();

    return NextResponse.json(
      { success: true, message: "Slot booked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating slot:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
