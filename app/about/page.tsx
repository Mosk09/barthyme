import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bar Thyme's story — an eclectic neighbourhood bistro in Footscray with ethical sourcing, natural wines from small producers, and seasonal cocktails.",
  alternates: { canonical: "https://barthyme.com.au/about" },
};

const philosophy = [
  {
    title: "The Food",
    body: "We cook from what arrived at the market this morning. Locally sourced, ethically produced, guided by the season. Nothing on our menu is here for convenience — every dish earns its place.",
  },
  {
    title: "The Wine",
    body: "Natural wines from small producers who work with the land — organic, biodynamic, minimal additives. We've sought out producers from Victoria, South Australia, and further afield who make wines that taste like somewhere specific.",
  },
  {
    title: "The Cocktails",
    body: "Seasonal house creations built on house-made syrups, classic recipes treated with care, and thoughtfully considered alcohol-free options. Because the best dining is inclusive.",
  },
];

const hours = [
  { days: "Wednesday – Friday", time: "5pm – 11pm" },
  { days: "Saturday", time: "12pm – 11pm" },
  { days: "Sunday", time: "12pm – 4pm" },
  { days: "Monday – Tuesday", time: "Closed" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1B1B17]">
      {/* ── Hero image ──────────────────────────────────────── */}
      <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/events.jpeg"
          alt="The eclectic interior of Bar Thyme, featuring vintage travel memorabilia, 1972 London menus, vinyl records and warm candlelight"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B17] via-black/30 to-transparent" />

        {/* Heading over image */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-6xl mx-auto left-0 right-0">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "#F4EFE6",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            We are Bar Thyme
          </h1>
        </div>
      </div>

      {/* ── Our story ────────────────────────────────────────── */}
      <section className="bg-[#1B1B17]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="section-eyebrow">227 Barkly Street, Footscray</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "#F4EFE6",
                  lineHeight: 1.1,
                }}
              >
                Our story
              </h2>
            </FadeUp>

            <FadeUp delay={100}>
              <p className="text-[#998F82] mt-6 leading-relaxed text-[0.9375rem]">
                In the beating heart of Footscray, at 227 Barkly Street, Bar Thyme has made its home in a space that feels both intimate and alive. We opened with a simple idea: a place in the neighbourhood where everyone is welcome, where the food is worth talking about and the wine list rewards curiosity.
              </p>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="text-[#998F82] mt-5 leading-relaxed text-[0.9375rem]">
                The room is lined with 1972 London restaurant menus found at a market in Provence, vinyl records collected across a decade of travelling and eating well, wine bottles from memorable evenings, travel memorabilia from somewhere between Tokyo and Lisbon. It&apos;s a room that tells stories — and invites you to add your own.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="text-[#998F82] mt-5 leading-relaxed text-[0.9375rem]">
                Every dish begins with a question: what&apos;s best right now? The answer changes weekly, sometimes daily. We work with local growers and producers we trust, choosing ingredients for flavour, provenance and the way they were raised. The result is a menu that&apos;s never quite the same twice — and that&apos;s exactly the point.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Philosophy panels ────────────────────────────────── */}
      <section className="bg-[#252520]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <FadeUp>
            <span className="section-eyebrow">How we think</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#F4EFE6",
                lineHeight: 1.1,
              }}
              className="mb-12"
            >
              Our philosophy
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {philosophy.map((p, i) => (
              <FadeUp key={p.title} delay={i * 120}>
                <div className="border-t-2 border-[#C9A870] pt-6">
                  <h3
                    className="text-[#F4EFE6] text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[#998F82] text-[0.875rem] leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wine image break ─────────────────────────────────── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/wine_cropped.jpeg"
          alt="A glass of natural wine at Bar Thyme's bar, Footscray"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <FadeUp>
            <blockquote
              className="text-center max-w-xl px-5"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                color: "#F4EFE6",
                lineHeight: 1.3,
              }}
            >
              &ldquo;At OGI, every dish is a conversation between the chef and the guest.&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ── Find us ──────────────────────────────────────────── */}
      <section className="bg-[#1B1B17]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <FadeUp>
              <span className="section-eyebrow">Visit us</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "#F4EFE6",
                  lineHeight: 1.1,
                }}
                className="mb-6"
              >
                Find us in Footscray
              </h2>
              <address className="not-italic space-y-4">
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-1 font-medium">Address</p>
                  <a
                    href="https://maps.google.com/?q=227+Barkly+St,+Footscray+VIC+3011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#998F82] hover:text-[#C9A870] transition-colors leading-relaxed"
                  >
                    227 Barkly Street<br />
                    Footscray VIC 3011
                  </a>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-1 font-medium">Phone</p>
                  <a href="tel:+61396878644" className="text-[#998F82] hover:text-[#C9A870] transition-colors">
                    (03) 9687 8644
                  </a>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-1 font-medium">Email</p>
                  <a href="mailto:hello@barthyme.com.au" className="text-[#998F82] hover:text-[#C9A870] transition-colors">
                    hello@barthyme.com.au
                  </a>
                </div>
              </address>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/reservations"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9A870] text-[#1B1B17] text-[0.7rem] tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b882] transition-colors min-h-[48px]"
                >
                  Reserve a table
                </Link>
                <a
                  href="mailto:hello@barthyme.com.au"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-[rgba(201,168,112,0.3)] text-[#C9A870] text-[0.7rem] tracking-[0.15em] uppercase font-semibold hover:border-[#C9A870] transition-colors min-h-[48px]"
                >
                  Email us
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-4 font-medium">Opening hours</p>
                <dl className="space-y-3">
                  {hours.map(({ days, time }) => (
                    <div key={days} className="flex justify-between border-b border-[rgba(201,168,112,0.1)] pb-3">
                      <dt className="text-[#998F82] text-[0.875rem]">{days}</dt>
                      <dd className={`text-[0.875rem] ${time === "Closed" ? "text-[#998F82]/50 italic" : "text-[#F4EFE6]/80"}`}>
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-[0.75rem] text-[#998F82]/60 italic">
                  A 10% surcharge applies on public holidays. Walk-ins welcome, subject to availability.
                </p>

                {/* Social links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://www.instagram.com/barthyme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[0.8rem] text-[#998F82] hover:text-[#C9A870] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/barthyme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[0.8rem] text-[#998F82] hover:text-[#C9A870] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
