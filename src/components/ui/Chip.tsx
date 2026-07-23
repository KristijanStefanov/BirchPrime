import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "solid";
  className?: string;
}

export function Chip({ children, variant = "default", className = "" }: ChipProps) {
  return (
    <span className={`chip ${variant === "solid" ? "chip-solid" : ""} ${className}`}>{children}</span>
  );
}
