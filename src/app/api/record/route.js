import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
// import { NextResponse } from "next/server";
import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const CLOUDINARY_CLOUD_NAME = "dzhk1vi95";
const CLOUDINARY_API_KEY = "537727662223771";
const CLOUDINARY_API_SECRET = "D4j_BvPu-GJ5oVPn8vwIh3B6A38";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "video", folder: "audio_uploads" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.pipe(uploadStream);
    });

    const result = await uploadPromise;
    // await connectDB();
    // console.log(result);

    // const audioDoc = await Audio.create({ url: result.secure_url });

    return NextResponse.json({ url: result.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

// Hi sir
// we have completed this points

// 1. siddhi 7 page development
// 2. 7 min slots added and they are not conflicting with current one
// 3. siddhi 7 page added in services page4. option to make bymistake booked slot to make available 5. bluk slot selection in dashboard and make them available,6.
