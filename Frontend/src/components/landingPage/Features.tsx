import { FiGift, FiBarChart2 } from 'react-icons/fi'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'

const Features = () => {
  return (
    <div>
       <section className="border-t border-[#E8D9CD] px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white border border-[#E8D9CD] rounded-lg p-4">
            <FiBarChart2 className="text-[#9CAF88] text-2xl mb-2" />
            <p className="font-medium text-[#1F2421] text-sm mb-1">
              Live RSVP tracking
            </p>
            <p className="text-[#7A756D] text-xs">
              See who's coming without asking twice.
            </p>
          </div>
          <div className="bg-white border border-[#E8D9CD] rounded-lg p-4">
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-[#9CAF88] text-2xl mb-2" />
            <p className="font-medium text-[#1F2421] text-sm mb-1">
              Guest messages
            </p>
            <p className="text-[#7A756D] text-xs">
              A well-wish alongside every RSVP.
            </p>
          </div>
          <div className="bg-white border border-[#E8D9CD] rounded-lg p-4">
            <FiGift className="text-[#9CAF88] text-2xl mb-2" />
            <p className="font-medium text-[#1F2421] text-sm mb-1">
              Gift funds
            </p>
            <p className="text-[#7A756D] text-xs">
              Guests contribute directly, no envelopes.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Features
