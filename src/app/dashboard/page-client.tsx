"use client";

import { useEffect, useState } from "react";
import { DashboardView } from "@/components/site/dashboard-view";
import { AdminLoginCheck } from "@/components/site/admin-login-check";

export default function DashboardPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    /* eslint-disable react-hooks/set-state-in-effect */
    if (token) {
      setAuthed(true);
    }
    setChecking(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-black">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  if (!authed) {
    return <AdminLoginCheck />;
  }

  return <DashboardView />;
}
