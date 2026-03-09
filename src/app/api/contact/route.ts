import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, business, website, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // TODO: Add Resend email integration
  // TODO: Add MongoDB storage

  console.log("Contact form submission:", {
    name,
    email,
    phone,
    business,
    website,
    message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
