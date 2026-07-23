import { HomeHero } from "@/components/hero/HomeHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { BlogTeaserSection } from "@/components/sections/BlogTeaserSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatementSection />
      <BenefitsSection />
      <FeaturedProductsSection />
      <IndustriesSection />
      <BlogTeaserSection />
      <CtaSection />
    </>
  );
}
