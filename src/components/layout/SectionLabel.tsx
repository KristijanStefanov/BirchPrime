interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

export function SectionLabel({ children, number, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {number && (
        <span className="label tabular text-graphite">
          {number}
        </span>
      )}
      {number && <span className="hairline w-8" />}
      <span className="label">{children}</span>
    </div>
  );
}
