"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { primaryNav } from "@/data/company";

export function DesktopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        raf = 0;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 pointer-events-none justify-center pt-5 nav-enter">
      <nav
        aria-label="Главна навигација"
        className="pointer-events-auto"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <div
          className="flex items-center gap-1 pl-5 pr-2 rounded-full border border-hairline"
          style={{
            height: 60,
            width: 720,
            maxWidth: "calc(100vw - 40px)",
            background: scrolled ? "var(--ivory-blur)" : "var(--ivory)",
            backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
            boxShadow: scrolled ? "var(--shadow-nav)" : "0 4px 20px -8px rgba(24,24,22,0.12)",
            transition: "background 320ms, box-shadow 320ms",
          }}
        >
          <div className="pr-4 mr-1 border-r border-hairline">
            <Wordmark />
          </div>

          <ul className="flex items-center gap-0 flex-1">
            {primaryNav.slice(1).map((item, i) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setHoverIndex(i)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-[14px] font-medium text-graphite hover:bg-cream transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <span aria-hidden className="text-[9px] opacity-50 mt-0.5">▾</span>
                  )}
                </Link>

                {item.children && hoverIndex === i && (
                  <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2 min-w-[280px]">
                    <div className="rounded-2xl border border-hairline bg-ivory shadow-nav p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg text-[13px] text-soft-black hover:bg-cream transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-orange text-ivory text-[13px] font-semibold whitespace-nowrap hover:bg-[#e0501a] transition-colors"
            style={{ height: 44, paddingInline: 18, letterSpacing: "0.005em" }}
          >
            Побарајте понуда
          </Link>
        </div>
      </nav>
    </div>
  );
}
