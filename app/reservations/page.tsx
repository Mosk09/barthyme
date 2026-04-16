import type { Metadata } from "next";
import Link from "next/link";
import NowBookItWidget from "@/components/NowBookItWidget";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Bar Thyme, 227 Barkly St Footscray. Open Wed–Fri 5pm–11pm, Sat 12pm–11pm, Sun 12pm–4pm. Walk-ins always welcome.",
  alternates: { canonical: "https://barthyme.com.au/reservations" },
};

const hours = [
  { days: "Wednesday", time: "5pm – 11pm" },
  { days: "Thursday", time: "5pm – 11pm" },
  { days: "Friday", time: "5pm – 11pm" },
  { days: "Saturday", time: "12pm – 11pm" },
  { days: "Sunday", time: "12pm – 4pm" },
  { days: "Mon – Tue", time: "Closed" },
];

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[#1B1B17] pt-24">
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <span className="section-eyebrow">Bar Thyme, Footscray</span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#F4EFE6",
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
          }}
        >
          Reserve your table
        </h1>
        <p className="text-[#998F82] mt-3 max-w-lg leading-relaxed">
          We welcome bookings Wednesday through Sunday. Walk-ins are always welcome, subject to availability.
        </p>
      </div>

      {/* ── Main layout ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

          {/* Booking widget — takes up the bulk of the page */}
          <div className="flex-1 min-w-0 bg-white rounded-sm overflow-hidden">
            <NowBookItWidget type="reservation" />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">

            {/* Hours */}
            <div className="p-5 bg-[#252520] border border-[rgba(201,168,112,0.15)]">
              <h2
                className="text-[#F4EFE6] text-lg mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Opening hours
              </h2>
              <dl className="space-y-2">
                {hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between text-[0.82rem]">
                    <dt className="text-[#998F82]">{days}</dt>
                    <dd className={time === "Closed" ? "text-[#998F82]/50 italic" : "text-[#F4EFE6]/80"}>
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Address */}
            <div className="p-5 bg-[#252520] border border-[rgba(201,168,112,0.15)]">
              <h2
                className="text-[#F4EFE6] text-lg mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Find us
              </h2>
              <address className="not-italic space-y-3">
                <a
                  href="https://maps.google.com/?q=227+Barkly+St,+Footscray+VIC+3011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[0.85rem] text-[#998F82] hover:text-[#C9A870] transition-colors leading-relaxed"
                >
                  227 Barkly St<br />Footscray VIC 3011
                </a>
                <a
                  href="tel:+61396878644"
                  className="flex items-center gap-2 text-[0.85rem] text-[#C9A870] hover:text-[#d4b882] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (03) 9687 8644
                </a>
                <a
                  href="mailto:hello@barthyme.com.au"
                  className="block text-[0.85rem] text-[#998F82] hover:text-[#C9A870] transition-colors"
                >
                  hello@barthyme.com.au
                </a>
              </address>
            </div>

            {/* Notes */}
            <div className="p-5 border border-[rgba(201,168,112,0.1)] text-[0.8rem] text-[#998F82] space-y-2 leading-relaxed">
              <p><strong className="text-[#F4EFE6]/60">Groups of 8+</strong> — please call us directly on (03) 9687 8644.</p>
              <p>A <strong className="text-[#F4EFE6]/60">10% surcharge</strong> applies on public holidays.</p>
            </div>

            {/* Gift cards CTA */}
            <div className="text-center pt-2">
              <p className="text-[#998F82] text-[0.8rem] mb-2">Looking for gift cards?</p>
              <Link
                href="/gift-cards"
                className="inline-flex items-center gap-1.5 text-[#C9A870] text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:underline"
              >
                Gift cards →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
