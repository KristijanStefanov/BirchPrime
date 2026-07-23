import Image from "next/image";
import Link from "next/link";

/**
 * Home hero — desktop reconstructed to closely track the composition
 * hierarchy of the Daylight reference, but using Birch Prime imagery,
 * colour palette (birch + graphite + orange accent), and verified copy.
 *
 * Grid boundaries: 5% · 27% · 50% · 72% · 89% · 97% viewport width.
 * Headline is anchored to the left grid; right composition sits at 72–89%.
 */
export function HomeHero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-[100svh] overflow-hidden bg-graphite text-white"
    >
      {/* Background photograph — clean industrial cover from Birch Prime */}
      <div className="absolute inset-0">
        <Image
          src="/media/homepage/hero-birch.jpg"
          alt="Слоеви на висококвалитетна шперплоча од бреза"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-bg-zoom"
        />
        {/* Desktop: Left-weighted warm graphite overlay for headline readability */}
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,12,10,0.62) 0%, rgba(12,12,10,0.38) 52%, rgba(12,12,10,0.28) 100%)",
          }}
        />
        {/* Mobile: lighter vertical overlay — material stays visible */}
        <div
          aria-hidden
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,12,10,0.30) 0%, rgba(12,12,10,0.28) 40%, rgba(12,12,10,0.42) 100%)",
          }}
        />
      </div>

      {/* Editorial grid — irregular boundaries per spec */}
      <div aria-hidden className="absolute inset-0 pointer-events-none hidden lg:block z-[1]">
        {[0.05, 0.27, 0.50, 0.72, 0.89, 0.97].map((frac, i) => (
          <span
            key={i}
            className="absolute top-0 bottom-0 hero-grid-line"
            style={{
              left: `${frac * 100}%`,
              width: "1px",
              background: "rgba(255,255,255,0.18)",
              animationDelay: `${300 + i * 40}ms`,
            }}
          />
        ))}
        {[0.18, 0.72, 0.90].map((frac, i) => (
          <span
            key={`h${i}`}
            className="absolute left-0 right-0 hero-grid-line"
            style={{
              top: `${frac * 100}%`,
              height: "1px",
              background: "rgba(255,255,255,0.16)",
              animationDelay: `${360 + i * 40}ms`,
            }}
          />
        ))}
      </div>

      {/* Mobile grid — very subtle vertical guides only */}
      <div aria-hidden className="lg:hidden absolute inset-0 pointer-events-none z-[1]">
        {[0.25, 0.5, 0.75].map((frac, i) => (
          <span
            key={i}
            className="absolute top-0 bottom-0 hero-grid-line"
            style={{
              left: `${frac * 100}%`,
              width: "1px",
              background: "rgba(255,255,255,0.10)",
              animationDelay: `${300 + i * 60}ms`,
            }}
          />
        ))}
      </div>

      {/* ============ DESKTOP ============ */}
      <div className="hidden lg:block relative z-10 h-[100vh]">
        {/* Small hero label */}
        <p
          className="absolute hero-in hero-in-label"
          style={{
            left: "5vw",
            top: "30vh",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Шперплоча од бреза
        </p>

        {/* Headline — exactly two controlled lines */}
        <h1
          className="absolute font-serif text-white"
          style={{
            left: "5vw",
            top: "34vh",
            maxWidth: "55vw",
            fontSize: "clamp(72px, 7.2vw, 132px)",
            lineHeight: 0.93,
            letterSpacing: "-0.045em",
            fontWeight: 400,
          }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line-inner hero-line-1">Создадено</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line-inner hero-line-2">да&nbsp;трае</span>
          </span>
        </h1>

        {/* Supporting copy */}
        <p
          className="absolute hero-in hero-in-support"
          style={{
            left: "5vw",
            bottom: "22vh",
            width: 440,
            fontSize: "clamp(18px, 1.35vw, 22px)",
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Шперплоча од бреза за градежништво, транспорт и производство.
        </p>

        {/* Combined inquiry CTA — Daylight-style rounded rectangle */}
        <div
          className="absolute hero-in hero-in-cta"
          style={{ left: "5vw", bottom: "8vh" }}
        >
          <div
            className="flex items-center gap-3 pl-6 pr-1.5"
            style={{
              width: 430,
              height: 64,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(20,20,18,0.55)",
              backdropFilter: "blur(14px) saturate(140%)",
              WebkitBackdropFilter: "blur(14px) saturate(140%)",
            }}
          >
            <Link
              href="/proizvodi"
              className="flex-1 text-[15px] text-white/85 hover:text-white transition-colors"
            >
              Разгледајте производи
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center font-semibold text-white hover:bg-orange transition-colors whitespace-nowrap"
              style={{
                height: 52,
                paddingInline: 22,
                borderRadius: 12,
                background: "#0e0e0c",
                fontSize: 14,
                minWidth: 160,
              }}
            >
              Побарајте понуда
            </Link>
          </div>
        </div>

        {/* === RIGHT COMPOSITION === */}

        {/* Дебелина */}
        <div
          className="absolute hero-in hero-in-r1"
          style={{ left: "72vw", top: "24vh" }}
        >
          <p className="text-[11px] uppercase text-white/60 mb-1.5" style={{ letterSpacing: "0.14em" }}>
            Дебелина
          </p>
          <p className="text-[15px] tabular text-white">6 – 40 mm</p>
        </div>

        {/* Димензии */}
        <div
          className="absolute hero-in hero-in-r2"
          style={{ left: "72vw", top: "32vh" }}
        >
          <p className="text-[11px] uppercase text-white/60 mb-1.5" style={{ letterSpacing: "0.14em" }}>
            Димензии
          </p>
          <p className="text-[15px] tabular text-white">1220 × 2440 mm</p>
        </div>

        {/* Material texture panel — REAL close-up photograph, sharp edges */}
        <div
          className="absolute overflow-hidden hero-panel-clip"
          style={{
            left: "72vw",
            top: "42vh",
            width: "17vw",
            minWidth: 240,
            maxWidth: 340,
            height: "42vh",
            minHeight: 340,
            maxHeight: 430,
            borderRadius: 2,
          }}
        >
          <Image
            src="/media/products/uncoated-2.png"
            alt="Слоеви на шперплоча од бреза во макро приказ"
            fill
            sizes="21vw"
            className="object-cover"
            style={{ filter: "saturate(1.05) contrast(1.02)" }}
          />
          {/* Subtle warm tint for cohesion with the birch palette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(198,154,45,0.06) 0%, rgba(139,108,62,0.14) 100%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        {/* На залиха — availability indicator aligned to panel bottom edge */}
        <div
          className="absolute hero-in hero-in-r4"
          style={{ left: "72vw", bottom: "12vh" }}
        >
          <p className="text-[11px] uppercase text-white/60 mb-1.5" style={{ letterSpacing: "0.14em" }}>
            На залиха
          </p>
          <div className="w-28 h-[3px] rounded-full bg-white/22 overflow-hidden">
            <span className="block h-full w-4/5 bg-white rounded-full" />
          </div>
        </div>

        {/* Material note — verified only */}
        <div
          className="absolute hero-in hero-in-r5"
          style={{ left: "72vw", bottom: "8vh" }}
        >
          <p className="text-[13px] text-white/75">Бреза</p>
        </div>
      </div>

      {/* ============ MOBILE ============ */}
      <div
        className="lg:hidden relative z-10 min-h-[100svh] flex flex-col items-center px-5"
        style={{ paddingTop: 108, paddingBottom: 32 }}
      >
        {/* 2 — Technical information (compact centered pair) */}
        <div className="w-full flex justify-center gap-10 mb-9 hero-in hero-m-1">
          <div className="text-center">
            <p
              className="mb-1.5"
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Дебелина
            </p>
            <p
              className="tabular"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.95)" }}
            >
              6 – 40 mm
            </p>
          </div>
          <div className="text-center">
            <p
              className="mb-1.5"
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Димензии
            </p>
            <p
              className="tabular"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.95)" }}
            >
              1220 × 2440 mm
            </p>
          </div>
        </div>

        {/* 3 — Material texture close-up (no white bg, integrated) */}
        <div
          className="relative overflow-hidden mb-9 hero-panel-clip"
          style={{
            width: 180,
            aspectRatio: "4 / 5",
            borderRadius: 2,
          }}
        >
          <Image
            src="/media/products/uncoated-2.png"
            alt="Макро текстура на слоевита шперплоча од бреза"
            fill
            sizes="180px"
            className="object-cover"
            style={{ filter: "saturate(1.1) contrast(1.05)" }}
          />
          {/* Warm birch tint — blends the texture with the hero */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(198,154,45,0.10) 0%, rgba(139,108,62,0.22) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Soft top edge fade so texture melts into background */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,12,10,0.35) 0%, rgba(12,12,10,0) 100%)",
            }}
          />
        </div>

        {/* 4 — Hero label */}
        <p
          className="text-center mb-5 hero-in hero-m-2"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Шперплоча од бреза
        </p>

        {/* 5 — Hero title (exactly two lines, controlled break) */}
        <h1
          className="font-serif text-white text-center mb-7"
          style={{
            fontSize: "clamp(46px, 13vw, 60px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            fontWeight: 400,
          }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line-inner hero-line-1">Создадено</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line-inner hero-line-2">да&nbsp;трае</span>
          </span>
        </h1>

        {/* 6 — Paragraph (centered, 85% width) */}
        <p
          className="text-center mb-9 hero-in hero-m-3"
          style={{
            fontSize: 15,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.90)",
            width: "85%",
            maxWidth: 340,
          }}
        >
          Шперплоча од бреза за градежништво, транспорт и производство.
        </p>

        {/* 7 — Combined CTA (single control, transparent left + solid right) */}
        <div
          className="flex items-center gap-2 pl-4 pr-1 hero-in hero-m-4"
          style={{
            width: "min(100%, 320px)",
            height: 58,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(20,20,18,0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <Link
            href="/proizvodi"
            className="flex-1 text-center"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Разгледај производи
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center font-semibold text-white whitespace-nowrap"
            style={{
              height: 46,
              paddingInline: 16,
              borderRadius: 12,
              background: "#0e0e0c",
              fontSize: 13,
            }}
          >
            Побарај понуда
          </Link>
        </div>
      </div>
    </section>
  );
}
