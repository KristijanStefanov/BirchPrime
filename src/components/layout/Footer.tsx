import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contact, footerNav } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite text-ivory pt-24 md:pt-32 pb-8 mt-24 md:mt-32">
      <Container>
        <div className="overflow-hidden">
          <div
            className="font-serif tracking-[-0.02em] leading-[0.94] text-[clamp(3.5rem,15vw,15rem)] text-ivory/95"
            style={{ letterSpacing: "-0.04em" }}
          >
            BIRCH PRIME
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <FooterCol title="Производи" items={footerNav.products} />
          <FooterCol title="Индустрии" items={footerNav.industries} />
          <FooterCol title="Компанија" items={footerNav.company} />

          <div>
            <p className="label !text-ivory/50 mb-4">Контакт</p>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href={`mailto:${contact.email}`} className="text-ivory/85 hover:text-orange transition-colors">
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/[^+\d]/g, "")}`}
                    className="text-ivory/85 hover:text-orange transition-colors tabular"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="text-ivory/60 pt-2">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-16 h-px w-full"
          style={{ background: "rgba(243,236,221,0.14)" }}
        />

        <div className="mt-6 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 text-[12px] text-ivory/55">
          <p>© {year} Birch Prime. Сите права се задржани.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ivory transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="label !text-ivory/50 mb-4">{title}</p>
      <ul className="space-y-2 text-[14px]">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-ivory/85 hover:text-orange transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
