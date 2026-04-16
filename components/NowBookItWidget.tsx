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

const LABELS = {
  reservation: {
    button: "Book a table",
    sub: "Opens Bar Thyme's booking page",
    iframe: "Reserve a table at Bar Thyme",
  },
  gift: {
    button: "Purchase a gift card",
    sub: "Opens Bar Thyme's gift card page",
    iframe: "Bar Thyme Gift Cards",
  },
};

export default function NowBookItWidget({ type = "reservation" }: NowBookItWidgetProps) {
  const src = URLS[type];
  const label = LABELS[type];

  return (
    <>
      {/* Mobile: full-width CTA button — no iframe sub-window */}
      <div className="md:hidden px-5 py-10 flex flex-col items-center gap-4 bg-[#252520]">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full max-w-sm px-8 py-5 bg-[#C9A870] text-[#1B1B17] text-[0.75rem] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b882] transition-colors min-h-[56px]"
        >
          {label.button}
        </a>
        <p className="text-[#998F82] text-[0.75rem] text-center">{label.sub}</p>
      </div>

      {/* Desktop: embedded iframe */}
      <div className="hidden md:block w-full">
        <iframe
          src={src}
          title={label.iframe}
          className="w-full border-0"
          style={{ minHeight: "680px", height: "680px" }}
          loading="lazy"
          allow="payment"
        />
      </div>
    </>
  );
}
