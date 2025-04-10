import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const ayanamsa = searchParams.get("ayanamsa") || "1";
    const coordinates = searchParams.get("coordinates");
    let datetime = searchParams.get("datetime");
    const chart_type = searchParams.get("chart_type");
    const chart_style = searchParams.get("chart_style");
    const format = searchParams.get("format");
    const la = searchParams.get("la") || "en";
    const upagraha_position = searchParams.get("upagraha_position") || "middle";

    if (!coordinates || !datetime || !chart_type || !chart_style || !format) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Decode the datetime to ensure it is formatted correctly
    datetime = decodeURIComponent(datetime);

    const apiUrl = `https://api.prokerala.com/v2/astrology/chart?ayanamsa=${ayanamsa}&coordinates=${coordinates}&datetime=${encodeURIComponent(
      datetime
    )}&chart_type=${chart_type}&chart_style=${chart_style}&format=${format}&la=${la}&upagraha_position=${upagraha_position}`;

    // Fetch token
    const tokenResponse = await fetch("http://localhost:3000/api/getToken", {
      method: "POST",
    });
    const { token } = await tokenResponse.json();

    if (!token) {
      return NextResponse.json(
        { error: "Failed to fetch token" },
        { status: 500 }
      );
    }

    // Fetch data from Prokerala API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status }
      );
    }

    // Return the SVG response
    const svgData = await response.text();
    return new Response(svgData, {
      headers: { "Content-Type": "image/svg+xml" },
      svg: svgData,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching Kundli data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Kundli data" },
      { status: 500 }
    );
  }
}
