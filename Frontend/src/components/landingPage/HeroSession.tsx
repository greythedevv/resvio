
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const HeroSession = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF8] px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#E8D9CD]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-[#DCE5D7]/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8D9CD] bg-white px-4 py-2 shadow-[0_4px_15px_rgba(31,36,33,0.03)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C1694F]" />
          <span className="text-xs font-medium text-[#7A756D]">
            The simpler way to manage your wedding
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-[#1F2421] md:text-7xl lg:text-8xl">
          Your wedding,
          <br />
          <span className="text-[#C1694F]">one beautiful link.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#5A5650] md:text-base">
          Create your invitation, collect RSVPs, share your story, and receive
          gifts — all from one simple experience built for you and your
          guests.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/signup"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C1694F] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(193,105,79,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#A8573F] hover:shadow-[0_12px_25px_rgba(193,105,79,0.25)]"
          >
            Create your wedding
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-[#E8D9CD] bg-white px-6 py-3.5 text-sm font-medium text-[#1F2421] transition-all hover:border-[#C1694F] hover:text-[#C1694F]"
          >
            See an example
          </Link>
        </div>

        {/* Trust points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#8A857E]">
          <span className="flex items-center gap-1.5">
            <FiCheck className="text-[#8EA27B]" />
            Setup in minutes
          </span>

          <span className="hidden h-3 w-px bg-[#D8D0C8] sm:block" />

          <span className="flex items-center gap-1.5">
            <FiCheck className="text-[#8EA27B]" />
            No spreadsheets
          </span>

          <span className="hidden h-3 w-px bg-[#D8D0C8] sm:block" />

          <span className="flex items-center gap-1.5">
            <FiCheck className="text-[#8EA27B]" />
            One shareable link
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSession;
