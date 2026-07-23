import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText } from "@/components/motion/RevealText";

const benefits = [
  {
    number: "01",
    label: "ИЗДРЖЛИВОСТ",
    headline: "Материјал создаден за интензивна употреба",
    body: "Фенолниот филм и повеќеслојната конструкција обезбедуваат висок број на циклуси на употреба во оплата и транспорт.",
    icon: "/media/icons/time.png",
    iconAlt: "Икона — долг работен век",
  },
  {
    number: "02",
    label: "ПРЕЦИЗНОСТ",
    headline: "Стабилни димензии и конзистентен квалитет",
    body: "Секоја плоча е избрана според строги толеранции — без изненадувања на градилиште или во производство.",
    icon: "/media/icons/claw-machine.png",
    iconAlt: "Икона — прецизна производствена машина",
  },
  {
    number: "03",
    label: "ЗАШТИТА",
    headline: "Површини приспособени за влага и абење",
    body: "Ламинирани и мазни завршетоци кои остануваат стабилни во тешки услови.",
    icon: "/media/icons/tree.png",
    iconAlt: "Икона — дрво од бреза",
  },
  {
    number: "04",
    label: "ПРИМЕНА",
    headline: "Едно решение за градежништво, транспорт и мебел",
    body: "Од оплата за бетон, преку подови за приколки, до чисти внатрешни површини за мебел.",
    icon: "/media/icons/construction-crane.png",
    iconAlt: "Икона — градежна кранска рака",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 md:py-40 bg-cream">
      <Container>
        <SectionLabel number="02">ЗОШТО BIRCH PRIME</SectionLabel>

        <ul className="mt-10 md:mt-16 grid md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24">
          {benefits.map((b) => (
            <li key={b.number} className="border-t border-hairline pt-6">
              <RevealText>
                <div className="flex items-center gap-3 mb-6">
                  <span className="label tabular text-graphite">{b.number}</span>
                  <span aria-hidden className="w-8 h-px bg-divider" />
                  <span className="label">{b.label}</span>
                </div>
                <div className="mb-6 w-14 h-14 relative">
                  <Image
                    src={b.icon}
                    alt={b.iconAlt}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <h3 className="h3 mb-4">{b.headline}</h3>
                <p className="body-copy text-muted">{b.body}</p>
              </RevealText>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
