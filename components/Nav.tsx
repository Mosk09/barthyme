"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menus", label: "Menus" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg = scrolled || open
    ? "bg-[#1B1B17]/95 backdrop-blur-md border-b border-[rgba(201,168,112,0.15)]"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo_white.svg"
              alt="Bar Thyme logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#C9A870]"
                      : "text-[#F4EFE6]/70 hover:text-[#F4EFE6]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/reservations"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#C9A870] text-[#1B1B17] text-[0.7rem] tracking-[0.18em] uppercase font-semibold hover:bg-[#d4b882] transition-colors duration-200 min-h-[44px]"
          >
            Reserve
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span
              className={`block h-px w-6 bg-[#F4EFE6] transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#F4EFE6] transition-all duration-300 ${
                open ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#F4EFE6] transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1B1B17] flex flex-col transition-transform duration-400 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex-shrink-0" />
        <nav className="flex flex-col gap-1 p-8 pt-12 flex-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`py-4 text-2xl border-b border-[rgba(201,168,112,0.15)] font-display transition-colors duration-200 ${
                  active ? "text-[#C9A870]" : "text-[#F4EFE6]/80 hover:text-[#F4EFE6]"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/reservations"
            className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-[#C9A870] text-[#1B1B17] text-sm tracking-widest uppercase font-semibold hover:bg-[#d4b882] transition-colors min-h-[52px]"
          >
            Reserve a Table
          </Link>
        </nav>
        <div className="p-8 pt-0">
          <p className="text-[0.75rem] text-[#998F82] tracking-wider">
            <a href="tel:+61396878644" className="hover:text-[#C9A870] transition-colors">
              (03) 9687 8644
            </a>
          </p>
          <p className="text-[0.75rem] text-[#998F82] mt-1">
            227 Barkly St, Footscray VIC 3011
          </p>
        </div>
      </div>
    </>
  );
}
