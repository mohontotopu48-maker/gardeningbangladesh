import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Generate order number like GB240831001
function generateOrderNumber(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(Math.random() * 900) + 100);
  return `GB${yy}${mm}${dd}${rand}`;
}

// POST /api/orders - Create a new order
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, items, subtotal, deliveryCharge, total, note } = body;

    // Validate required fields
    if (!customer?.name || !customer?.phone || !items?.length) {
      return NextResponse.json(
        { error: "নাম, ফোন নম্বর ও পণ্য আবশ্যক" },
        { status: 400 },
      );
    }

    // Find or create customer
    let dbCustomer = await db.customer.findUnique({
      where: { phone: customer.phone },
    });

    if (!dbCustomer) {
      dbCustomer = await db.customer.create({
        data: {
          name: customer.name,
          phone: customer.phone,
          email: customer.email || null,
          address: customer.address || null,
          city: customer.city || null,
        },
      });
    } else {
      // Update customer info
      dbCustomer = await db.customer.update({
        where: { id: dbCustomer.id },
        data: {
          name: customer.name,
          email: customer.email || dbCustomer.email,
          address: customer.address || dbCustomer.address,
          city: customer.city || dbCustomer.city,
        },
      });
    }

    // Generate unique order number
    let orderNumber = generateOrderNumber();
    let existing = await db.order.findUnique({ where: { orderNumber } });
    while (existing) {
      orderNumber = generateOrderNumber();
      existing = await db.order.findUnique({ where: { orderNumber } });
    }

    // Create order with items
    const order = await db.order.create({
      data: {
        orderNumber,
        customerId: dbCustomer.id,
        subtotal: parseFloat(subtotal),
        deliveryCharge: parseFloat(deliveryCharge),
        total: parseFloat(total),
        note: note || null,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            name: item.name,
            price: parseFloat(item.price),
            quantity: item.quantity,
            image: item.image || null,
          })),
        },
      },
      include: { items: true, customer: true },
    });

    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "অর্ডার তৈরি করতে সমস্যা হয়েছে" },
      { status: 500 },
    );
  }
}

// GET /api/orders - List all orders (with optional status filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const where: any = {};
    if (status && status !== "all") {
      where.status = status;
    }
    if (search) {
      where.OR = [
        { orderNumber: { contains: search } },
        { customer: { name: { contains: search } } },
        { customer: { phone: { contains: search } } },
      ];
    }

    const orders = await db.order.findMany({
      where,
      include: { items: true, customer: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Fetch orders error:", error);
    return NextResponse.json(
      { error: "অর্ডার লোড করতে সমস্যা" },
      { status: 500 },
    );
  }
}
