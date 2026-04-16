interface Tag {
  label: string;
  title: string;
}

interface DishCardProps {
  name: string;
  description: string;
  price?: string;
  tags?: Tag[];
  course?: string;
}

const tagColors: Record<string, string> = {
  V: "border-green-700/40 text-green-400",
  VG: "border-green-700/40 text-green-400",
  GF: "border-amber-700/40 text-amber-400",
};

export default function DishCard({ name, description, price, tags, course }: DishCardProps) {
  return (
    <div className="py-5 border-b border-[rgba(201,168,112,0.12)] last:border-0">
      {course && (
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A870] mb-1.5 font-medium" style={{ fontFamily: "var(--font-body)" }}>
          {course}
        </p>
      )}
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className="text-[#F4EFE6] text-[1.05rem] leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        {price && (
          <span className="text-[#C9A870] text-[0.8rem] font-semibold flex-shrink-0" style={{ fontFamily: "var(--font-body)" }}>
            {price}
          </span>
        )}
      </div>
      <p className="text-[#998F82] text-[0.85rem] mt-1.5 leading-relaxed">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              title={tag.title}
              aria-label={tag.title}
              className={`inline-flex items-center px-1.5 py-0.5 text-[0.6rem] tracking-wider border rounded-sm font-medium ${tagColors[tag.label] ?? "border-[#998F82]/30 text-[#998F82]"}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
