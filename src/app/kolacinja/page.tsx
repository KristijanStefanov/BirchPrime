import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";

export const metadata: Metadata = {
  title: "Политика за колачиња",
  alternates: { canonical: "/kolacinja" },
};

export default function CookiesPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32 bg-ivory">
      <Container>
        <SectionLabel>ПРАВНО</SectionLabel>
        <h1 className="h1 mt-8 max-w-[20ch]">Политика за колачиња</h1>
        <div className="mt-12 max-w-[64ch] space-y-6 text-soft-black">
          <p className="body-copy">
            Оваа страница е плејсхолдер. Ќе биде дополнета со официјалниот текст пред пуштање во продукција, вклучително листа на колачиња кои се користат од Birch Prime.
          </p>
        </div>
      </Container>
    </section>
  );
}
