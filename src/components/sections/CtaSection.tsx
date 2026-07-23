import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";

export function CtaSection() {
  return (
    <section className="relative bg-graphite text-ivory py-32 md:py-44 overflow-hidden">
      <Container>
        <div className="max-w-3xl">
          <RevealText className="label !text-ivory/50 mb-8">СЛЕДЕН ПРОЕКТ</RevealText>

          <h2 className="h1 text-ivory">
            <RevealLines
              lines={["Да разговараме", "за материјалот", "што ви е потребен."]}
              stagger={110}
            />
          </h2>

          <RevealText as="p" className="lede text-ivory/70 mt-10 max-w-[54ch]" delay={520}>
            Јавете ни ги димензиите, класата и количината — испорачуваме брзо, со технички лист за секоја испорака.
          </RevealText>

          <RevealText className="mt-12 flex flex-wrap gap-4" delay={720}>
            <Link href="/kontakt" className="btn-primary">
              Побарајте понуда
            </Link>
            <Link
              href="/proizvodi"
              className="btn-secondary !text-ivory !border-ivory/60 hover:!bg-ivory hover:!text-graphite"
            >
              Прегледајте ги производите
            </Link>
          </RevealText>
        </div>
      </Container>
    </section>
  );
}
