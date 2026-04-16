import type { Metadata } from "next";
import Link from "next/link";
import MenuSection from "@/components/MenuSection";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Six-course dinner $85, Sunday lunch $65, and à la carte. Locally sourced, seasonal menus at Bar Thyme, 227 Barkly St Footscray.",
  alternates: { canonical: "https://barthyme.com.au/menus" },
};

const sixCourse = [
  {
    course: "One",
    name: "Amuse-bouche",
    description: "A single bite to set the tone — house-made, seasonal, unexpected. Changes with the day.",
  },
  {
    course: "Two",
    name: "Daily bread",
    description: "Sourdough baked each morning, served warm with cultured butter and house-made ferments.",
    tags: [{ label: "V", title: "Vegetarian" }],
  },
  {
    course: "Three",
    name: "Entrée",
    description: "A light opening: cured, raw or delicately cooked. Today's entrée reflects what arrived at the market this morning.",
  },
  {
    course: "Four",
    name: "Fish",
    description: "Line-caught or sustainably farmed, simply treated to let the sea speak. Paired with seasonal vegetables and a bright sauce.",
    tags: [{ label: "GF", title: "Gluten Friendly" }],
  },
  {
    course: "Five",
    name: "Meat",
    description: "Ethically raised, chosen for provenance. Sirloin seared in Café de Paris butter, or something braised low and slow — depending on the week.",
    tags: [{ label: "GF", title: "Gluten Friendly" }],
  },
  {
    course: "Six",
    name: "Dessert",
    description: "Something sweet to close: seasonal fruit, house-made ice cream, a little chocolate — rarely all three at once.",
    tags: [{ label: "V", title: "Vegetarian" }],
  },
];

const sundayLunch = [
  {
    course: "First",
    name: "To start",
    description: "Light, seasonal, and perfectly suited to a Sunday afternoon — perhaps oysters with a mignonette, or a composed salad from the garden.",
  },
  {
    course: "Second",
    name: "Main",
    description: "A generous plate: roasted or braised, something that makes sense on a slow Sunday. Locally sourced and ethically produced.",
  },
  {
    course: "Third",
    name: "To finish",
    description: "A dessert worth lingering over. House-made, seasonal — often involves stone fruit, cream, or both.",
    tags: [{ label: "V", title: "Vegetarian" }],
  },
];

const snacks = [
  { name: "Oysters", description: "Local rock oysters, mignonette dressing, finger lime. Per piece.", price: "4.5 each", tags: [{ label: "GF", title: "Gluten Friendly" }] },
  { name: "House croquettes", description: "Crisp outside, impossibly molten inside. Filled daily — ask the kitchen what's inside tonight.", price: "14" },
  { name: "Sourdough & butter", description: "Baked fresh this morning. Served with cultured butter and a house-made ferment.", price: "10", tags: [{ label: "V", title: "Vegetarian" }] },
  { name: "Marinated olives", description: "Mixed olives with citrus, fennel and good olive oil. Best with a glass of something cold.", price: "9", tags: [{ label: "V", title: "Vegetarian" }, { label: "GF", title: "Gluten Friendly" }, { label: "VG", title: "Vegan" }] },
];

const smallPlates = [
  { name: "Seasonal crudo", description: "Hand-dived scallop or line-caught fish, dressed with native herbs and house-made vinegar. Changes weekly.", price: "22", tags: [{ label: "GF", title: "Gluten Friendly" }] },
  { name: "Burrata & stone fruit", description: "Creamy burrata with whatever fruit the season is insisting upon — currently white peach and a little prosciutto.", price: "20", tags: [{ label: "V", title: "Vegetarian" }, { label: "GF", title: "Gluten Friendly" }] },
  { name: "Grilled zucchini", description: "Charred and dressed with labneh, toasted almonds and a sharp herb oil. A summer staple.", price: "18", tags: [{ label: "V", title: "Vegetarian" }, { label: "GF", title: "Gluten Friendly" }] },
  { name: "Pork rillettes", description: "Slow-cooked, pressed, and served with house pickles, grain mustard and toasted sourdough.", price: "19" },
];

