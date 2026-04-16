import Link from "next/link";

const hours = [
  { days: "Wednesday – Friday", time: "5pm – 11pm" },
  { days: "Saturday", time: "12pm – 11pm" },
  { days: "Sunday", time: "12pm – 4pm" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menus", label: "Menus" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export default function Footer() {
  return (
    <footer className="bg-[#252520] border-t border-[rgba(201,168,112,0.15)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p
              className="text-2xl text-[#F4EFE6] mb-3"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Bar Thyme
            </p>
            <p className="text-[0.8rem] text-[#998F82] leading-relaxed max-w-xs">
              A neighbourhood bistro and bar in the heart of Footscray. Seasonal food, natural wine, good company.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/barthyme/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bar Thyme on Instagram"
                className="text-[#998F82] hover:text-[#C9A870] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/barthyme/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bar Thyme on Facebook"
                className="text-[#998F82] hover:text-[#C9A870] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Find Us
            </h3>
            <address className="not-italic text-[0.85rem] text-[#998F82] leading-loose">
              <p>
                <a
                  href="https://maps.google.com/?q=227+Barkly+St,+Footscray+VIC+3011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A870] transition-colors"
                >
                  227 Barkly St<br />
                  Footscray VIC 3011
                </a>
              </p>
              <p className="mt-3">
                <a href="tel:+61396878644" className="hover:text-[#C9A870] transition-colors">
                  (03) 9687 8644
                </a>
              </p>
              <p className="mt-1">
                <a href="mailto:hello@barthyme.com.au" className="hover:text-[#C9A870] transition-colors">
                  hello@barthyme.com.au
                </a>
              </p>
            </address>
          </div>

          {/* Hours + Nav */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-4 font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Hours
            </h3>
            <dl className="text-[0.85rem] text-[#998F82] space-y-1.5 mb-8">
              {hours.map(({ days, time }) => (
                <div key={days} className="flex flex-col">
                  <dt className="text-[#F4EFE6]/70">{days}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A870] mb-3 font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[0.85rem] text-[#998F82] hover:text-[#C9A870] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[rgba(201,168,112,0.1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-[0.75rem] text-[#998F82]/60">
            © {new Date().getFullYear()} Bar Thyme. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-[#998F82]/60">
            A 10% surcharge applies on public holidays.
          </p>
        </div>
      </div>
    </footer>
  );
}
