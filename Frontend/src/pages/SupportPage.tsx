import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { faqs } from "../data/faq";

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FBFAF8] text-[#1F2421]">
      {/* Header */}
      <div className="border-b border-[#E8D9CD]">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-10">
          <Link
            to="/"
            className="font-serif text-2xl tracking-tight transition-colors hover:text-[#C1694F]"
          >
            resvio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#E8D9CD]/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C1694F]">
            Resvio Support
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            How can we
            <br />
            <span className="text-[#C1694F]">help?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#7A756D] md:text-base">
            Find answers to common questions about creating your wedding,
            managing guests, RSVPs, and using Resvio.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E8D9CD] bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9A948C]">
              Frequently asked questions
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Answers to common questions.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E8D9CD]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`border-b border-[#E8D9CD] last:border-b-0 transition-colors ${
                    isOpen ? "bg-[#FCF9F6]" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                  >
                    <span
                      className={`text-sm font-medium md:text-[15px] ${
                        isOpen
                          ? "text-[#C1694F]"
                          : "text-[#1F2421]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8D9CD] transition-colors ${
                        isOpen ? "bg-[#F3E7E0]" : "bg-white"
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
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pr-10 text-sm leading-7 text-[#7A756D] md:px-6 md:pr-20">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[#E8D9CD] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9A948C]">
            Can't find your answer?
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            We're happy to help.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#7A756D]">
            Send us a message and tell us what you're having trouble with.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C1694F] px-5 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#A8573F]"
          >
            Contact us
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          
        </div>
      

        
      </section>

       
      

        {/* Footer navigation */}
      <div className="border-t border-[#E8D9CD] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#9A948C]">
            © {new Date().getFullYear()} Resvio. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-xs text-[#7A756D]">
            <Link to="/contact" className="hover:text-[#C1694F]">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-[#C1694F]">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#C1694F]">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-[#C1694F]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupportPage;