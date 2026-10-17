
import { reviews } from "../../data/testimonials";

const Reviews: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF8] px-6 py-20 md:px-12 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8D9CD]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#DCE5DC]/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#E8D9CD] bg-white px-3 py-1.5">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#C1694F]" />
            <span className="text-xs font-medium tracking-wide text-[#7A756D]">
              Loved by couples
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#1F2421] md:text-5xl">
            Made for the moments
            <br />
            <span className="text-[#C1694F]">that matter most.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#7A756D] md:text-base">
            From the first invitation to the final RSVP, couples use Resvio
            to make sharing their special day feel effortless.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => {
            const initials = review.names
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={review.names}
                className={`group relative flex flex-col justify-between rounded-2xl border border-[#E8D9CD] bg-white p-7 shadow-[0_8px_30px_rgba(31,36,33,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(31,36,33,0.08)] ${
                  index === 1 ? "md:-translate-y-3" : ""
                }`}
              >
                {/* Quote mark */}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-sm text-[#C1694F]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <span className="font-serif text-4xl leading-none text-[#E8D9CD]">
                      “
                    </span>
                  </div>

                  <p className="text-[15px] leading-7 text-[#343934]">
                    {review.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3 border-t border-[#F0EAE4] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2E6DE] text-xs font-semibold text-[#A6533D]">
                    {initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#1F2421]">
                      {review.names}
                    </p>
                    <p className="mt-0.5 text-xs text-[#8A857E]">
                      {review.location}
                    </p>
                  </div>

                  <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#F7F4F0]">
                    <span className="text-xs text-[#C1694F]">✓</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <div className="flex -space-x-2">
            {["AM", "KO", "JT", "NS"].map((initials) => (
              <div
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FBFAF8] bg-[#E8D9CD] text-[9px] font-semibold text-[#6D6259]"
              >
                {initials}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7A756D]">
            Join couples creating a better way to celebrate together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

