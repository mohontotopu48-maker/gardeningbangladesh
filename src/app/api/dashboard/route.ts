import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/dashboard - Dashboard stats
export async function GET() {
  try {
    const [totalOrders, totalCustomers, pendingOrders, deliveredOrders] =
      await Promise.all([
        db.order.count(),
        db.customer.count(),
        db.order.count({ where: { status: "pending" } }),
        db.order.count({ where: { status: "delivered" } }),
      ]);

    // Total revenue from delivered orders
    const revenueResult = await db.order.aggregate({
      where: { status: { in: ["delivered", "shipping"] } },
      _sum: { total: true },
    });

    const totalRevenue = revenueResult._sum.total || 0;

    // Recent orders
    const recentOrders = await db.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { customer: true, items: true },
    });

    // Status breakdown
    const statusBreakdown = await db.order.groupBy({
      by: ["status"],
      _count: true,
    });

    return NextResponse.json({
      stats: {
        totalOrders,
        totalCustomers,
        pendingOrders,
        deliveredOrders,
        totalRevenue,
      },
      recentOrders,
      statusBreakdown,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { error: "ড্যাশবোর্ড লোড করতে সমস্যা" },
      { status: 500 },
    );
  }
}
