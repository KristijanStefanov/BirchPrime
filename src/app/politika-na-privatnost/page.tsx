import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";

export const metadata: Metadata = {
  title: "Политика за приватност",
  alternates: { canonical: "/politika-na-privatnost" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32 bg-ivory">
      <Container>
        <SectionLabel>ПРАВНО</SectionLabel>
        <h1 className="h1 mt-8 max-w-[20ch]">Политика за приватност</h1>
        <div className="mt-12 max-w-[64ch] space-y-6 text-soft-black">
          <p className="body-copy">
            Оваа страница е плејсхолдер. Официјалниот текст на политиката за приватност ќе биде обезбеден од клиентот и ќе биде објавен пред пуштање во продукција.
          </p>
          <p className="body-copy text-muted">
            За прашања поврзани со обработка на лични податоци, контактирајте нè на{" "}
            <a href="mailto:kontakt@birchprime.rs" className="underline hover:text-orange">
              kontakt@birchprime.rs
            </a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
