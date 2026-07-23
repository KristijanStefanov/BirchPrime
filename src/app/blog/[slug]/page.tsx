import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { articles, getArticleBySlug } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { CtaSection } from "@/components/sections/CtaSection";

interface Params { slug: string }

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { title: a.title, description: a.excerpt, type: "article", publishedTime: a.publishedAt },
  };
}

const heroCovers: Record<string, string> = {
  "kategorii-i-primeni-na-shperploca": "/media/products/uncoated-2.png",
  "predimstva-na-brezata-vo-oplata": "/media/homepage/construction-formwork.jpg",
  "kako-da-prepoznaete-kvalitetna-plocha": "/media/products/ff-2.png",
};

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const cover = heroCovers[article.slug] ?? "/media/homepage/hero-birch.jpg";

  return (
    <>
      <article className="pt-32 md:pt-40 pb-24 bg-ivory">
        <Container>
          <nav aria-label="breadcrumb" className="text-[12px] text-muted mb-8">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-orange">Почетна</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/blog" className="hover:text-orange">Блог</Link></li>
            </ol>
          </nav>

          <div className="max-w-[64ch] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="label">{article.category}</span>
              <span aria-hidden className="text-muted">·</span>
              <span className="text-[12px] text-muted tabular">{formatDate(article.publishedAt)}</span>
              <span aria-hidden className="text-muted">·</span>
              <span className="text-[12px] text-muted">{article.readingTimeMinutes} мин читање</span>
            </div>

            <h1 className="h1 mb-8">{article.title}</h1>
            <p className="lede text-soft-black mb-10">{article.excerpt}</p>
          </div>

          <div className="relative max-w-4xl mx-auto my-16 aspect-[16/9] rounded-card overflow-hidden bg-cream border border-hairline">
            <Image
              src={cover}
              alt={article.heroImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <div className="max-w-[64ch] mx-auto prose">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i} className="body-copy text-soft-black mb-6">{p}</p>
            ))}
          </div>
        </Container>
      </article>

      <CtaSection />
    </>
  );
}
