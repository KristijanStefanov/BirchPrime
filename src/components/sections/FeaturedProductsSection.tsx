import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { getFeaturedProducts } from "@/data/products";
import { RevealText } from "@/components/motion/RevealText";
import { ProductSwatch } from "@/components/products/ProductSwatch";

export function FeaturedProductsSection() {
  const products = getFeaturedProducts();

  return (
    <section className="relative py-24 md:py-40 bg-ivory">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <SectionLabel number="03">ИСТАКНАТИ ПРОИЗВОДИ</SectionLabel>
            <h2 className="h2 mt-6 max-w-[16ch]">Материјали што ги избираат професионалците.</h2>
          </div>
          <Link href="/proizvodi" className="btn-ghost">
            Сите производи
          </Link>
        </div>

        <div className="grid gap-16 md:gap-24">
          {products.map((p, i) => (
            <RevealText key={p.slug}>
              <article
                className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-6">
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-cream border border-hairline">
                    <ProductSwatch slug={p.slug} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>

                <div className="md:col-span-6 md:pl-10">
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="chip">{p.category}</span>
                    {p.classificationCodes.map((c) => (
                      <span key={c} className="chip chip-solid">{c}</span>
                    ))}
                  </div>

                  <h3 className="h3 mb-4">{p.name}</h3>
                  <p className="body-copy text-muted mb-6">{p.lede}</p>

                  <dl className="grid grid-cols-2 gap-3 max-w-md mb-8">
                    {p.specs.slice(1, 5).map((s) => (
                      <div key={s.label} className="border-t border-hairline pt-2">
                        <dt className="label !text-muted mb-1">{s.label}</dt>
                        <dd className="text-[14px] text-graphite tabular">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link href={`/proizvodi/${p.slug}`} className="btn-ghost">
                    Прикажи производ
                  </Link>
                </div>
              </article>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
