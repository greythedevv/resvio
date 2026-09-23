interface WeddingDetailsProps {
  weddingDate?: string;
  venue?: {
    name?: string;
    city?: string;
  };
}

export default function WeddingDetails({
  weddingDate,
  venue,
}: WeddingDetailsProps) {
  const formattedDate = weddingDate
    ? new Date(weddingDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Coming soon";

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F8F5F0]">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
            The celebration
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Wedding Details
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-[#DDD6CC] p-10 text-center">
            <p className="text-terracotta uppercase tracking-[0.2em] text-xs mb-5">
              When
            </p>

            <h3 className="font-serif text-2xl text-ink mb-3">
              {formattedDate}
            </h3>

            {weddingDate && (
              <p className="text-muted text-sm">
                {new Date(weddingDate).toLocaleDateString(undefined, {
                  weekday: "long",
                })}
              </p>
            )}
          </div>

          <div className="border border-[#DDD6CC] p-10 text-center">
            <p className="text-terracotta uppercase tracking-[0.2em] text-xs mb-5">
              Where
            </p>

            <h3 className="font-serif text-2xl text-ink mb-3">
              {venue?.name || "Venue coming soon"}
            </h3>

            {venue?.city && (
              <p className="text-muted text-sm">
                {venue.city}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}