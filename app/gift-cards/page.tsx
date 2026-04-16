import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NowBookItWidget from "@/components/NowBookItWidget";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of Bar Thyme. Digital gift cards for seasonal food and natural wine in the heart of Footscray, Melbourne.",
  alternates: { canonical: "https://barthyme.com.au/gift-cards" },
};

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-[#1B1B17]">
      {/* Hero strip */}
      <div className="relative pt-28">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src="/images/wine_cropped.jpeg"
            alt="A glass of natural wine at Bar Thyme's bar, Footscray"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B17] via-black/50 to-[#1B1B17]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 -mt-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow">The gift of Bar Thyme</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: "#F4EFE6",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Give an evening to remember
          </h1>
          <p className="text-[#998F82] mt-5 max-w-lg mx-auto leading-relaxed">
            Treat someone to seasonal food, natural wine, and a room that wraps around you. Bar Thyme gift cards are delivered digitally and redeemable for anything on our menu.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Widget */}
          <div className="flex-1 min-w-0">
            <div className="bg-white overflow-hidden">
              <NowBookItWidget type="gift" />
            </div>
            <p className="mt-4 text-[0.75rem] text-[#998F82]/60 italic">
              Gift cards are delivered by email and are redeemable for food, drinks, and experiences at Bar Thyme.
            </p>
          </div>

          {/* Info sidebar */}
          <aside className="lg:w-72 flex-shrink-0 space-y-6">
            <div className="p-6 bg-[#252520] border border-[rgba(201,168,112,0.15)]">
              <h2
                className="text-[#F4EFE6] text-xl mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How it works
              </h2>
              <ol className="space-y-3 text-[0.85rem] text-[#998F82]">
                {[
                  "Choose your gift card value",
                  "Enter the recipient's email address",
                  "We deliver it digitally — instantly",
                  "They redeem it at Bar Thyme, any visit",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[0.65rem] border border-[#C9A870]/30 text-[#C9A870] font-medium">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 bg-[#252520] border border-[rgba(201,168,112,0.15)] text-[0.8rem] text-[#998F82] space-y-2">
              <p>Gift cards are valid for <strong className="text-[#F4EFE6]/70">3 years</strong> from date of purchase.</p>
              <p>Redeemable for food, wine, cocktails, and any experience at Bar Thyme.</p>
              <p>
                Questions?{" "}
                <a href="mailto:hello@barthyme.com.au" className="text-[#C9A870] hover:underline">
                  hello@barthyme.com.au
                </a>
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#998F82] text-[0.8rem] mb-3">Looking to book a table instead?</p>
              <Link
                href="/reservations"
                className="inline-flex items-center gap-2 text-[#C9A870] text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:underline"
              >
                Reserve a table →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
