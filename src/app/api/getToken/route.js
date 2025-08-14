import { NextResponse } from "next/server";

export async function POST() {
  const url = "https://api.prokerala.com/token";
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  // console.log(clientId);

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const data = await response.json();

    // Set CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your frontend origin
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Return the token with CORS headers
    return NextResponse.json(
      { token: data.access_token },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error fetching token this line 39:", error);
    return NextResponse.json(
      { error: "Failed to fetch token this line 41" },
      { status: 500 }
    );
  }
}
