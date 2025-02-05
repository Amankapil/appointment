import dbConnect from "@/lib/dbConnect";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json({ success: true, data: services });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}

// export async function GET() {
//   try {
//     await dbConnect();
//     const staff = await Staff.find({});
//     return NextResponse.json({ success: true, data: staff });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const services = await Service.create(body);
    return NextResponse.json({ success: true, data: services, status: 201 });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}
