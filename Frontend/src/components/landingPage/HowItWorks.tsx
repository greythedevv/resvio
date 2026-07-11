import React from "react";
import { FiEdit3, FiHeart, FiShare2 } from "react-icons/fi";

const HowItWorks = () => {
  return (
    <div>
      <section className="bg-white border-t border-[#E8D9CD] px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F3E7E0] flex items-center justify-center mb-3">
              <FiEdit3 className="text-[#C1694F] text-xl" />
            </div>
            <p className="font-medium text-[#1F2421] text-sm mb-1">Build it</p>
            <p className="text-[#7A756D] text-xs">
              Names, date, photos — under 10 minutes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F3E7E0] flex items-center justify-center mb-3">
              <FiShare2 className="text-[#C1694F] text-xl" />
            </div>
            <p className="font-medium text-[#1F2421] text-sm mb-1">Share it</p>
            <p className="text-[#7A756D] text-xs">
              One link, QR code, or a text message
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F3E7E0] flex items-center justify-center mb-3">
              <FiHeart className="text-[#C1694F] text-xl" />
            </div>
            <p className="font-medium text-[#1F2421] text-sm mb-1">
              Watch it come together
            </p>
            <p className="text-[#7A756D] text-xs">
              RSVPs, messages, and gifts in one dashboard
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
