import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// PATCH /api/memberships/[id] - Update membership status
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const validStatuses = ["pending", "active", "expired", "cancelled"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "অবৈধ স্ট্যাটাস" },
        { status: 400 },
      );
    }

    const membership = await db.membership.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ membership });
  } catch (error) {
    console.error("Update membership error:", error);
    return NextResponse.json(
      { error: "সদস্যপদ আপডেট করতে সমস্যা" },
      { status: 500 },
    );
  }
}

// DELETE /api/memberships/[id] - Delete a membership
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await db.membership.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete membership error:", error);
    return NextResponse.json(
      { error: "সদস্যপদ মুছতে সমস্যা" },
      { status: 500 },
    );
  }
}
