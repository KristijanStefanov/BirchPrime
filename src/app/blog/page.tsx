import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Блог — технички упатства и практични водичи",
  description:
    "Кратки статии за класи, површини и примени на шперплочи од бреза во градежништво, транспорт и мебел.",
  alternates: { canonical: "/blog" },
};

const covers = [
  "/media/products/uncoated-2.png",
  "/media/products/ff-2.png",
  "/media/homepage/group-176.jpg",
  "/media/products/fwd1-2.png",
];

export default function BlogListPage() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 bg-ivory">
        <Container>
          <SectionLabel number="01">БЛОГ</SectionLabel>
          <h1 className="h1 mt-8 max-w-[20ch]">Технички упатства и практични водичи.</h1>
          <p className="lede text-muted mt-8 max-w-[60ch]">
            Кратки статии за класи, површини и примени. Наменети за изведувачи, архитекти и производствени тимови.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-40 bg-ivory">
        <Container>
          <ul className="grid gap-16 md:gap-24">
            {articles.map((a, i) => (
              <li key={a.slug} className="border-t border-hairline pt-8">
                <Link href={`/blog/${a.slug}`} className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-cream border border-hairline">
                      <Image
                        src={covers[i % covers.length]!}
                        alt={a.heroImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 md:pl-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="label">{a.category}</span>
                      <span aria-hidden className="text-muted">·</span>
                      <span className="text-[12px] text-muted tabular">{formatDate(a.publishedAt)}</span>
                      <span aria-hidden className="text-muted">·</span>
                      <span className="text-[12px] text-muted">{a.readingTimeMinutes} мин читање</span>
                    </div>
                    <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] tracking-tight text-graphite group-hover:text-orange transition-colors mb-4 max-w-[22ch]">
                      {a.title}
                    </h2>
                    <p className="body-copy text-muted max-w-2xl mb-6">{a.excerpt}</p>
                    <span className="btn-ghost">Прочитај</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
