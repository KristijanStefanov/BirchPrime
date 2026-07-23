import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";
import { IndustryVisual } from "@/components/sections/IndustryVisual";
import { ProductSwatch } from "@/components/products/ProductSwatch";
import { CtaSection } from "@/components/sections/CtaSection";
import type { Industry, Product } from "@/types/content";

export function IndustryPage({ industry, products }: { industry: Industry; products: Product[] }) {
  const headlineLines = industry.headline.split(" ").reduce<string[]>((acc, w, i) => {
    const chunk = Math.floor(i / 3);
    acc[chunk] = (acc[chunk] ? acc[chunk] + " " : "") + w;
    return acc;
  }, []);

  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 bg-ivory">
        <Container>
          <SectionLabel number="01">{industry.overline}</SectionLabel>
          <div className="mt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <h1 className="display max-w-[18ch]">
                <RevealLines lines={headlineLines} stagger={110} />
              </h1>
              <RevealText as="p" className="lede text-soft-black mt-8 max-w-[54ch]" delay={520}>
                {industry.lede}
              </RevealText>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-card overflow-hidden border border-hairline">
                <IndustryVisual slug={industry.slug} sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-4">
              <p className="label mb-4">ПРИСТАП</p>
              <p className="body-copy text-soft-black mb-10 max-w-2xl">{industry.body}</p>

              <p className="label mb-4">ТЕХНИЧКИ БАРАЊА</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                {industry.requirements.map((r) => (
                  <li key={r} className="text-[15px] text-graphite flex gap-3 border-t border-hairline pt-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {products.length > 0 && (
        <section className="py-24 md:py-32 bg-ivory">
          <Container>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="label mb-4">СООДВЕТНИ ПРОИЗВОДИ</p>
                <h2 className="h2 max-w-[18ch]">Материјали за оваа индустрија.</h2>
              </div>
              <Link href="/proizvodi" className="btn-ghost">Сите производи</Link>
            </div>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/proizvodi/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-cream border border-hairline mb-4">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                        <ProductSwatch slug={p.slug} sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="chip">{p.category}</span>
                      {p.classificationCodes.slice(0, 1).map((c) => (
                        <span key={c} className="chip chip-solid">{c}</span>
                      ))}
                    </div>
                    <h3 className="font-serif text-[22px] leading-[1.15] tracking-tight text-graphite group-hover:text-orange transition-colors">
                      {p.name}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
