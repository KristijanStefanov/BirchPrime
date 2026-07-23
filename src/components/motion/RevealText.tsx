"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

/**
 * Enhancement-only reveal. Content renders visible by default (SSR-safe, no-JS-safe).
 * On mount, if reduced motion is not preferred AND the element is below the viewport,
 * we temporarily hide it and reveal on scroll. Above-the-fold content stays visible.
 */
export function RevealText({ children, as: Tag = "div", className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"visible" | "hidden" | "revealed">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.85;
    if (!belowFold) return;

    setPhase("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setPhase("revealed"), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const styleByPhase: Record<typeof phase, React.CSSProperties> = {
    visible: {},
    hidden: {
      opacity: 0,
      transform: "translateY(24px)",
      transition: "opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
      willChange: "opacity, transform",
    },
    revealed: {
      opacity: 1,
      transform: "translateY(0)",
      transition: "opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
  };

  return (
    <Tag ref={ref as never} className={className} style={styleByPhase[phase]}>
      {children}
    </Tag>
  );
}
