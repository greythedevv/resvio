import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import RsvpHeader from "../components/rsvp/RsvpHeader";
import RsvpForm from "../components/rsvp/RsvpForm";
import RsvpGiftStep, {
  type WishlistItem,
} from "../components/rsvp/RsvpGiftStep";
import RsvpProgress from "../components/rsvp/RsvpProgress";
import RsvpConfirmation from "../components/rsvp/RsvpConfirmation";

import { useRsvpForm } from "../hooks/useRsvpForm";
import { useInvitation } from "../hooks/useInvitation";

const DEMO_WISHLIST: WishlistItem[] = [
  {
    id: "1",
    name: "Dinnerware Set",
    description:
      "A beautiful dinnerware set for their new home.",
    price: 85000,
    claimed: false,
  },
  {
    id: "2",
    name: "Coffee Machine",
    description:
      "For all those slow mornings together.",
    price: 120000,
    claimed: false,
  },
  {
    id: "3",
    name: "Bed Linen Set",
    description:
      "A comfortable linen set for their bedroom.",
    price: 65000,
    claimed: false,
  },
  {
    id: "4",
    name: "Weekend Getaway",
    description:
      "A contribution towards their first trip as newlyweds.",
    price: 150000,
    claimed: false,
  },
];

type GiftChoice =
  | "wishlist"
  | "contribution"
  | "none"
  | null;

