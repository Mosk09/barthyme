import DishCard from "./DishCard";

interface Tag {
  label: string;
  title: string;
}

interface Dish {
  name: string;
  description: string;
  price?: string;
  tags?: Tag[];
  course?: string;
}

interface MenuSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  note?: string;
  dishes: Dish[];
  pdfHref?: string;
  pdfLabel?: string;
}

export default function MenuSection({
  id,
  eyebrow,
  title,
  subtitle,
  badge,
  note,
  dishes,
  pdfHref,
  pdfLabel,
}: MenuSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20 border-b border-[rgba(201,168,112,0.12)] last:border-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div>
          {eyebrow && (
            <span className="section-eyebrow">{eyebrow}</span>
          )}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#F4EFE6",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#998F82] mt-2 text-[0.9rem]">{subtitle}</p>
          )}
        </div>
        {badge && (
          <span
            className="flex-shrink-0 self-start px-4 py-2 border border-[#C9A870]/40 text-[#C9A870] text-[0.7rem] tracking-[0.15em] uppercase font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="divide-y divide-[rgba(201,168,112,0)] -mt-5">
        {dishes.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </div>

      {note && (
        <p className="mt-6 text-[0.8rem] text-[#998F82]/70 italic border-l-2 border-[#C9A870]/30 pl-4">
          {note}
        </p>
      )}

      {pdfHref && (
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-[#C9A870] text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:underline"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          {pdfLabel ?? "Download PDF"}
        </a>
      )}
    </section>
  );
}
