import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { industries } from "@/data/industries";
import { RevealText } from "@/components/motion/RevealText";
import { IndustryVisual } from "@/components/sections/IndustryVisual";

export function IndustriesSection() {
  return (
    <section className="relative py-24 md:py-40 bg-ivory">
      <Container>
        <SectionLabel number="04">ИНДУСТРИИ</SectionLabel>

        <div className="mt-10 md:mt-16 mb-14">
          <h2 className="h1 max-w-[18ch]">Едно портфолио, три индустрии.</h2>
        </div>

        <ul className="space-y-16 md:space-y-24">
          {industries.map((ind) => (
            <li key={ind.slug} className="border-t border-hairline pt-8">
              <RevealText>
                <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-cream border border-hairline">
                      <IndustryVisual slug={ind.slug} sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                  </div>

                  <div className="md:col-span-7 md:pl-4">
                    <span className="label">{ind.overline}</span>
                    <h3 className="h2 mt-4 mb-6 max-w-[18ch]">{ind.headline}</h3>
                    <p className="body-copy text-muted mb-8">{ind.body}</p>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 max-w-2xl">
                      {ind.requirements.map((r) => (
                        <li key={r} className="text-[14px] text-graphite flex gap-2">
                          <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/${ind.slug}`} className="btn-ghost">
                      Индустриска страница
                    </Link>
                  </div>
                </article>
              </RevealText>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
