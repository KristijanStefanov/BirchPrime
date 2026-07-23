import Link from "next/link";

interface WordmarkProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Refined Birch Prime wordmark.
 * Optical alignment: serif "Birch" baseline sits on the same line as
 * sans "PRIME" cap-height, giving a controlled tight lockup.
 */
export function Wordmark({ className = "", variant = "dark" }: WordmarkProps) {
  const color = variant === "dark" ? "text-graphite" : "text-ivory";
  return (
    <Link
      href="/"
      aria-label="Birch Prime — почетна"
      className={`inline-flex items-baseline gap-[5px] leading-none ${color} ${className}`}
    >
      <span
        className="font-serif tracking-[-0.02em]"
        style={{ fontSize: 24, fontWeight: 500 }}
      >
        Birch
      </span>
      <span
        className="font-sans uppercase tracking-[0.22em]"
        style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", paddingBottom: 3 }}
      >
        PRIME
      </span>
    </Link>
  );
}
