import Image from "next/image";
import { getProductBySlug } from "@/data/products";

interface ProductSwatchProps {
  slug: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Product image tile using authorized Birch Prime photography.
 * Falls back to the first item of the product's gallery for grid variety
 * on pages that use multiple tiles for the same product.
 */
export function ProductSwatch({ slug, priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: ProductSwatchProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;
  return (
    <Image
      src={product.heroImage}
      alt={product.heroImageAlt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
    />
  );
}