export default function RsvpNow() {
  const { slug } = useParams<{ slug: string }>();

  const {
    form,
    updateField,
    error,
    saving,
    result,
    handleSubmit,
  } = useRsvpForm(slug);

  const {
    invitation,
    loading: invitationLoading,
  } = useInvitation(slug);

  const [step, setStep] = useState(1);

  const [giftChoice, setGiftChoice] =
    useState<GiftChoice>(null);

  const [selectedItem, setSelectedItem] =
    useState<WishlistItem | null>(null);

  const [contribution, setContribution] =
    useState("");

  if (result) {
    return (
      <RsvpConfirmation
        result={result}
        giftChoice={giftChoice}
        selectedGift={selectedItem?.name}
      />
    );
  }

  if (invitationLoading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="font-serif italic text-muted text-sm">
            Preparing your RSVP...
          </p>
        </div>
      </div>
    );
  }

  if (!invitation) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="font-serif text-3xl text-ink mb-3">
            Wedding not found
          </h1>

          <p className="text-muted text-sm mb-6">
            This RSVP link may no longer be available.
          </p>

          <Link
            to="/"
            className="text-terracotta text-sm underline underline-offset-4"
          >
            Back to Resvio
          </Link>

        </div>
      </div>
    );
  }

  const handleGiftNext = () => {
    if (!giftChoice) {
      return;
    }

    if (
      giftChoice === "wishlist" &&
      !selectedItem
    ) {
      return;
    }

    if (
      giftChoice === "contribution" &&
      (!contribution ||
        Number(contribution) <= 0)
    ) {
      return;
    }

    /*
     * For now this only completes the frontend flow.
     *
     * Later we will send:
     * - giftChoice
     * - wishlistItemId
     * - contributionAmount
     *
     * to the backend.
     */
    setStep(4);
  };

  if (step === 4) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center px-6 py-16">

        <div className="max-w-md w-full text-center">

          <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto mb-7">
            <span className="font-serif text-2xl">
              ♡
            </span>
          </div>

          <p className="text-terracotta uppercase tracking-[0.25em] text-[10px] mb-5">
            One last thing
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5">
            Thank you, {form.name}
          </h1>

          <p className="text-muted text-sm leading-7">
            Your RSVP has been received. We can't wait to
            celebrate this special day with you.
          </p>

          {giftChoice === "wishlist" && selectedItem && (
            <div className="mt-8 bg-[#EEE8DF] rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2">
                Wishlist
              </p>

              <p className="font-serif text-lg text-ink">
                {selectedItem.name}
              </p>

              <p className="text-xs text-muted mt-2">
                Your selected gift has been noted.
              </p>
            </div>
          )}

          {giftChoice === "contribution" && (
            <div className="mt-8 bg-[#EEE8DF] rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2">
                Contribution
              </p>

              <p className="font-serif text-lg text-ink">
                ₦{Number(contribution).toLocaleString()}
              </p>

              <p className="text-xs text-muted mt-2">
                Your contribution has been noted.
              </p>

              <button
                type="button"
                className="mt-4 px-5 py-2.5 rounded-full bg-terracotta text-ivory text-xs font-medium hover:bg-terracotta-dark transition"
              >
                Continue to payment
              </button>
            </div>
          )}

          {giftChoice === "none" && (
            <div className="mt-8 bg-[#EEE8DF] rounded-2xl p-5">
              <p className="font-serif italic text-terracotta">
                Your presence is more than enough. ♡
              </p>
            </div>
          )}

          <Link
            to={`/w/${encodeURIComponent(slug ?? "")}`}
            className="inline-flex mt-10 text-sm text-muted hover:text-terracotta transition"
          >
            ← Return to wedding website
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory px-5 py-12 md:py-20">

      <div className="w-full max-w-xl mx-auto">

        <RsvpHeader
          partner1Name={invitation.partner1Name}
          partner2Name={invitation.partner2Name}
          weddingDate={invitation.weddingDate}
          city={invitation.venue?.city}
        />

        <RsvpProgress step={step} />

        <div className="bg-[#FBF9F6] border border-[#DDD6CC] rounded-2xl px-6 py-8 md:px-10 md:py-10 shadow-sm">

          {step === 1 && (
            <>
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-ink">
                  Your details
                </h2>

                <p className="text-muted text-xs mt-2">
                  Tell us a little about who's joining the celebration.
                </p>
              </div>

              <RsvpForm
                form={form}
                updateField={updateField}
                error={error}
                saving={saving}
                onSubmit={(e) => {
                  e.preventDefault();

                  if (!form.name.trim()) {
                    return;
                  }

                  if (!form.email.trim()) {
                    return;
                  }

                  setStep(2);
                }}
              />
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-ink">
                  Your response
                </h2>

                <p className="text-muted text-xs mt-2">
                  Let the couple know whether you'll be joining them.
                </p>
              </div>

              <div className="space-y-7">

                <div>
                  <p className="text-sm font-medium text-ink mb-3">
                    Will you be joining us?
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <button
                      type="button"
                      onClick={() =>
                        updateField("attending", true)
                      }
                      className={`border rounded-xl px-4 py-4 font-serif text-sm transition ${
                        form.attending === true
                          ? "border-terracotta bg-terracotta/10 text-terracotta"
                          : "border-[#D8CFC4] hover:border-terracotta/50"
                      }`}
                    >
                      Joyfully accepts
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        updateField("attending", false)
                      }
                      className={`border rounded-xl px-4 py-4 font-serif text-sm transition ${
                        form.attending === false
                          ? "border-terracotta bg-terracotta/10 text-terracotta"
                          : "border-[#D8CFC4] hover:border-terracotta/50"
                      }`}
                    >
                      Regretfully declines
                    </button>

                  </div>
                </div>

                {form.attending && (
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      How many are attending?
                    </label>

                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={form.partySize}
                        onChange={(e) =>
                          updateField(
                            "partySize",
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                        className="w-24 px-4 py-3.5 text-center bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl focus:outline-none focus:border-terracotta"
                      />

                      <span className="text-xs text-muted">
                        Including you
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    A note for the couple
                    <span className="text-muted font-normal ml-1">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    rows={4}
                    placeholder="Leave a little message..."
                    className="w-full px-4 py-3.5 bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-sm resize-none focus:outline-none focus:border-terracotta"
                  />
                </div>

                {error && (
                  <div className="bg-[#FDF0ED] border border-[#E7C4BB] text-[#9A4D3B] text-sm rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-[#D8CFC4] rounded-full py-3.5 text-sm text-muted hover:border-terracotta transition"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    disabled={form.attending === null}
                    onClick={() => setStep(3)}
                    className="flex-[2] bg-terracotta text-ivory rounded-full py-3.5 font-serif text-sm disabled:opacity-50"
                  >
                    Continue
                  </button>

                </div>

              </div>
            </>
          )}

          {step === 3 && (
            <>
              <RsvpGiftStep
                wishlist={DEMO_WISHLIST}
                selectedItem={selectedItem}
                contribution={contribution}
                giftChoice={giftChoice}
                onGiftChoiceChange={setGiftChoice}
                onWishlistSelect={setSelectedItem}
                onContributionChange={setContribution}
              />

              <div className="flex gap-3 mt-10">

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-[#D8CFC4] rounded-full py-3.5 text-sm text-muted hover:border-terracotta transition"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleGiftNext();

                    if (
                      giftChoice === "none" ||
                      (
                        giftChoice === "wishlist" &&
                        selectedItem
                      ) ||
                      (
                        giftChoice === "contribution" &&
                        Number(contribution) > 0
                      )
                    ) {
                      handleSubmit({
                        preventDefault: () => undefined,
                      } as React.FormEvent<HTMLFormElement>);
                    }
                  }}
                  disabled={!giftChoice || saving}
                  className="flex-[2] bg-terracotta text-ivory rounded-full py-3.5 font-serif text-sm disabled:opacity-50"
                >
                  {saving
                    ? "Submitting..."
                    : "Complete RSVP"}
                </button>

              </div>
            </>
          )}

        </div>

        <div className="text-center mt-8">
          <Link
            to={`/w/${encodeURIComponent(slug ?? "")}`}
            className="text-xs text-muted hover:text-terracotta transition"
          >
            ← Return to wedding website
          </Link>
        </div>

      </div>
    </main>
  );
}