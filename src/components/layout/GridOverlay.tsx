interface GridOverlayProps {
  columns?: number;
  className?: string;
}

/**
 * Whisper grid — vertical hairlines aligned to the container's inner columns.
 * Purely decorative, aria-hidden, does not affect layout.
 */
export function GridOverlay({ columns = 12, className = "" }: GridOverlayProps) {
  const lines = Array.from({ length: columns + 1 }, (_, i) => i);
  return (
    <div
      aria-hidden
      className={`grid-overlay hidden md:block ${className}`}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {lines.map((i) => (
        <span
          key={i}
          className="grid-line-v"
          style={{
            left: `${(i / columns) * 100}%`,
            opacity: i === 0 || i === columns ? 0.14 : 0.06,
          }}
        />
      ))}
    </div>
  );
}
