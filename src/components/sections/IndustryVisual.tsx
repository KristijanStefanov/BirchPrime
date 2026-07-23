import Image from "next/image";
import { getIndustryBySlug } from "@/data/industries";

export function IndustryVisual({ slug, sizes = "(max-width: 768px) 100vw, 40vw" }: { slug: string; sizes?: string }) {
  const industry = getIndustryBySlug(slug);
  if (!industry) return null;
  return (
    <Image
      src={industry.heroImage}
      alt={industry.heroImageAlt}
      fill
      sizes={sizes}
      className="object-cover"
    />
  );
}
