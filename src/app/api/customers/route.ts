import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/customers - List all customers
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { phone: { contains: search } },
        { email: { contains: search } },
      ];
    }

    const customers = await db.customer.findMany({
      where,
      include: {
        orders: {
          select: { id: true, total: true, status: true, createdAt: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ customers });
  } catch (error) {
    console.error("Fetch customers error:", error);
    return NextResponse.json(
      { error: "কাস্টমার লোড করতে সমস্যা" },
      { status: 500 },
    );
  }
}

// POST /api/customers - Create a customer
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, address, city } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "নাম ও ফোন নম্বর আবশ্যক" },
        { status: 400 },
      );
    }

    const customer = await db.customer.create({
      data: { name, phone, email, address, city },
    });

    return NextResponse.json({ customer }, { status: 201 });
  } catch (error) {
    console.error("Create customer error:", error);
    return NextResponse.json(
      { error: "কাস্টমার তৈরি করতে সমস্যা" },
      { status: 500 },
    );
  }
}
