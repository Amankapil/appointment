// import { NextResponse } from "next/server";
// import crypto from "crypto";

// import ChatPayment from "@/models/LiveChatPayment";
// import dbConnect from "@/lib/dbConnect";
// import LiveChatPayment from "@/models/LiveChatPayment";

// const PAYU_KEY = process.env.PAYU_MERCHANT_KEY;
// const PAYU_SALT = process.env.PAYU_MERCHANT_SALT;
// // const PAYU_BASE_URL = process.env.PAYU_BASE_URL; // e.g., https://secure.payu.in or https://test.payu.in
// const PAYU_BASE_URL = "https://secure.payu.in/_payment";
// export async function POST(req) {
//   await dbConnect();
//   const { name, email, phone } = await req.json();
//   const txnid = "CHAT" + Date.now();
//   const amount = "1.00";
//   const productinfo = "Live Chat with K Jagadish";
//   const res = await LiveChatPayment.create({
//     name,
//     email,
//     phone,
//     txnid,
//     amount,
//     status: "pending",
//   });
//   console.log("data save", res);
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//   const hashString = `${PAYU_KEY}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${PAYU_SALT}`;
//   const hash = crypto.createHash("sha512").update(hashString).digest("hex");
//   const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/?payment=success&txnid=${txnid}`;
//   const failureUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/?payment=failed&txnid=${txnid}`;
//   //   const successUrl = `${baseUrl}/api/live-chat/close`;
//   //   const failureUrl = `${baseUrl}/api/live-chat/close`;
//   const paymentForm = `
//   <form id="payuForm" method="post" action="${PAYU_BASE_URL}/_payment">
//     <input type="hidden" name="key" value="${PAYU_KEY}" />
//     <input type="hidden" name="txnid" value="${txnid}" />
//     <input type="hidden" name="amount" value="${amount}" />
//     <input type="hidden" name="productinfo" value="${productinfo}" />
//     <input type="hidden" name="firstname" value="${name}" />
//     <input type="hidden" name="email" value="${email}" />
//     <input type="hidden" name="phone" value="${phone}" />
//     <input type="hidden" name="surl" value="${successUrl}" />
//     <input type="hidden" name="furl" value="${failureUrl}" />
//     <input type="hidden" name="hash" value="${hash}" />
//     <script>document.getElementById('payuForm').submit();</script>
//   </form>
// `;

//   // Store initial record
//   await ChatPayment.create({ name, email, phone, txnid, status: "initiated" });

//   return NextResponse.json({ paymentForm, txnid });
// }

import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import LiveChatPayment from "@/models/LiveChatPayment";

const PAYU_KEY = process.env.PAYU_MERCHANT_KEY;
const PAYU_SALT = process.env.PAYU_MERCHANT_SALT;
const PAYU_BASE_URL = "https://secure.payu.in/_payment";

export async function POST(req) {
  await dbConnect();

  try {
    const { name, email, phone } = await req.json();
    const txnid = "CHAT" + Date.now();
    const amount = "499.00";
    const productinfo = "Live Chat with K Jagadish";

    // Store initial record
    await LiveChatPayment.create({
      name,
      email,
      phone,
      txnid,
      amount,
      status: "pending",
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Generate hash for PayU
    const hashString = `${PAYU_KEY}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${PAYU_SALT}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // // Use the same pattern as your existing integration
    // const successUrl = `${baseUrl}/?payment=success&txnid=${txnid}`;
    // const failureUrl = `${baseUrl}/?payment=failed&txnid=${txnid}`;
    // Send all data via search parameters
    const successUrl = `${baseUrl}/api/live-chat/payment-success?txnid=${txnid}&name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
      phone
    )}&amount=${amount}&status=success`;
    const failureUrl = `${baseUrl}/api/live-chat/payment-failure?txnid=${txnid}&name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
      phone
    )}&amount=${amount}&status=failed`;
    const payUData = {
      key: PAYU_KEY,
      txnid: txnid,
      amount: amount,
      productinfo: productinfo,
      firstname: name,
      email: email,
      phone: phone,
      surl: successUrl,
      furl: failureUrl,
      hash: hash,
      service_provider: "payu_paisa",
    };

    return NextResponse.json({
      payUData,
      url: PAYU_BASE_URL,
      txnid: txnid,
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    return NextResponse.json(
      { error: "Failed to initiate payment" },
      { status: 500 }
    );
  }
}
