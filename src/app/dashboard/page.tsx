import type { Metadata } from "next";
import { dashboardSEO } from "@/lib/seo";

export const metadata: Metadata = dashboardSEO;

// Rest of dashboard page is in the client component below
export { default } from "./page-client";
