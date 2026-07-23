import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { RevealText } from "@/components/motion/RevealText";

const teaserImages = [
  "/media/products/uncoated-2.png",
  "/media/products/ff-1.png",
  "/media/homepage/group-176.jpg",
];

export function BlogTeaserSection() {
  const featured = articles.slice(0, 3);
  return (
    <section className="relative py-24 md:py-40 bg-cream">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel number="05">ЗНАЕЊЕ</SectionLabel>
            <h2 className="h2 mt-6 max-w-[18ch]">Технички упатства и практични водичи.</h2>
          </div>
          <Link href="/blog" className="btn-ghost">Сите статии</Link>
        </div>

        <ul className="grid md:grid-cols-3 gap-8">
          {featured.map((a, i) => (
            <li key={a.slug}>
              <RevealText>
                <Link href={`/blog/${a.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-ivory border border-hairline mb-5">
                    <Image
                      src={teaserImages[i % teaserImages.length]!}
                      alt={a.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label">{a.category}</span>
                    <span aria-hidden className="text-muted text-[12px]">·</span>
                    <span className="text-[12px] text-muted tabular">{formatDate(a.publishedAt)}</span>
                  </div>
                  <h3 className="font-serif text-[22px] leading-[1.2] text-graphite mb-3 group-hover:text-orange transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[14px] text-muted line-clamp-3">{a.excerpt}</p>
                </Link>
              </RevealText>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
