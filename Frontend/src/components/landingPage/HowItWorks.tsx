
import { FiEdit3, FiHeart, FiShare2, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiEdit3,
    title: "Build it",
    description:
      "Add your names, date, photos, story, and everything your guests need to know.",
  },
  {
    number: "02",
    icon: FiShare2,
    title: "Share it",
    description:
      "Send one beautiful wedding link through WhatsApp, text, email, or a QR code.",
  },
  {
    number: "03",
    icon: FiHeart,
    title: "Celebrate",
    description:
      "Watch RSVPs arrive, read messages, and manage gifts from one simple dashboard.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden border-t border-[#E8D9CD] bg-white px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8D9CD] bg-[#FBFAF8] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9CAF88]" />
            <span className="text-xs font-medium tracking-wide text-[#7A756D]">
              Simple from start to finish
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#1F2421] md:text-5xl">
            From idea to
            <br />
            <span className="text-[#C1694F]">“I do.”</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#7A756D] md:text-base">
            Create your wedding experience in a few simple steps. No
            spreadsheets. No complicated setup.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line */}
          <div className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-[#E8D9CD] md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number / icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#E8D9CD] bg-white shadow-[0_5px_20px_rgba(31,36,33,0.05)]">
                  <Icon className="text-xl text-[#C1694F]" />
                </div>

                <span className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-[#A19A92]">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 font-serif text-2xl text-[#1F2421]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[#7A756D]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F3EF] px-5 py-2.5 text-xs font-medium text-[#6F6860]">
            <span>Ready in minutes</span>
            <FiArrowRight className="text-[#C1694F]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
