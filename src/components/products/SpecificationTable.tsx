import type { SpecRow } from "@/types/content";

export function SpecificationTable({ specs }: { specs: SpecRow[] }) {
  return (
    <dl className="border-t border-graphite/20">
      {specs.map((s) => (
        <div
          key={s.label}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-1 md:gap-8 py-4 md:py-5 border-b border-hairline"
        >
          <dt className="label !text-graphite/60">{s.label}</dt>
          <dd className="text-[15px] text-graphite tabular">
            {s.value}
            {s.note && <span className="text-muted ml-2 text-[13px]">— {s.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
