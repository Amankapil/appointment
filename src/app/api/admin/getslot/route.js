import dbConnect from "@/lib/dbConnect";
import Availability from "@/models/Availability";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // Extract date from query params

  try {
    if (!date)
      return NextResponse.json({ error: "Date is required" }, { status: 400 });

    const availability = await Availability.findOne({ date });
    return NextResponse.json(availability || { date, slots: [] }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
