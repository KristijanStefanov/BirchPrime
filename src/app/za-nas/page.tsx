import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { company, contact } from "@/data/company";
import { CtaSection } from "@/components/sections/CtaSection";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = {
  title: "За нас — Birch Prime",
  description:
    "Специјализиран дистрибутер на плочи од бреза за градежништво, транспорт и мебел. Работиме со проверени европски производители.",
  alternates: { canonical: "/za-nas" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 bg-ivory">
        <Container>
          <SectionLabel number="01">ЗА КОМПАНИЈАТА</SectionLabel>
          <div className="mt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-9">
              <h1 className="display max-w-[20ch]">
                <RevealLines
                  lines={["Материјал за", "професионалци кои", "не прифаќаат", "компромис."]}
                  stagger={100}
                />
              </h1>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <Container>
          <div className="relative aspect-[21/9] rounded-card overflow-hidden border border-hairline">
            <Image
              src="/media/homepage/group-176.jpg"
              alt="Складирани плочи од бреза во магацинот на Birch Prime"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4 md:col-start-1">
              <p className="label mb-4">ФИЛОЗОФИЈА</p>
              <p className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] tracking-tight text-graphite">
                Работиме со проверени европски производители и одржуваме залиха која гарантира брза испорака.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-6">
              {company.aboutParagraphs.map((p, i) => (
                <RevealText key={i} as="p" className="body-copy text-soft-black" delay={i * 120}>
                  {p}
                </RevealText>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 border-t border-hairline pt-12">
            <div>
              <p className="label mb-3">ПАЗАРИ</p>
              <ul className="space-y-1 text-[15px] text-graphite">
                {company.markets.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div>
              <p className="label mb-3">ФОКУС</p>
              <p className="text-[15px] text-graphite">Плочи од бреза, оплата, транспортни подови, мебелски плочи.</p>
            </div>
            <div>
              <p className="label mb-3">ИСПОРАКА</p>
              <p className="text-[15px] text-graphite">Од залиха, обично во рок од неколку работни дена.</p>
            </div>
            <div>
              <p className="label mb-3">КОНТАКТ</p>
              <ul className="space-y-1 text-[15px] text-graphite">
                <li><a href={`mailto:${contact.email}`} className="hover:text-orange">{contact.email}</a></li>
                {contact.phones.map((p) => (
                  <li key={p} className="tabular"><a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-orange">{p}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
