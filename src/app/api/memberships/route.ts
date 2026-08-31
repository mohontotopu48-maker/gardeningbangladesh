import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const PLANS = {
  monthly: { amount: 250, label: "মাসিক সদস্যপদ" },
  lifetime: { amount: 150, label: "এককালীন সদস্যপদ" },
};

// Generate member code like GBM240831001
function generateMemberCode(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(Math.random() * 900) + 100);
  return `GBM${yy}${mm}${dd}${rand}`;
}

// POST /api/memberships - Create a new membership
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, address, city, plan, note } = body;

    // Validate
    if (!name || !phone || !plan) {
      return NextResponse.json(
        { error: "নাম, ফোন নম্বর ও প্ল্যান আবশ্যক" },
        { status: 400 },
      );
    }

    const planConfig = PLANS[plan as keyof typeof PLANS];
    if (!planConfig) {
      return NextResponse.json(
        { error: "অবৈধ প্ল্যান। 'monthly' বা 'lifetime' নির্বাচন করুন" },
        { status: 400 },
      );
    }

    // Generate unique member code
    let memberCode = generateMemberCode();
    let existing = await db.membership.findUnique({ where: { memberCode } });
    while (existing) {
      memberCode = generateMemberCode();
      existing = await db.membership.findUnique({ where: { memberCode } });
    }

    const membership = await db.membership.create({
      data: {
        name,
        phone,
        email: email || null,
        address: address || null,
        city: city || null,
        plan,
        amount: planConfig.amount,
        memberCode,
        note: note || null,
        status: "pending",
      },
    });

    return NextResponse.json(
      { success: true, membership },
      { status: 201 },
    );
  } catch (error) {
    console.error("Membership creation error:", error);
    return NextResponse.json(
      { error: "সদস্যপদ তৈরি করতে সমস্যা হয়েছে" },
      { status: 500 },
    );
  }
}

// GET /api/memberships - List all memberships
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { phone: { contains: search } },
        { memberCode: { contains: search } },
      ];
    }

    const memberships = await db.membership.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ memberships });
  } catch (error) {
    console.error("Fetch memberships error:", error);
    return NextResponse.json(
      { error: "সদস্যপদ লোড করতে সমস্যা" },
      { status: 500 },
    );
  }
}
