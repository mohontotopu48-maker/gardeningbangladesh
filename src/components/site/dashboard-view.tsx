"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, Users, DollarSign, Clock, Package, TrendingUp,
  Search, RefreshCw, Phone, MapPin, ChevronDown, X, CheckCircle2,
  Truck, PackageCheck, Home as HomeIcon, AlertCircle, ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type OrderStatus = "pending" | "confirmed" | "packaging" | "shipping" | "delivered" | "cancelled";

type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  subtotal: number;
  deliveryCharge: number;
  total: number;
  note: string | null;
  createdAt: string;
  customer: { name: string; phone: string; address: string | null; city: string | null };
  items: { id: string; name: string; price: number; quantity: number; image: string | null }[];
};

type Stats = {
  totalOrders: number;
  totalCustomers: number;
  pendingOrders: number;
  deliveredOrders: number;
  totalRevenue: number;
};

const statusConfig: Record<OrderStatus, { label: string; color: string; bg: string; icon: LucideIcon }> = {
  pending: { label: "অপেক্ষমান", color: "text-amber-700", bg: "bg-amber-100", icon: Clock },
  confirmed: { label: "নিশ্চিত", color: "text-blue-700", bg: "bg-blue-100", icon: CheckCircle2 },
  packaging: { label: "প্যাকেজিং", color: "text-purple-700", bg: "bg-purple-100", icon: PackageCheck },
  shipping: { label: "পথে আছে", color: "text-indigo-700", bg: "bg-indigo-100", icon: Truck },
  delivered: { label: "ডেলিভারি সম্পন্ন", color: "text-brand-green-dark", bg: "bg-brand-green-light", icon: HomeIcon },
  cancelled: { label: "বাতিল", color: "text-red-700", bg: "bg-red-100", icon: X },
};

