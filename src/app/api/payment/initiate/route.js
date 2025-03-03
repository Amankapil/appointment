import { NextResponse } from "next/server";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { writeFile } from "fs/promises";
import path from "path";
export async function POST(request) {
  const {
    name,
    email,
    phone,
    amount,
    tob,
    dob,
    gender,
    country,
    state,
    svgUrl,
    city,
    selectedTime,
    selectedDate,
  } = await request.json();

  if (!name || !email || !phone || !amount) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }
  // const svgContent = atob(svgdata);
  const base64Data = svgUrl.split(",")[1]; // Removes "data:image/svg+xml;base64,"
  if (!base64Data) {
    return NextResponse.json({ error: "Invalid SVG data" }, { status: 400 });
  }

  // Convert Base64 to a Buffer
  const buffer = Buffer.from(base64Data, "base64");
  const fileName = `${uuidv4()}.svg`;
  // const filePath = `/public/uploads/${fileName}`;

  // Save the file

  const filePath1 = path.join("public/uploads", fileName);
  await writeFile(filePath1, buffer);

  const filePath2 = filePath1.replace(/^public\//, ""); // Remove "public/"

  const protocol = request.headers.get("x-forwarded-proto") || "http";
  const host = request.headers.get("host");
  const filePath = `${protocol}://${host}/${filePath2}`;

  // const filePath = `${request.protocol}://${request.get("host")}/${filePath2}`;

  console.log(`SVG saved at: ${filePath1}`);
  console.log(`Stored path in DB: ${filePath}`);

  const MERCHANT_KEY = process.env.PAYU_MERCHANT_KEY;
  const MERCHANT_SALT = process.env.PAYU_MERCHANT_SALT;
  const NEXT_PUBLIC_BASE_URL = `${protocol}://${host}`;
  const PAYU_BASE_URL = "https://secure.payu.in/_payment";

  const txnid = "Txn" + Date.now();

  // Prepare additional data
  const additionalData = {
    name,
    email,
    phone,
    amount,
    tob,
    dob,
    gender,
    country,
    state,
    city,
    svgUrl,
    selectedTime,
    selectedDate,
  };
  // Convert additional data to JSON string
  const additionalDataString = JSON.stringify(additionalData);
  console.log("on initiate page aditional", additionalDataString);
  // Generate hash
  const hashString = `${MERCHANT_KEY}|${txnid}|${amount}|Product_Info|${name}|${email}|||||||||||${MERCHANT_SALT}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  // Prepare PayU data
  const payUData = {
    key: MERCHANT_KEY,
    txnid,
    amount,
    productinfo: "Product_Info",
    firstname: name,
    service_provider: "payu_paisa",
    email,
    phone,
    surl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/success?selectedDate=${selectedDate}&selectedTime=${selectedTime}&dob=${dob}&country=${country}&gender=${gender}&tob=${tob}&state=${state}&city=${city}&svgUrl=${filePath}`,
    furl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/failure?selectedDate=${selectedDate}&selectedTime=${selectedTime}&dob=${dob}&country=${country}&gender=${gender}&tob=${tob}&state=${state}&city=${city}`,
    hash,
    // add: additionalDataString, // Pass additional data as a JSON string
  };

  console.log("on initiate", payUData);

  return NextResponse.json({ payUData, url: `${PAYU_BASE_URL}/_payment` });
}
