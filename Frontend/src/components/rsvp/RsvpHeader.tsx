import { Link } from "react-router-dom";

interface Props {
  partner1Name?: string;
  partner2Name?: string;
  weddingDate?: string;
  city?: string;
}

export default function RsvpHeader({
  partner1Name,
  partner2Name,
  weddingDate,
  city,
}: Props) {
  const formattedDate = weddingDate
    ? new Date(weddingDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="text-center mb-10">
      <Link
        to="/"
        className="font-serif text-sm tracking-[0.25em] uppercase text-muted hover:text-terracotta transition"
      >
        Resvio
      </Link>

      <div className="w-px h-10 bg-[#D8CFC4] mx-auto my-6" />

      <p className="text-terracotta uppercase tracking-[0.25em] text-[10px] mb-4">
        RSVP
      </p>

      <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
        {partner1Name || "The Couple"}
      </h1>

      <p className="font-serif italic text-2xl text-terracotta my-2">
        &
      </p>

      <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
        {partner2Name || "The Couple"}
      </h1>

      {(formattedDate || city) && (
        <p className="text-muted text-sm mt-5">
          {formattedDate}
          {formattedDate && city && " · "}
          {city}
        </p>
      )}

      <p className="text-body text-sm leading-7 max-w-sm mx-auto mt-6">
        We would love to celebrate this special day with you.
        Please let us know if you'll be joining us.
      </p>
    </div>
  );
}