import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/IndustryPage";
import { getIndustryBySlug } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";

const industry = getIndustryBySlug("gradezhnishtvo")!;

export const metadata: Metadata = {
  title: industry.seoTitle,
  description: industry.seoDescription,
  alternates: { canonical: "/gradezhnishtvo" },
};

export default function ConstructionPage() {
  return <IndustryPage industry={industry} products={getProductsByIndustry("gradezhnishtvo")} />;
}
