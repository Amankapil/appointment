import dbConnect from "@/lib/dbConnect";
import Staff from "@/models/Staff";
import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Staff from "@/models/Staff";

export async function GET() {
  try {
    await dbConnect();
    const staff = await Staff.find({});
    return NextResponse.json({ success: true, data: staff });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();

    // const image = formData.get("image");
    // const bytes = await image.arrayBuffer();
    // const buffer = Buffer.from(bytes);
    // const base64Image = buffer.toString("base64");
    // const mimeType = image.type;
    // const imageUri = `data:${mimeType};base64,${base64Image}`;

    const staffData = {
      name: formData.get("name"),
      //   image: imageUri,
      profession: formData.get("profession"),
      educations: formData.get("educations"),
      experience: formData.get("experience"),
    };

    const staff = await Staff.create(staffData);
    return NextResponse.json({ success: true, data: staff }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
