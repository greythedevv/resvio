import { Link } from "react-router-dom";

interface RsvpSectionProps {
  slug: string;
}

export default function RsvpSection({
  slug,
}: RsvpSectionProps) {
  return (
    <section className="py-28 md:py-36 px-6 bg-ink text-ivory">
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
          to={`/rsvp/${encodeURIComponent(slug)}`}
          className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-terracotta text-ivory font-serif text-sm hover:bg-terracotta-dark transition"
        >
          RSVP for the wedding
        </Link>

      </div>
    </section>
  );
}