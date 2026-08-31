import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/orders/[id] - Get a single order by order number (with phone verification)
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    const order = await db.order.findFirst({
      where: {
        OR: [{ id }, { orderNumber: id.toUpperCase() }],
      },
      include: { items: true, customer: true },
    });

    if (!order) {
      return NextResponse.json(
        { error: "এই অর্ডার নম্বরটি পাওয়া যায়নি। সঠিক নম্বর দিন।" },
        { status: 404 },
      );
    }

    // Verify phone if provided
    if (phone && order.customer.phone !== phone) {
      return NextResponse.json(
        { error: "ফোন নম্বর মেলেনি। সঠিক নম্বর দিন।" },
        { status: 403 },
      );
    }

    return NextResponse.json({ order });
  } catch (error) {
    console.error("Fetch order error:", error);
    return NextResponse.json(
      { error: "অর্ডার লোড করতে সমস্যা" },
      { status: 500 },
    );
  }
}

// PATCH /api/orders/[id] - Update order status
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const validStatuses = ["pending", "confirmed", "packaging", "shipping", "delivered", "cancelled"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "অবৈধ স্ট্যাটাস" },
        { status: 400 },
      );
    }

    const order = await db.order.update({
      where: { id },
      data: { status },
      include: { items: true, customer: true },
    });

    return NextResponse.json({ order });
  } catch (error) {
    console.error("Update order error:", error);
    return NextResponse.json(
      { error: "অর্ডার আপডেট করতে সমস্যা" },
      { status: 500 },
    );
  }
}

// DELETE /api/orders/[id] - Delete an order
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await db.order.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete order error:", error);
    return NextResponse.json(
      { error: "অর্ডার মুছতে সমস্যা" },
      { status: 500 },
    );
  }
}
