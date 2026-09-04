import type { Metadata } from "next";
import { MembershipView } from "@/components/site/membership-view";
import { membershipSEO, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: membershipSEO.title,
  description: membershipSEO.description,
  keywords: membershipSEO.keywords,
  path: "/membership",
});

export default function MembershipPage() {
  return <MembershipView />;
}
