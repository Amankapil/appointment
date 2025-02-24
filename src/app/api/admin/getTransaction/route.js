import dbConnect from "@/lib/dbConnect";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const transaction = await Transaction.find({});
    return NextResponse.json({ success: true, data: transaction });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}
