import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barthyme.com.au"),
  title: {
    template: "%s | Bar Thyme Footscray",
    default: "Bar Thyme | Neighbourhood Bistro & Bar — Footscray, Melbourne",
  },
  description:
    "A neighbourhood bistro and bar in Footscray serving seasonal food, natural wines and house cocktails. Open Wed–Sun at 227 Barkly St, Footscray VIC 3011.",
  keywords: [
    "Bar Thyme",
    "restaurant Footscray",
    "bar Footscray",
    "bistro Footscray Melbourne",
    "natural wine Melbourne",
    "seasonal food Footscray",
    "fine dining Footscray",
    "neighbourhood restaurant Melbourne west",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://barthyme.com.au",
    siteName: "Bar Thyme",
    images: [{ url: "/images/landing_page_cropped.jpeg", width: 1200, height: 630, alt: "Bar Thyme — Neighbourhood Bistro & Bar, Footscray" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/landing_page_cropped.jpeg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "FoodEstablishment", "BarOrPub"],
  name: "Bar Thyme",
  url: "https://barthyme.com.au",
  telephone: "+61396878644",
  email: "hello@barthyme.com.au",
  servesCuisine: ["Contemporary Australian", "Modern European"],
  priceRange: "$$",
  hasMenu: "https://barthyme.com.au/menus",
  acceptsReservations: true,
  description:
    "A neighbourhood bistro and bar in Footscray serving seasonal food, natural wines and house cocktails.",
  image: "https://barthyme.com.au/images/landing_page_cropped.jpeg",
  logo: "https://barthyme.com.au/images/logo_cropped.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "227 Barkly St",
    addressLocality: "Footscray",
    addressRegion: "VIC",
    postalCode: "3011",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8004,
    longitude: 144.8997,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/barthyme/",
    "https://www.facebook.com/barthyme/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#1B1B17]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