export function DashboardView() {
  const [tab, setTab] = useState<"orders" | "customers">("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [ordersRes, dashRes] = await Promise.all([
        fetch(`/api/orders?status=${statusFilter}&search=${encodeURIComponent(search)}`),
        fetch("/api/dashboard"),
      ]);
      const ordersData = await ordersRes.json();
      const dashData = await dashRes.json();
      setOrders(ordersData.orders || []);
      setStats(dashData.stats);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [statusFilter, search]);

  const fetchCustomers = useCallback(async () => {
    try {
      const res = await fetch(`/api/customers?search=${encodeURIComponent(search)}`);
      const data = await res.json();
      setCustomers(data.customers || []);
    } catch (e) {
      console.error(e);
    }
  }, [search]);

  useEffect(() => {
    // Data fetching effect — setState here is standard pattern for async data loading
    /* eslint-disable react-hooks/set-state-in-effect */
    if (tab === "orders") {
      fetchData();
    } else {
      fetchCustomers();
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [tab, fetchData, fetchCustomers]);

  const updateStatus = async (orderId: string, status: OrderStatus) => {
    setUpdating(true);
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchData();
      if (selectedOrder?.id === orderId) {
        setSelectedOrder({ ...selectedOrder, status });
      }
    } catch (e) {
      console.error(e);
    }
    setUpdating(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <a href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand-green-dark mb-2">
              <ArrowLeft className="h-4 w-4" />
              হোম
            </a>
            <h1 className="text-2xl font-extrabold text-brand-green-deep">অ্যাডমিন ড্যাশবোর্ড</h1>
            <p className="text-sm text-muted-foreground">অর্ডার ও কাস্টমার ব্যবস্থাপনা</p>
          </div>
          <Button
            variant="outline"
            onClick={fetchData}
            className="rounded-full"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} />
            রিফ্রেশ
          </Button>
        </div>

        {/* Stats cards */}
        {stats && (
          <div className="mb-6 grid grid-cols-2 lg:grid-cols-5 gap-3">
            <StatCard icon={ShoppingBag} label="মোট অর্ডার" value={stats.totalOrders} color="bg-blue-500" delay={0} />
            <StatCard icon={Users} label="কাস্টমার" value={stats.totalCustomers} color="bg-purple-500" delay={0.1} />
            <StatCard icon={Clock} label="অপেক্ষমান" value={stats.pendingOrders} color="bg-amber-500" delay={0.2} />
            <StatCard icon={CheckCircle2} label="ডেলিভারি সম্পন্ন" value={stats.deliveredOrders} color="bg-brand-green" delay={0.3} />
            <StatCard icon={DollarSign} label="মোট আয়" value={`${stats.totalRevenue.toFixed(0)}৳`} color="bg-emerald-500" delay={0.4} />
          </div>
        )}

        {/* Tabs */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setTab("orders")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "orders" ? "bg-brand-green text-white" : "bg-white text-foreground border border-border"
            }`}
          >
            অর্ডার ({orders.length})
          </button>
          <button
            onClick={() => setTab("customers")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "customers" ? "bg-brand-green text-white" : "bg-white text-foreground border border-border"
            }`}
          >
            কাস্টমার ({customers.length})
          </button>
        </div>

        {/* Search + filter */}
        <div className="mb-4 flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={tab === "orders" ? "অর্ডার নম্বর, নাম, ফোন..." : "নাম, ফোন, ইমেইল..."}
              className="pl-9 bg-white rounded-full"
              onKeyDown={(e) => e.key === "Enter" && (tab === "orders" ? fetchData() : fetchCustomers())}
            />
          </div>
          {tab === "orders" && (
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px] rounded-full bg-white">
                <SelectValue placeholder="স্ট্যাটাস" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব স্ট্যাটাস</SelectItem>
                <SelectItem value="pending">অপেক্ষমান</SelectItem>
                <SelectItem value="confirmed">নিশ্চিত</SelectItem>
                <SelectItem value="packaging">প্যাকেজিং</SelectItem>
                <SelectItem value="shipping">পথে আছে</SelectItem>
                <SelectItem value="delivered">ডেলিভারি সম্পন্ন</SelectItem>
                <SelectItem value="cancelled">বাতিল</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="h-8 w-8 animate-spin text-brand-green" />
          </div>
        ) : tab === "orders" ? (
          <OrdersTable orders={orders} onSelect={setSelectedOrder} onStatusChange={updateStatus} updating={updating} />
        ) : (
          <CustomersTable customers={customers} />
        )}
      </main>

      {/* Order detail dialog */}
      <OrderDetailDialog
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={updateStatus}
        updating={updating}
      />
      <Footer />
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color, delay }: { icon: LucideIcon; label: string; value: any; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-2xl border border-border bg-white p-4 shadow-premium"
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${color} text-white`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-lg font-extrabold text-foreground">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

function OrdersTable({ orders, onSelect, onStatusChange, updating }: { orders: Order[]; onSelect: (o: Order) => void; onStatusChange: (id: string, s: OrderStatus) => void; updating: boolean }) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Package className="h-12 w-12 mb-2" />
        <p>কোনো অর্ডার নেই</p>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-premium">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-green-tint">
            <tr className="text-left">
              <th className="p-3 font-semibold">অর্ডার নং</th>
              <th className="p-3 font-semibold">কাস্টমার</th>
              <th className="p-3 font-semibold">পণ্য</th>
              <th className="p-3 font-semibold">মোট</th>
              <th className="p-3 font-semibold">স্ট্যাটাস</th>
              <th className="p-3 font-semibold">তারিখ</th>
              <th className="p-3 font-semibold">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              const cfg = statusConfig[order.status];
              return (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  className="border-t border-border hover:bg-brand-green-tint/50 transition-colors"
                >
                  <td className="p-3 font-mono text-xs font-bold text-brand-green-dark">{order.orderNumber}</td>
                  <td className="p-3">
                    <p className="font-medium">{order.customer.name}</p>
                    <p className="text-xs text-muted-foreground">{order.customer.phone}</p>
                  </td>
                  <td className="p-3 text-muted-foreground">{order.items.length} টি</td>
                  <td className="p-3 font-bold">{order.total.toFixed(0)}৳</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.bg} ${cfg.color}`}>
                      <cfg.icon className="h-3 w-3" />
                      {cfg.label}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString("bn-BD")}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" onClick={() => onSelect(order)} className="h-8 text-xs">
                        দেখুন
                      </Button>
                      <Select
                        value={order.status}
                        onValueChange={(v) => onStatusChange(order.id, v as OrderStatus)}
                        disabled={updating}
                      >
                        <SelectTrigger className="h-8 w-[110px] text-xs rounded-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(statusConfig).map(([key, cfg]) => (
                            <SelectItem key={key} value={key}>{cfg.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CustomersTable({ customers }: { customers: any[] }) {
  if (customers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Users className="h-12 w-12 mb-2" />
        <p>কোনো কাস্টমার নেই</p>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-premium">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-green-tint">
            <tr className="text-left">
              <th className="p-3 font-semibold">নাম</th>
              <th className="p-3 font-semibold">ফোন</th>
              <th className="p-3 font-semibold">ঠিকানা</th>
              <th className="p-3 font-semibold">অর্ডার</th>
              <th className="p-3 font-semibold">যোগ হয়েছে</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <motion.tr
                key={c.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="border-t border-border hover:bg-brand-green-tint/50"
              >
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3 text-xs text-muted-foreground">
                  {c.address ? `${c.address}, ${c.city || ""}` : c.city || "—"}
                </td>
                <td className="p-3">
                  <span className="rounded-full bg-brand-green-light px-2 py-0.5 text-xs font-medium text-brand-green-dark">
                    {c.orders.length} টি
                  </span>
                </td>
                <td className="p-3 text-xs text-muted-foreground">
                  {new Date(c.createdAt).toLocaleDateString("bn-BD")}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrderDetailDialog({ order, onClose, onStatusChange, updating }: { order: Order | null; onClose: () => void; onStatusChange: (id: string, s: OrderStatus) => void; updating: boolean }) {
  return (
    <Dialog open={!!order} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">অর্ডার বিস্তারিত</DialogTitle>
        <DialogDescription className="sr-only">অর্ডারের সম্পূর্ণ তথ্য</DialogDescription>
        <AnimatePresence mode="wait">
          {order && (
            <motion.div key={order.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Header */}
              <div className="bg-gradient-brand p-5 text-white">
                <h2 className="text-lg font-bold">অর্ডার বিস্তারিত</h2>
                <p className="text-xl font-extrabold font-mono mt-1">{order.orderNumber}</p>
              </div>
              <div className="p-5 space-y-4">
                {/* Customer */}
                <div className="rounded-xl bg-brand-green-tint p-4">
                  <h3 className="text-sm font-bold text-brand-green-deep mb-2">কাস্টমার</h3>
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                    <Phone className="h-3.5 w-3.5" />{order.customer.phone}
                  </p>
                  {order.customer.address && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                      <MapPin className="h-3.5 w-3.5" />{order.customer.address}, {order.customer.city}
                    </p>
                  )}
                </div>

                {/* Items */}
                <div>
                  <h3 className="text-sm font-bold text-brand-green-deep mb-2">পণ্য ({order.items.length})</h3>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm border-b border-border pb-2">
                        <span>{item.name} × {item.quantity}</span>
                        <span className="font-semibold">{(item.price * item.quantity).toFixed(0)}৳</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals */}
                <div className="rounded-xl bg-brand-green-tint p-4 space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">সাবটোটাল</span><span>{order.subtotal.toFixed(0)}৳</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">ডেলিভারি</span><span>{order.deliveryCharge === 0 ? "ফ্রি" : `${order.deliveryCharge.toFixed(0)}৳`}</span></div>
                  <div className="flex justify-between font-bold border-t border-brand-green-light pt-1"><span>সর্বমোট</span><span className="text-brand-green-dark text-lg">{order.total.toFixed(0)}৳</span></div>
                </div>

                {/* Status */}
                <div>
                  <h3 className="text-sm font-bold text-brand-green-deep mb-2">স্ট্যাটাস পরিবর্তন</h3>
                  <Select value={order.status} onValueChange={(v) => onStatusChange(order.id, v as OrderStatus)} disabled={updating}>
                    <SelectTrigger className="w-full rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusConfig).map(([key, cfg]) => (
                        <SelectItem key={key} value={key}>{cfg.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {order.note && (
                  <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
                    <strong>নোট:</strong> {order.note}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
