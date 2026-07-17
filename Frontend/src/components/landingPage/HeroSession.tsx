import { Link } from "react-router-dom";

const HeroSession = () => {
  return (
    <div>
      <section className="text-center px-6 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-6xl text-[#1F2421] leading-tight mb-5">
          Your wedding,
          <br />
          one link.
        </h1>
        <p className="text-[#5A5650] text-sm md:text-base max-w-md mx-auto mb-8">
          Build the invitation, track RSVPs live, and let guests contribute to
          gifts — no spreadsheets, no chasing people down.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="bg-[#C1694F] text-[#FAF6F1] font-serif text-sm px-6 py-3 rounded-lg hover:bg-[#a8573f] transition-colors">
            <Link to="/signup">Create your wedding</Link>
          </button>
          <button className="bg-white text-[#1F2421] font-serif text-sm px-6 py-3 rounded-lg border border-[#E8D9CD] hover:border-[#C1694F] transition-colors">
            <Link to="/">See an example</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSession;

    