const largerPlates = [
  { name: "Sirloin, Café de Paris butter", description: "200g grass-fed sirloin, seared medium-rare, rested and topped with our house Café de Paris compound butter. Chips on the side.", price: "44", tags: [{ label: "GF", title: "Gluten Friendly" }] },
  { name: "Fish of the day", description: "Line-caught, market-dependent, simply treated. Ask your server what swam in today.", price: "38", tags: [{ label: "GF", title: "Gluten Friendly" }] },
  { name: "Roast half chicken", description: "Free-range, brined and roasted with thyme and lemon. Served with aioli and a seasonal green.", price: "36", tags: [{ label: "GF", title: "Gluten Friendly" }] },
  { name: "Mushroom gnocchi", description: "House-made potato gnocchi with a ragù of mixed wild mushrooms, aged parmesan and truffle oil.", price: "32", tags: [{ label: "V", title: "Vegetarian" }] },
];

const desserts = [
  { name: "Affogato", description: "A double shot of espresso poured over house-made vanilla bean ice cream. Add a nip of Amaro for $5.", price: "12", tags: [{ label: "V", title: "Vegetarian" }, { label: "GF", title: "Gluten Friendly" }] },
  { name: "Chocolate ganache tart", description: "Dark chocolate ganache in a butter pastry shell, with fleur de sel and a little crème fraîche.", price: "16", tags: [{ label: "V", title: "Vegetarian" }] },
  { name: "Seasonal fruit sorbet", description: "Made in-house, changes with the season. Ask the kitchen for today's flavour.", price: "10", tags: [{ label: "VG", title: "Vegan" }, { label: "GF", title: "Gluten Friendly" }] },
];

const anchorLinks = [
  { href: "#six-course", label: "Six-Course" },
  { href: "#sunday-lunch", label: "Sunday Lunch" },
  { href: "#a-la-carte", label: "À la Carte" },
  { href: "#wine-list", label: "Wine List" },
];

