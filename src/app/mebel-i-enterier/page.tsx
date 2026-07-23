import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/IndustryPage";
import { getIndustryBySlug } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";

const industry = getIndustryBySlug("mebel-i-enterier")!;

export const metadata: Metadata = {
  title: industry.seoTitle,
  description: industry.seoDescription,
  alternates: { canonical: "/mebel-i-enterier" },
};

export default function FurnitureInteriorPage() {
  return <IndustryPage industry={industry} products={getProductsByIndustry("mebel-i-enterier")} />;
}
