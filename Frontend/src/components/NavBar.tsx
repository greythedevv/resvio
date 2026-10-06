
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8D9CD]/70 bg-[#FBFAF8]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center"
          aria-label="Resvio home"
        >
          <span className="font-serif text-2xl tracking-tight text-[#1F2421] transition-colors group-hover:text-[#C1694F]">
            resvio
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-[#6F6A63] transition-colors hover:text-[#1F2421]"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-[#6F6A63] transition-colors hover:text-[#1F2421]"
          >
            How it works
          </a>

          <a
            href="#faq"
            className="text-sm text-[#6F6A63] transition-colors hover:text-[#1F2421]"
          >
            FAQ
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-[#1F2421] transition-colors hover:bg-white"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-[#C1694F] px-4 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(193,105,79,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#A8573F] hover:shadow-[0_7px_18px_rgba(193,105,79,0.2)]"
          >
            Get started
            <FiArrowRight className="text-sm transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
