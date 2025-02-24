import dbConnect from "@/lib/dbConnect";
import Availability from "@/models/Availability";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.formData();
    console.error("Payment failed:", data);
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const selectedTime = searchParams.get("selectedTime");
    const selectedDate = searchParams.get("selectedDate");
    const dob = searchParams.get("dob");
    const tob = searchParams.get("tob");
    const country = searchParams.get("country");
    const state = searchParams.get("state");
    const city = searchParams.get("city");
    const gender = searchParams.get("gender");

    console.log("failure page date", selectedTime, date);
    const name = data.get("firstname");
    // const city = data.get("city");
    const email = data.get("email");
    // const state = data.get("state");
    const phone = data.get("phone");
    const amount = data.get("amount");
    const txnid = data.get("txnid");
    // const svgString = data.get("country");
    await dbConnect();
    // Save transaction to the database
    const transaction = new Transaction({
      transactionId: txnid,
      name,
      email,
      phone,
      amount,
      country,
      state,
      gender,
      dob,
      tob,
      selectedDate,
      selectedTime,
      city,
      session: 1,
      status: "failed",
      paymentMethod: "PayU", // Save additional data to the database
    });

    // await transaction.save();

    // Update slot status to "booked"
    const availability = await Availability.findOne({ date: selectedDate });
    console.log(availability);
    if (availability) {
      const slotIndex = availability.slots.findIndex(
        (slot) => slot.time === selectedTime
      );
      if (slotIndex !== -1) {
        availability.slots[slotIndex].status = "booked";
        await availability.save();
      }
    }
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/booking`;
    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    // Use absolute URL
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/booking`;
    return NextResponse.json({
      success: false,
      message: "Payment failed",
      data,
    });
  }

  // Use absolute URL
  // const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/booking`;
  // return NextResponse.json({
  //   success: false,
  //   message: "Payment failed",
  //   data,
  // });
}
