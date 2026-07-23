"use client";

import { useEffect, useRef, useState } from "react";

interface RevealLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}

/**
 * Renders each line inside a clip-mask that rises on scroll enter.
 * SSR-safe: lines render fully visible until JS applies the hidden state
 * on mount (and only if the element is below the viewport).
 */
export function RevealLines({ lines, className = "", lineClassName = "", stagger = 90 }: RevealLinesProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<"visible" | "animating">("visible");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal-line]"));
    const rect = root.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.85;

    if (belowFold) {
      // Fully hide, then reveal via observer
      setPhase("animating");
      items.forEach((el) => {
        el.style.transform = "translateY(105%)";
        el.style.opacity = "0";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              items.forEach((el, i) => {
                setTimeout(() => {
                  el.style.transform = "translateY(0)";
                  el.style.opacity = "1";
                }, i * stagger);
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(root);
      return () => observer.disconnect();
    }

    // Above the fold — play the reveal once on mount from a hidden start
    setPhase("animating");
    items.forEach((el) => {
      el.style.transform = "translateY(105%)";
      el.style.opacity = "0";
    });
    // Next frame: reveal in sequence
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
          }, i * stagger);
        });
      });
    });
  }, [stagger]);

  return (
    <span ref={rootRef} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            data-reveal-line
            className={lineClassName}
            style={{
              display: "inline-block",
              transition:
                phase === "animating"
                  ? "transform 820ms cubic-bezier(0.16, 1, 0.3, 1), opacity 820ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              willChange: phase === "animating" ? "transform, opacity" : "auto",
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
