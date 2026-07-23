"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Simple scroll-position parallax. speed > 1 drifts faster than scroll,
 * speed < 1 drifts slower. On reduced motion, disabled.
 */
export function ParallaxLayer({ children, speed = 0.85, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    let latestY = 0;

    function update() {
      const rect = el!.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      const offset = progress * (speed - 1) * 120;
      el!.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      latestY = window.scrollY;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
        void latestY;
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
