import { NextRequest, NextResponse } from "next/server";

// Fixed admin credentials
const ADMIN_ID = "admin";
const ADMIN_PASSWORD = "gardeningbd2026";

export async function POST(req: NextRequest) {
  try {
    const { id, password } = await req.json();

    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
      // Generate a simple session token
      const token = Buffer.from(`${id}:${Date.now()}`).toString("base64");
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json(
      { error: "ভুল আইডি বা পাসওয়ার্ড" },
      { status: 401 },
    );
  } catch {
    return NextResponse.json(
      { error: "লগইন করতে সমস্যা হয়েছে" },
      { status: 500 },
    );
  }
}
