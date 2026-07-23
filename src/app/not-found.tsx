import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32 bg-ivory min-h-[60vh]">
      <Container>
        <p className="label mb-6">404</p>
        <h1 className="display max-w-[16ch]">Страницата не е пронајдена.</h1>
        <p className="lede text-muted mt-8 max-w-[52ch]">
          Можеби страницата е преместена или сеуште не е објавена. Пробајте од почетна или разгледајте ги производите.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-primary">Почетна</Link>
          <Link href="/proizvodi" className="btn-secondary">Производи</Link>
        </div>
      </Container>
    </section>
  );
}
