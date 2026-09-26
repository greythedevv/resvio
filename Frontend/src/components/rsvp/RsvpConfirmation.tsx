import { Link } from "react-router-dom";
import { FiCheck, FiHeart } from "react-icons/fi";

import type { RsvpResult } from "../../types/rsvp";

interface Props {
  result: RsvpResult;
  giftChoice?: "wishlist" | "contribution" | "none" | null;
  selectedGift?: string;
}

export default function RsvpConfirmation({
  result,
  giftChoice,
  selectedGift,
}: Props) {
  const attending = result.rsvpStatus === "attending";

  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-6 py-16">

      <div className="max-w-md w-full text-center">

        <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto mb-7">
          {attending ? (
            <FiCheck size={28} />
          ) : (
            <FiHeart size={24} />
          )}
        </div>

        <p className="text-terracotta uppercase tracking-[0.25em] text-[10px] mb-5">
          RSVP received
        </p>

        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5">
          {attending
            ? "You're on the guest list"
            : "Thank you for letting us know"}
        </h1>

        <p className="text-muted text-sm leading-7">
          {attending
            ? `We can't wait to celebrate with you, ${result.name}.`
            : `We'll miss you, ${result.name}.`}
        </p>

        {attending && giftChoice === "wishlist" && selectedGift && (
          <div className="mt-8 bg-[#EEE8DF] rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2">
              Your gift
            </p>

            <p className="font-serif text-lg text-ink">
              {selectedGift}
            </p>

            <p className="text-xs text-muted mt-2">
              Thank you for thinking of the couple.
            </p>
          </div>
        )}

        {attending && giftChoice === "contribution" && (
          <div className="mt-8 bg-[#EEE8DF] rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2">
              Your contribution
            </p>

            <p className="font-serif text-lg text-ink">
              Thank you for your generosity.
            </p>
          </div>
        )}

        <p className="font-serif italic text-terracotta mt-8">
          We look forward to celebrating together.
        </p>

        <Link
          to="/"
          className="inline-flex mt-10 px-7 py-3 rounded-full bg-ink text-ivory font-serif text-sm hover:opacity-90 transition"
        >
          Back to Resvio
        </Link>

      </div>

    </main>
  );
}