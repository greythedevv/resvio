import { useParams, Link } from "react-router-dom";
import { useInvitation } from "../hooks/useInvitation";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();

  const { invitation, loading, error } = useInvitation(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif italic text-muted text-sm">
            Preparing your invitation...
          </p>
        </div>
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-serif text-3xl text-ink mb-3">
            Invitation not found
          </p>

          <p className="text-muted text-sm leading-relaxed mb-8">
            This wedding invitation may not be published yet, or the link
            you're using may be incorrect.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-ivory text-sm hover:opacity-90 transition"
          >
            Back to Resvio
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = invitation.weddingDate
    ? new Date(invitation.weddingDate).toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const shortDate = invitation.weddingDate
    ? new Date(invitation.weddingDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-ivory text-ink overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">

        {invitation.coverImageUrl ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${invitation.coverImageUrl})`,
              }}
            />

            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm mb-8 opacity-90">
            Together with their families
          </p>

          <p className="font-serif italic text-lg md:text-2xl mb-5">
            We are getting married
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            {invitation.partner1Name}
          </h1>

          <div className="font-serif italic text-3xl md:text-4xl my-4">
            &
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            {invitation.partner2Name}
          </h1>

          {shortDate && (
            <div className="mt-10">
              <p className="text-sm md:text-base tracking-[0.2em] uppercase">
                {shortDate}
              </p>

              {invitation.venue?.city && (
                <p className="mt-2 text-sm opacity-90">
                  {invitation.venue.city}
                </p>
              )}
            </div>
          )}

          <div className="mt-12">
            <a
              href="#story"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/60 text-sm backdrop-blur-sm hover:bg-white hover:text-ink transition"
            >
              Explore our story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs tracking-[0.25em] uppercase opacity-80">
          Scroll
        </div> */}
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-6">
            A day to remember
          </p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Two people, one beautiful beginning.
          </h2>

          <p className="text-muted leading-8 text-sm md:text-base">
            We would love for you to be part of one of the most meaningful
            days of our lives. Join us as we celebrate love, family,
            friendship, and the beginning of our next chapter together.
          </p>

          {formattedDate && (
            <p className="font-serif italic text-terracotta mt-8">
              {formattedDate}
            </p>
          )}
        </div>
      </section>

      {/* ================= STORY ================= */}
      {invitation.story && (
        <section
          id="story"
          className="py-24 md:py-32 bg-[#e9e2d8] px-6"
        >
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Story image / visual */}
              <div className="relative">

                {invitation.coverImageUrl ? (
                  <img
                    src={invitation.coverImageUrl}
                    alt={`${invitation.partner1Name} and ${invitation.partner2Name}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/5] bg-[#d9d0c4] flex items-center justify-center">
                    <span className="font-serif italic text-2xl text-muted">
                      Our story
                    </span>
                  </div>
                )}

                <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-terracotta/40" />
              </div>

              {/* Story */}
              <div>
                <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
                  How it began
                </p>

                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                  Our Story
                </h2>

                <p className="text-muted text-sm md:text-base leading-8 whitespace-pre-line">
                  {invitation.story}
                </p>

                <div className="mt-10 font-serif italic text-lg">
                  {invitation.partner1Name} & {invitation.partner2Name}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= WEDDING DETAILS ================= */}
      <section className="py-24 md:py-32 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
              The celebration
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Wedding Details
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#dcd4ca]">

            {/* Date */}
            <div className="bg-ivory p-10 text-center">
              <p className="text-terracotta uppercase tracking-[0.2em] text-xs mb-5">
                When
              </p>

              <h3 className="font-serif text-2xl mb-3">
                {shortDate || "Coming soon"}
              </h3>

              {formattedDate && (
                <p className="text-muted text-sm">
                  {new Date(invitation.weddingDate!).toLocaleDateString(
                    undefined,
                    {
                      weekday: "long",
                    }
                  )}
                </p>
              )}
            </div>

            {/* Venue */}
            <div className="bg-ivory p-10 text-center">
              <p className="text-terracotta uppercase tracking-[0.2em] text-xs mb-5">
                Where
              </p>

              <h3 className="font-serif text-2xl mb-3">
                {invitation.venue?.name || "Venue coming soon"}
              </h3>

              {invitation.venue?.city && (
                <p className="text-muted text-sm">
                  {invitation.venue.city}
                </p>
              )}
            </div>

            {/* RSVP */}
            <div className="bg-ivory p-10 text-center">
              <p className="text-terracotta uppercase tracking-[0.2em] text-xs mb-5">
                Your seat
              </p>

              <h3 className="font-serif text-2xl mb-3">
                We hope you'll join us
              </h3>

              <Link
                to={`/rsvp/${encodeURIComponent(slug ?? "")}`}
                className="inline-block mt-2 text-sm underline underline-offset-4 hover:text-terracotta transition"
              >
                RSVP now
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      {invitation.schedule && (
        <section className="py-24 md:py-32 bg-[#f1ece5] px-6">

          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-16">
              <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
                The day
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Celebration Schedule
              </h2>
            </div>

            <div className="space-y-0">
              {Array.isArray(invitation.schedule) &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                invitation.schedule.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr] gap-6 py-8 border-b border-[#d9d0c5]"
                  >
                    <div className="font-serif italic text-terracotta">
                      {item.time || "—"}
                    </div>

                    <div>
                      <h3 className="font-serif text-xl mb-2">
                        {item.title || item.name || "Celebration"}
                      </h3>

                      {item.description && (
                        <p className="text-muted text-sm leading-7">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </section>
      )}

      {/* ================= GALLERY ================= */}
      {invitation.galleryImageUrls &&
        invitation.galleryImageUrls.length > 0 && (
          <section className="py-24 md:py-32 px-6">

            <div className="max-w-6xl mx-auto">

              <div className="text-center mb-14">
                <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
                  Moments
                </p>

                <h2 className="font-serif text-4xl md:text-5xl">
                  A Few Memories
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {invitation.galleryImageUrls.map(
                  (image: string, index: number) => (
                    <div
                      key={index}
                      className={`overflow-hidden ${
                        index === 0
                          ? "col-span-2 row-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Wedding memory ${index + 1}`}
                        className="w-full h-full min-h-[180px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )
                )}
              </div>

            </div>
          </section>
        )}

      {/* ================= RSVP CTA ================= */}
      <section className="relative py-28 md:py-36 bg-ink text-ivory px-6">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-terracotta uppercase tracking-[0.3em] text-xs mb-6">
            We would love to see you
          </p>

          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-7">
            Will you celebrate with us?
          </h2>

          <p className="text-ivory/60 text-sm md:text-base leading-7 max-w-xl mx-auto mb-10">
            Let us know if you'll be joining us for this special day.
            Your response will help us prepare for your arrival.
          </p>

          <Link
            to={`/rsvp/${encodeURIComponent(slug ?? "")}`}
            className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-terracotta text-ivory font-serif text-sm hover:bg-terracotta-dark transition"
          >
            RSVP for the wedding
          </Link>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-ink text-ivory border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="font-serif italic text-lg">
            {invitation.partner1Name} & {invitation.partner2Name}
          </p>

          <p className="text-xs text-ivory/40">
            Made with Resvio
          </p>

        </div>

      </footer>

    </main>
  );
}