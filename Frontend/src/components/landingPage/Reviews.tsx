import React from "react";
import { reviews } from "../../data/testimonials";

const Reviews: React.FC = () => {
  return (
    <div>
      <section className="bg-white border-t border-[#E8D9CD] px-6 md:px-12 py-12">
        <h2 className="font-serif text-2xl text-[#1F2421] text-center mb-8">
          Couples who've used it
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.names}
              className="bg-[#FAF6F1] border border-[#E8D9CD] rounded-lg p-5"
            >
              <p className="text-[#1F2421] text-sm leading-relaxed mb-4">
                "{r.quote}"
              </p>
              <p className="font-serif text-[#C1694F] text-sm">{r.names}</p>
              <p className="text-[#7A756D] text-xs">{r.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
