import Link from "next/link";
import { products } from "@/data/products";
import { ProductSwatch } from "@/components/products/ProductSwatch";

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="page-shell mx-auto w-full max-w-[1440px]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="label mb-4">ПОВРЗАНИ ПРОИЗВОДИ</p>
            <h2 className="h3">Продолжете со разгледување</h2>
          </div>
          <Link href="/proizvodi" className="btn-ghost">Сите производи</Link>
        </div>
        <ul className="grid md:grid-cols-3 gap-6 md:gap-8">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/proizvodi/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-ivory border border-hairline mb-4">
                  <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                    <ProductSwatch slug={p.slug} sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="chip">{p.category}</span>
                </div>
                <h3 className="font-serif text-[22px] leading-[1.15] tracking-tight text-graphite group-hover:text-orange transition-colors">
                  {p.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
