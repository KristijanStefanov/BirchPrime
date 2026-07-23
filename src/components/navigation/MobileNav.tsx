"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function MobileNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="lg:hidden fixed top-4 left-4 right-4 z-50 nav-enter"
        style={{ height: 72 }}
      >
        <div
          className="flex items-center justify-between h-full px-5"
          style={{
            borderRadius: 20,
            border: "1px solid var(--hairline)",
            background: scrolled ? "var(--ivory-blur)" : "var(--ivory)",
            backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
            boxShadow: "0 6px 24px -10px rgba(24,24,22,0.15)",
          }}
        >
          <Wordmark />
          <button
            type="button"
            aria-label="Отвори мени"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="w-11 h-11 -mr-1 grid place-items-center"
          >
            <span aria-hidden className="block w-6 space-y-[6px]">
              <span className="block h-[1.75px] bg-graphite" />
              <span className="block h-[1.75px] bg-graphite w-4 ml-auto" />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
