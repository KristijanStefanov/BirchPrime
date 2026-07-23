import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/IndustryPage";
import { getIndustryBySlug } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";

const industry = getIndustryBySlug("transport")!;

export const metadata: Metadata = {
  title: industry.seoTitle,
  description: industry.seoDescription,
  alternates: { canonical: "/transport" },
};

export default function TransportPage() {
  return <IndustryPage industry={industry} products={getProductsByIndustry("transport")} />;
}
