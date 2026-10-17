
import {
  FiGift,
  FiBarChart2,
  FiLink,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

const features = [
  {
    icon: FiBarChart2,
    title: "Live RSVP tracking",
    description:
      "See who's attending, who's still deciding, and who's unable to make it — all from one simple dashboard.",
    accent: "bg-[#E7EFE3] text-[#71875F]",
    tag: "Stay organized",
  },
  {
    icon: HiOutlineChatBubbleOvalLeftEllipsis,
    title: "Guest messages",
    description:
      "Let every RSVP become part of the memory with personal messages and well-wishes from your guests.",
    accent: "bg-[#F2E6DE] text-[#B25C43]",
    tag: "Make it personal",
  },
  {
    icon: FiGift,
    title: "Gift funds",
    description:
      "Give guests an easy way to contribute toward what matters to you, without the awkwardness of envelopes.",
    accent: "bg-[#E7EFE3] text-[#71875F]",
    tag: "Give with ease",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden border-t border-[#E8D9CD] bg-[#FBFAF8] px-6 py-20 md:px-12 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#E8D9CD]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#DCE5D7]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8D9CD] bg-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9CAF88]" />
            <span className="text-xs font-medium tracking-wide text-[#7A756D]">
              Everything in one place
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#1F2421] md:text-5xl">
            Less chasing.
            <br />
            <span className="text-[#C1694F]">More celebrating.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#7A756D] md:text-base">
            Resvio takes care of the little details behind your guest list,
            so you can spend more time enjoying the moments that matter.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-[#E8D9CD] bg-white p-7 shadow-[0_8px_30px_rgba(31,36,33,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,36,33,0.08)] ${
                  index === 1 ? "md:-translate-y-3" : ""
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.accent}`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF7F3] text-[#A9A39B] transition-all duration-300 group-hover:bg-[#F2E6DE] group-hover:text-[#C1694F]">
                    <FiArrowUpRight className="text-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9A948C]">
                    {feature.tag}
                  </span>

                  <h3 className="mt-2 font-serif text-2xl text-[#1F2421]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7A756D]">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-auto flex items-center gap-2 pt-7 text-xs font-medium text-[#6F786A]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E7EFE3]">
                    <FiCheck className="text-[11px]" />
                  </span>
                  Built into your wedding experience
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C1694F] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom product message */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#E8D9CD] bg-white px-6 py-6 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-medium text-[#1F2421]">
              Everything your guests need, without the clutter.
            </p>
            <p className="mt-1 text-xs leading-5 text-[#7A756D]">
              One beautiful experience for you and everyone celebrating with
              you.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#C1694F]">
            <FiLink />
            One simple wedding link
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
