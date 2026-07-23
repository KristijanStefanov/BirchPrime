import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { getProductBySlug, products } from "@/data/products";
import { ProductSwatch } from "@/components/products/ProductSwatch";
import { SpecificationTable } from "@/components/products/SpecificationTable";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";
import { CtaSection } from "@/components/sections/CtaSection";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.seoDescription,
    alternates: { canonical: `/proizvodi/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-32 md:pt-40 bg-ivory">
        <Container>
          <nav aria-label="breadcrumb" className="text-[12px] text-muted">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-orange">Почетна</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/proizvodi" className="hover:text-orange">Производи</Link></li>
              <li aria-hidden>/</li>
              <li className="text-graphite">{product.category}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="chip">{product.category}</span>
                {product.classificationCodes.map((c) => (
                  <span key={c} className="chip chip-solid">{c}</span>
                ))}
              </div>
              <h1 className="display max-w-[16ch]">
                <RevealLines lines={product.name.split(" ").reduce<string[]>((acc, word, i) => {
                  const chunk = Math.floor(i / 2);
                  acc[chunk] = (acc[chunk] ? acc[chunk] + " " : "") + word;
                  return acc;
                }, [])} stagger={100} />
              </h1>
              <RevealText as="p" className="lede text-soft-black mt-8 max-w-[52ch]" delay={520}>
                {product.lede}
              </RevealText>

              <RevealText className="mt-10 flex flex-wrap gap-4" delay={720}>
                <Link href="/kontakt" className="btn-primary">
                  Побарајте понуда
                </Link>
              </RevealText>
            </div>

            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-card overflow-hidden bg-cream border border-hairline">
                <ProductSwatch slug={product.slug} priority sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
              <div className="mt-3 flex items-center justify-between text-[12px] text-muted">
                <span className="label">Површина</span>
                <span>{product.swatchLabel}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description + specs */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-6">
              <p className="label mb-4">ОПИС</p>
              <p className="body-copy text-soft-black">{product.description}</p>

              <p className="label mt-16 mb-6">ПРЕДНОСТИ</p>
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="text-[15px] text-graphite flex gap-3">
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 md:pl-8">
              <p className="label mb-4">ТЕХНИЧКИ КАРАКТЕРИСТИКИ</p>
              <SpecificationTable specs={product.specs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <p className="label mb-6">ПРИМЕНА</p>
          <h2 className="h2 max-w-[22ch] mb-16">Каде најдобро работи оваа плоча.</h2>
          <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
            {product.applications.map((app, i) => (
              <li key={app.title} className="border-t border-hairline pt-6">
                <span className="label tabular text-graphite mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[24px] leading-[1.15] tracking-tight text-graphite mb-3">
                  {app.title}
                </h3>
                <p className="text-[15px] text-muted">{app.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <RelatedProducts currentSlug={product.slug} />
      <CtaSection />
    </>
  );
}
