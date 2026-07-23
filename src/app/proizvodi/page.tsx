import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { products } from "@/data/products";
import { ProductSwatch } from "@/components/products/ProductSwatch";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = {
  title: "Производи — шперплоча од бреза",
  description:
    "Оплата, противлизгачки плочи, необложена шперплоча и специјализирани плочи од бреза за градежништво, транспорт и мебел.",
  alternates: { canonical: "/proizvodi" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 bg-ivory">
        <Container>
          <SectionLabel number="01">ПРОИЗВОДИ</SectionLabel>
          <h1 className="h1 mt-8 max-w-[20ch]">
            Плочи од бреза за секој сегмент од вашето производство.
          </h1>
          <p className="lede text-muted mt-8 max-w-[62ch]">
            Целото портфолио е избрано според технички лист — не според цена. Секоја плоча е достапна со потврдена класа, димензии и потекло.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-40 bg-ivory">
        <Container>
          <ul className="grid md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-16">
            {products.map((p, i) => (
              <li key={p.slug} className={i % 3 === 0 ? "md:col-span-2" : ""}>
                <RevealText>
                  <Link href={`/proizvodi/${p.slug}`} className="group block">
                    <div
                      className={`relative aspect-[4/3] rounded-card overflow-hidden bg-cream border border-hairline mb-6 ${
                        i % 3 === 0 ? "md:aspect-[21/9]" : ""
                      }`}
                    >
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                        <ProductSwatch slug={p.slug} sizes={i % 3 === 0 ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="chip">{p.category}</span>
                      {p.classificationCodes.slice(0, 2).map((c) => (
                        <span key={c} className="chip chip-solid">
                          {c}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-serif text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.05] tracking-tight text-graphite mb-3 group-hover:text-orange transition-colors">
                      {p.name}
                    </h2>
                    <p className="body-copy text-muted line-clamp-2 max-w-2xl">{p.lede}</p>
                  </Link>
                </RevealText>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
