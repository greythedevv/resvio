interface InvitationIntroProps {
  weddingDate?: string;
}

export default function InvitationIntro({
  weddingDate,
}: InvitationIntroProps) {
  const formattedDate = weddingDate
    ? new Date(weddingDate).toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F8F5F0]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-6">
          A day to remember
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-8">
          Two people, one beautiful beginning.
        </h2>

        <p className="text-body text-sm md:text-base leading-8">
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
  );
}