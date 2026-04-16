"use client";

type WidgetType = "reservation" | "gift";

interface NowBookItWidgetProps {
  type?: WidgetType;
}

const ACCOUNT_ID = "7baec2f3-7635-43c0-857b-115da2d7dd17";
const VENUE_ID = "5327";

const URLS = {
  reservation: `https://bookings.nowbookit.com/?accountid=${ACCOUNT_ID}&venueid=${VENUE_ID}`,
  gift: `https://giftcards.nowbookit.com/cards/card-selection?accountid=${ACCOUNT_ID}&venueid=${VENUE_ID}`,
};

export default function NowBookItWidget({ type = "reservation" }: NowBookItWidgetProps) {
  const src = URLS[type];

  return (
    <div className="w-full">
      <iframe
        src={src}
        title={type === "gift" ? "Bar Thyme Gift Cards" : "Reserve a table at Bar Thyme"}
        className="w-full border-0"
        style={{ minHeight: "640px", height: "640px" }}
        loading="lazy"
        allow="payment"
      />
      {/* Fallback for browsers that block iframes */}
      <noscript>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#C9A870] text-[#1B1B17] text-[0.7rem] tracking-[0.2em] uppercase font-semibold min-h-[52px]"
        >
          {type === "gift" ? "Purchase Gift Card" : "Reserve via NowBookIt"}
        </a>
      </noscript>
    </div>
  );
}
