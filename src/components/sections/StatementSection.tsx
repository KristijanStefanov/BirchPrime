import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";

export function StatementSection() {
  return (
    <section className="relative py-24 md:py-40 bg-ivory">
      <Container>
        <SectionLabel number="01">ЗА BIRCH PRIME</SectionLabel>
        <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-9">
            <h2 className="h1">
              <RevealLines
                lines={["Технички супериорна", "шперплоча за", "барни индустрии."]}
                stagger={90}
              />
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10 self-end">
            <RevealText as="p" className="body-copy text-muted">
              Специјализирани дистрибутери на плочи од бела бреза. Секој материјал го избираме така што ги задоволува најстрогите европски стандарди за квалитет, отпорност и димензионална стабилност.
            </RevealText>
          </div>
        </div>
      </Container>
    </section>
  );
}
