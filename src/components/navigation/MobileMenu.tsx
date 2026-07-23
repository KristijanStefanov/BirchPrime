"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { primaryNav, contact } from "@/data/company";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousActive?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Мени"
      className="lg:hidden fixed inset-0 z-[60] bg-graphite text-ivory overflow-y-auto"
      style={{
        clipPath: open ? "circle(150% at calc(100% - 44px) 44px)" : "circle(0% at calc(100% - 44px) 44px)",
        transition: "clip-path 620ms cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div className="min-h-full flex flex-col px-5 pt-4 pb-10">
        <div className="flex items-center justify-between h-16">
          <Wordmark variant="light" />
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Затвори мени"
            onClick={onClose}
            className="w-11 h-11 grid place-items-center"
          >
            <span aria-hidden className="relative block w-6 h-6">
              <span className="absolute inset-0 top-1/2 h-[1.5px] bg-ivory rotate-45" />
              <span className="absolute inset-0 top-1/2 h-[1.5px] bg-ivory -rotate-45" />
            </span>
          </button>
        </div>

        <nav aria-label="Мобилна навигација" className="mt-8">
          <ul className="space-y-2">
            {primaryNav.map((item, i) => (
              <li
                key={item.href}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 520ms ${100 + i * 60}ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms ${100 + i * 60}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 font-serif text-[40px] leading-[1.05] tracking-tight text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hairline mt-10 mb-6 !bg-ivory/15" />

        <div className="space-y-3 text-[14px] text-ivory/70">
          <p className="label !text-ivory/50">Контакт</p>
          <p><a href={`mailto:${contact.email}`} className="hover:text-orange">{contact.email}</a></p>
          {contact.phones.map((p) => (
            <p key={p}><a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-orange">{p}</a></p>
          ))}
        </div>

        <Link
          href="/kontakt"
          onClick={onClose}
          className="btn-primary mt-8 w-full text-center justify-center"
        >
          Побарајте понуда
        </Link>
      </div>
    </div>
  );
}
