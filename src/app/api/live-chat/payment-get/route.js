import dbConnect from "@/lib/dbConnect";
import LiveChatPayment from "@/models/LiveChatPayment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const payments = await LiveChatPayment.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: payments });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   try {
//     await dbConnect();
//     const { name, email, phone, txnid, amount } = await request.json();

//     const newPayment = await LiveChatPayment.create({
//       name,
//       email,
//       phone,
//       txnid,
//       amount,
//       status: "pending",
//     });

//     return NextResponse.json({ success: true, data: newPayment });
//   } catch (error) {
//     console.error("Error creating payment:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create payment" },
//       { status: 500 }
//     );
//   }
// }