export default function MenusPage() {
  return (
    <div className="min-h-screen bg-[#1B1B17]">
      {/* ── Page header ────────────────────────────────────── */}
      <div className="pt-32 pb-12 md:pb-16 px-5 md:px-8 border-b border-[rgba(201,168,112,0.12)]">
        <div className="max-w-6xl mx-auto">
          <span className="section-eyebrow">Footscray, Melbourne</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#F4EFE6",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            The Menu
          </h1>
          <p className="text-[#998F82] mt-4 max-w-lg leading-relaxed">
            Locally sourced, seasonally driven, ethically considered. Our menus change with the market — sometimes weekly, sometimes daily.
          </p>

          {/* Anchor navigation */}
          <nav className="flex flex-wrap gap-1 mt-8" aria-label="Menu sections">
            {anchorLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-[0.7rem] tracking-[0.15em] uppercase border border-[rgba(201,168,112,0.2)] text-[#998F82] hover:border-[#C9A870] hover:text-[#C9A870] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Content + Sidebar layout ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Dietary key */}
            <div className="mb-8 p-4 bg-[#252520] border border-[rgba(201,168,112,0.1)] text-[0.75rem] text-[#998F82]">
              <strong className="text-[#F4EFE6]/70">Dietary guide: </strong>
              <span className="inline-flex items-center gap-1 mr-3"><span className="border border-green-700/40 text-green-400 px-1 text-[0.6rem]">V</span> Vegetarian</span>
              <span className="inline-flex items-center gap-1 mr-3"><span className="border border-green-700/40 text-green-400 px-1 text-[0.6rem]">VG</span> Vegan</span>
              <span className="inline-flex items-center gap-1"><span className="border border-amber-700/40 text-amber-400 px-1 text-[0.6rem]">GF</span> Gluten Friendly</span>
              <span className="block mt-1">Please inform your server of any allergies. A 10% surcharge applies on public holidays.</span>
            </div>

            <MenuSection
              id="six-course"
              eyebrow="Wed–Sat evenings"
              title="Six-Course Dinner"
              subtitle="An unhurried journey through the season, guided by what's finest at market."
              badge="$85 per person"
              dishes={sixCourse}
              note="Available Wednesday through Friday from 5pm, and Saturday from 12pm. Dietary requirements can be accommodated with advance notice."
              pdfHref="/images/bar_thyme_menu.pdf"
              pdfLabel="Download sample menu (PDF)"
            />

            <MenuSection
              id="sunday-lunch"
              eyebrow="Sundays only · 12pm–4pm"
              title="Sunday Lunch"
              subtitle="Three generous courses on a Sunday afternoon — the perfect way to ease into the week."
              badge="$65 per person"
              dishes={sundayLunch}
              note="Available Sunday 12pm–4pm only. Walk-ins welcome, bookings recommended."
            />

            <div id="a-la-carte" className="scroll-mt-24">
              <div className="pt-14 md:pt-20 mb-2">
                <span className="section-eyebrow">Daily</span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                    color: "#F4EFE6",
                    lineHeight: 1.1,
                  }}
                >
                  À la Carte
                </h2>
                <p className="text-[#998F82] mt-2 text-[0.9rem]">Order as you please. All dishes available daily.</p>
              </div>

              <MenuSection title="Snacks" dishes={snacks} />
              <MenuSection title="Small Plates" dishes={smallPlates} />
              <MenuSection title="Larger Plates" dishes={largerPlates} />
              <MenuSection title="Dessert" dishes={desserts} />
            </div>

            {/* Wine list */}
            <section id="wine-list" className="scroll-mt-24 py-14 md:py-20">
              <span className="section-eyebrow">The cellar</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "#F4EFE6",
                  lineHeight: 1.1,
                }}
              >
                Wine List
              </h2>
              <p className="text-[#998F82] mt-3 leading-relaxed max-w-lg">
                Natural wines from small producers — organic, biodynamic, minimal additives. Wines that taste like somewhere. Plus specialty sherries, vermouths, digestifs, and seasonal house cocktails.
              </p>
              <a
                href="/images/bar_thyme_wine_list.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-[#C9A870] text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:underline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download wine list (PDF)
              </a>
            </section>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="p-6 bg-[#252520] border border-[rgba(201,168,112,0.15)]">
                <h3
                  className="text-[#F4EFE6] text-lg mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reserve your table
                </h3>
                <Link
                  href="/reservations"
                  className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-[#C9A870] text-[#1B1B17] text-[0.7rem] tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b882] transition-colors min-h-[48px]"
                >
                  Book now
                </Link>
                <div className="mt-5 space-y-2 text-[0.8rem] text-[#998F82]">
                  <p className="text-[#F4EFE6]/60 text-[0.65rem] tracking-[0.15em] uppercase mb-2 font-medium">Hours</p>
                  <p>Wed–Fri <span className="text-[#F4EFE6]/80">5pm–11pm</span></p>
                  <p>Saturday <span className="text-[#F4EFE6]/80">12pm–11pm</span></p>
                  <p>Sunday <span className="text-[#F4EFE6]/80">12pm–4pm</span></p>
                </div>
                <a
                  href="tel:+61396878644"
                  className="flex items-center gap-2 mt-5 text-[#C9A870] text-[0.8rem] hover:underline"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (03) 9687 8644
                </a>
              </div>

              <div className="p-6 bg-[#252520] border border-[rgba(201,168,112,0.15)]">
                <h3
                  className="text-[#F4EFE6] text-base mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Gift Cards
                </h3>
                <p className="text-[#998F82] text-[0.8rem] leading-relaxed mb-4">
                  Treat someone to an evening of seasonal food and natural wine.
                </p>
                <Link
                  href="/gift-cards"
                  className="inline-flex items-center gap-1.5 text-[#C9A870] text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:underline"
                >
                  Gift cards →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
