import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/data/company";
import { RevealLines } from "@/components/motion/RevealLines";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = {
  title: "Контакт — Побарајте понуда",
  description:
    "Пратете ни ги димензиите, класата и количината. Одговараме во работно време, обично во рок од еден работен ден.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 bg-ivory">
        <Container>
          <SectionLabel number="01">КОНТАКТ</SectionLabel>
          <h1 className="display mt-8 max-w-[16ch]">
            <RevealLines
              lines={["Да разговараме", "за вашиот", "следен проект."]}
              stagger={110}
            />
          </h1>
          <RevealText as="p" className="lede text-muted mt-8 max-w-[54ch]" delay={520}>
            Јавете ни ги димензиите, класата и количината. Одговараме во работно време, обично во рок од еден работен ден.
          </RevealText>
        </Container>
      </section>

      <section className="pb-24 md:pb-40 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 border-t border-hairline pt-12">
            <div className="md:col-span-4">
              <div className="mb-10">
                <p className="label mb-4">Е-ПОШТА</p>
                <a href={`mailto:${contact.email}`} className="font-serif text-[24px] leading-tight text-graphite hover:text-orange transition-colors">
                  {contact.email}
                </a>
              </div>

              <div className="mb-10">
                <p className="label mb-4">ТЕЛЕФОН</p>
                <ul className="space-y-2">
                  {contact.phones.map((p) => (
                    <li key={p}>
                      <a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="text-[18px] tabular text-graphite hover:text-orange transition-colors">
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <p className="label mb-4">АДРЕСА</p>
                <p className="text-[15px] text-graphite">{contact.address}</p>
              </div>

              <p className="text-[13px] text-muted max-w-xs">{contact.workingHoursNote}</p>
            </div>

            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
