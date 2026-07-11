import React, { useState } from "react";
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
    <div className="border-b border-[#E8D9CD] py-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-medium text-[#1F2421] text-sm pr-4">{faq.q}</span>

        <FiChevronDown
          className={`text-[#C1694F] shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <p className="text-[#7A756D] text-xs mt-3 leading-relaxed">{faq.a}</p>
      )}
    </div>
  );
}

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="border-t border-[#E8D9CD] px-6 md:px-12 py-12">
      <h2 className="font-serif text-2xl text-[#1F2421] text-center mb-8">
        Questions, answered
      </h2>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.q}
            faq={faq}
            isOpen={openFaq === i}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
