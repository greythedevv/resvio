import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";

interface InvitationHeroProps {
  partner1Name: string;
  partner2Name: string;
  weddingDate?: string;
  city?: string;
  coverImageUrl?: string;
  slug?: string;
}

export default function InvitationHero({
  partner1Name,
  partner2Name,
  weddingDate,
  city,
  coverImageUrl,
}: InvitationHeroProps) {
  const hasImage = Boolean(coverImageUrl);

  const formattedDate = weddingDate
    ? new Date(weddingDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {hasImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink/70" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-terracotta-light/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta/10 blur-3xl" />
        </>
      )}

      <div
        className={`absolute top-12 left-8 md:left-16 w-24 h-24 md:w-32 md:h-32 rounded-full border ${
          hasImage ? "border-ivory/20" : "border-terracotta/20"
        }`}
      />
      <div
        className={`absolute bottom-16 right-8 md:right-16 w-36 h-36 md:w-44 md:h-44 rounded-full border ${
          hasImage ? "border-ivory/20" : "border-terracotta/20"
        }`}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p
          className={`uppercase tracking-[0.35em] text-[11px] md:text-xs mb-7 ${
            hasImage ? "text-ivory/70" : "text-terracotta"
          }`}
        >
          Together with their families
        </p>

        <p
          className={`font-serif italic text-lg md:text-xl mb-6 ${
            hasImage ? "text-ivory/90" : "text-body"
          }`}
        >
          We are getting married
        </p>

        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight ${
            hasImage ? "text-ivory" : "text-ink"
          }`}
        >
          {partner1Name}
        </h1>

        <div
          className={`font-serif italic text-2xl md:text-3xl my-3 md:my-5 ${
            hasImage ? "text-ivory/60" : "text-terracotta"
          }`}
        >
          &amp;
        </div>

        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight ${
            hasImage ? "text-ivory" : "text-ink"
          }`}
        >
          {partner2Name}
        </h1>

        {formattedDate && (
          <div className="mt-12">
            <div
              className={`w-10 h-px mx-auto mb-5 ${
                hasImage ? "bg-ivory/40" : "bg-terracotta/40"
              }`}
            />
            <p
              className={`uppercase tracking-[0.25em] text-xs md:text-sm ${
                hasImage ? "text-ivory/90" : "text-ink"
              }`}
            >
              {formattedDate}
            </p>
            {city && (
              <p
                className={`mt-2 text-xs md:text-sm ${
                  hasImage ? "text-ivory/60" : "text-muted"
                }`}
              >
                {city}
              </p>
            )}
          </div>
        )}

        <Link
          to="#story"
          className={`inline-flex mt-12 md:mt-14 px-8 py-3.5 rounded-full text-sm font-serif transition-colors ${
            hasImage
              ? "border border-ivory/50 text-ivory hover:bg-ivory hover:text-ink"
              : "bg-ink text-ivory hover:bg-terracotta"
          }`}
        >
          Explore our story
        </Link>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${
          hasImage ? "text-ivory/60" : "text-muted"
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <LuChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}