
import { useState } from "react";
import { faqs } from "../../data/faq";
import { FiChevronDown } from "react-icons/fi";

function FaqItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`group border-b border-[#E8D9CD] transition-colors ${
        isOpen ? "bg-[#FCF9F6]" : ""
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
      >
        <span
          className={`text-sm font-medium transition-colors md:text-[15px] ${
            isOpen ? "text-[#C1694F]" : "text-[#1F2421]"
          }`}
        >
          {faq.q}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
            isOpen
              ? "border-[#E8D9CD] bg-[#F3E7E0]"
              : "border-[#E8D9CD] bg-white"
          }`}
        >
          <FiChevronDown
            className={`text-[#C1694F] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-[#7A756D] md:px-6 md:pr-20">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden border-t border-[#E8D9CD] bg-[#FBFAF8] px-6 py-20 md:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#E8D9CD]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8D9CD] bg-white px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C1694F]" />
              <span className="text-xs font-medium tracking-wide text-[#7A756D]">
                Need to know?
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-tight text-[#1F2421] md:text-5xl">
              Questions,
              <br />
              <span className="text-[#C1694F]">answered.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#7A756D]">
              Everything you need to know about creating your wedding
              experience with Resvio.
            </p>

            <p className="mt-8 text-xs text-[#9A948C]">
              Still have a question?
            </p>

            <a
              href="mailto:hello@resvio.app"
              className="mt-1 inline-block text-sm font-medium text-[#C1694F] hover:underline"
            >
              Talk to our team →
            </a>
          </div>

          {/* Questions */}
          <div className="overflow-hidden rounded-2xl border border-[#E8D9CD] bg-white shadow-[0_8px_30px_rgba(31,36,33,0.035)]">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
