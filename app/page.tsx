import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Bar Thyme | Neighbourhood Bistro & Bar — Footscray, Melbourne",
  description:
    "A neighbourhood bistro and bar in Footscray serving seasonal food, natural wines and house cocktails. Open Wed–Sun at 227 Barkly St, Footscray VIC 3011.",
  alternates: { canonical: "https://barthyme.com.au" },
};

const menuHighlights = [
  {
    title: "Six-Course Dinner",
    price: "$85 per person",
    description:
      "An unhurried journey through the season — six courses guided by what's finest at market. Available Wednesday through Saturday.",
    href: "/menus#six-course",
  },
  {
    title: "Sunday Lunch",
    price: "$65 per person",
    description:
      "Three generous courses on a Sunday afternoon. The perfect way to ease into the week ahead.",
    href: "/menus#sunday-lunch",
  },
  {
    title: "À la Carte",
    price: "Order as you please",
    description:
      "Snacks, small plates, and something larger — curated daily around the best of what arrived that morning.",
    href: "/menus#a-la-carte",
  },
];

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
    heading: "Eclectic Atmosphere",
    text: "Lined with 1972 London menus, vinyl records and travel memorabilia — a room that feels well-lived in.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20M2 12h20"/>
        <path d="M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10M12 2C9.5 5 8 8.5 8 12s1.5 7 4 10"/>
      </svg>
    ),
    heading: "Seasonal Kitchen",
    text: "Locally sourced, ethically produced, chosen for what's best right now — the menu changes when the season does.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 22h8M12 11v11M5 8a7 7 0 0 0 14 0V3H5z"/>
      </svg>
    ),
    heading: "Natural Wines",
    text: "Small producers. Organic. Biodynamic. Wines with a sense of place and minimal intervention.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing_page_cropped.jpeg"
            alt="The warmly lit front window of Bar Thyme bistro on Barkly Street, Footscray, at dusk"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 text-center pt-20 pb-8">
          <span className="hero-anim hero-anim-1 section-eyebrow text-[#C9A870]">
            Bar Thyme — Footscray, Melbourne
          </span>
          <h1
            className="hero-anim hero-anim-2 text-[#F4EFE6] mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(3rem, 11vw, 7.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            A neighbourhood<br />table
          </h1>
          <p
            className="hero-anim hero-anim-3 mt-6 text-[#F4EFE6]/80 max-w-md"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Seasonal food. Natural wine. Good company.
          </p>
          <div className="hero-anim hero-anim-4 flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A870] text-[#1B1B17] text-[0.7rem] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b882] transition-colors min-h-[52px] min-w-[180px]"
            >
              Reserve a table
            </Link>
            <Link
              href="/menus"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F4EFE6]/50 text-[#F4EFE6] text-[0.7rem] tracking-[0.2em] uppercase font-semibold hover:border-[#C9A870] hover:text-[#C9A870] transition-colors min-h-[52px] min-w-[180px]"
            >
              View menus
            </Link>
          </div>
        </div>

        {/* Bottom strip — visible in first viewport on mobile */}
        <div className="relative z-10 hero-anim hero-anim-5 border-t border-[rgba(201,168,112,0.2)] bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.7rem] tracking-widest uppercase text-[#F4EFE6]/60">
            <a href="tel:+61396878644" className="hover:text-[#C9A870] transition-colors">
              (03) 9687 8644
            </a>
            <span className="hidden sm:block text-[#C9A870]/40">·</span>
            <span>Wed–Fri 5pm–11pm &nbsp;·&nbsp; Sat 12pm–11pm &nbsp;·&nbsp; Sun 12pm–4pm</span>
            <span className="hidden sm:block text-[#C9A870]/40">·</span>
            <span>227 Barkly St, Footscray</span>
          </div>
        </div>
      </section>

      {/* ── Welcome pillars ───────────────────────────────── */}
      <section className="bg-[#252520]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {pillars.map((p, i) => (
              <FadeUp key={p.heading} delay={i * 100}>
                <div className="flex flex-col items-start gap-4">
                  <span className="text-[#C9A870]">{p.icon}</span>
                  <h2
                    className="text-[#F4EFE6] text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.heading}
                  </h2>
                  <p className="text-[#998F82] text-[0.875rem] leading-relaxed">{p.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu teaser ──────────────────────────────────── */}
      <section className="bg-[#1B1B17]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <FadeUp>
                <span className="section-eyebrow">At the table</span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: "#F4EFE6",
                    lineHeight: 1.08,
                  }}
                >
                  What&apos;s on<br />the menu
                </h2>
                <p className="text-[#998F82] mt-4 mb-10 leading-relaxed text-[0.9375rem]">
                  Our menu follows the market. It changes weekly — sometimes daily — around the best of what arrived that morning.
                </p>
              </FadeUp>

              <div className="space-y-6">
                {menuHighlights.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 120}>
                    <Link
                      href={item.href}
                      className="group block p-5 border border-[rgba(201,168,112,0.15)] hover:border-[rgba(201,168,112,0.45)] transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3
                          className="text-[#F4EFE6] text-lg group-hover:text-[#C9A870] transition-colors"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.title}
                        </h3>
                        <span className="text-[#C9A870] text-[0.8rem] font-semibold whitespace-nowrap mt-0.5">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[#998F82] text-[0.85rem] leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={400}>
                <Link
                  href="/menus"
                  className="inline-flex items-center gap-2 mt-8 text-[#C9A870] text-[0.75rem] tracking-[0.15em] uppercase font-medium hover:gap-3 transition-all duration-200"
                >
                  Explore full menus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </FadeUp>
            </div>

            {/* Image */}
            <FadeUp className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/food.jpeg"
                alt="A beautifully plated seasonal dish at Bar Thyme, featuring locally sourced ingredients — oysters, sourdough, croquettes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Wine section (full-bleed) ─────────────────────── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src="/images/red_wines.jpeg"
          alt="A selection of natural red wines from small producers, as served at Bar Thyme Footscray"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
          <FadeUp className="max-w-xl">
            <span className="section-eyebrow">The cellar</span>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.6rem, 4.5vw, 3rem)",
                color: "#F4EFE6",
                lineHeight: 1.2,
              }}
            >
              &ldquo;Small producers. Organic. Biodynamic. Wines that taste like somewhere.&rdquo;
            </blockquote>
            <p className="text-[#998F82] mt-6 leading-relaxed max-w-md">
              Our wine list is built around producers who work with the land — minimal additives, maximum character. Expect sherries, vermouths, digestifs and house cocktails alongside.
            </p>
            <Link
              href="/menus"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A870] text-[0.75rem] tracking-[0.15em] uppercase font-medium hover:gap-3 transition-all duration-200"
            >
              See the wine list
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── About teaser ─────────────────────────────────── */}
      <section className="bg-[#252520]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeUp className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/events.jpeg"
                alt="The eclectic interior of Bar Thyme, featuring vintage travel memorabilia, vinyl records and warm candlelight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>

            {/* Text */}
            <FadeUp delay={150} className="order-1 lg:order-2">
              <span className="section-eyebrow">Our story</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#F4EFE6",
                  lineHeight: 1.08,
                }}
              >
                Like an extension<br />of our home
              </h2>
              <p className="text-[#998F82] mt-5 leading-relaxed">
                At 227 Barkly Street in Footscray, Bar Thyme is a place where everyone is welcome — the kind of room that wraps around you. Walls lined with vintage London menus from 1972, vinyl spinning in the corner, wine bottles collected from years of good eating.
              </p>
              <p className="text-[#998F82] mt-4 leading-relaxed">
                We cook with what&apos;s seasonal and locally sourced, and pour wines from producers who care about the land as much as the glass. Come on a Wednesday for something quiet, or a Saturday for the long afternoon.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-[#C9A870] text-[0.75rem] tracking-[0.15em] uppercase font-medium hover:gap-3 transition-all duration-200"
              >
                Our story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Reservation CTA banner ────────────────────────── */}
      <section className="bg-[#C9A870]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#1B1B17",
                lineHeight: 1.1,
              }}
            >
              Ready when you are.
            </h2>
            <p className="mt-2 text-[#1B1B17]/70 text-[0.85rem]">
              Wed–Fri 5pm–11pm &nbsp;·&nbsp; Sat 12pm–11pm &nbsp;·&nbsp; Sun 12pm–4pm
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1B1B17] text-[#C9A870] text-[0.7rem] tracking-[0.2em] uppercase font-semibold hover:bg-[#252520] transition-colors min-h-[52px]"
            >
              Reserve now
            </Link>
            <a
              href="tel:+61396878644"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#1B1B17]/30 text-[#1B1B17] text-[0.7rem] tracking-[0.2em] uppercase font-semibold hover:border-[#1B1B17] transition-colors min-h-[52px]"
            >
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
