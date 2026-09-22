import { Link } from "react-router-dom";

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
  const formattedDate = weddingDate
    ? new Date(weddingDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {coverImageUrl ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${coverImageUrl})`,
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#F8F5F0]" />
      )}

      <div className="absolute top-10 left-10 w-28 h-28 border border-white/20 rounded-full" />
      <div className="absolute bottom-12 right-12 w-40 h-40 border border-white/20 rounded-full" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-8">
          Together with their families
        </p>

        <p className="font-serif italic text-lg md:text-xl mb-5">
          We are getting married
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
          {partner1Name}
        </h1>

        <div className="font-serif italic text-3xl md:text-4xl my-4">
          &
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
          {partner2Name}
        </h1>

        {formattedDate && (
          <div className="mt-10">
            <p className="uppercase tracking-[0.2em] text-sm">
              {formattedDate}
            </p>

            {city && (
              <p className="mt-2 text-sm text-white/80">
                {city}
              </p>
            )}
          </div>
        )}

        <Link
          to="#story"
          className="inline-flex mt-12 px-7 py-3 rounded-full border border-white/60 text-sm hover:bg-white hover:text-ink transition"
        >
          Explore our story
        </Link>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}