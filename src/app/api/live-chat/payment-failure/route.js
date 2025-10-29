import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import LiveChatPayment from "@/models/LiveChatPayment";

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

    console.log("Payment failure data from search params:", {
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
      status: "failed",
      updatedAt: new Date(),
    };

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

    console.log("Payment updated to failed:", updatedPayment);

    // Redirect to frontend with failure status
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/?payment=failed&txnid=${txnid}`);
  } catch (error) {
    console.error("Error processing payment failure:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/?payment=error`);
  }
}

// Handle POST as well (in case PayU sends POST)
export async function POST(request) {
  return GET(request);
}
