import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F2421] px-6 py-16 text-[#FAF6F1] md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#C99A88]">
              Your day. Your story.
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Everything your guests need.
              <br />
              Nothing they don't.
            </h2>
          </div>

          <Link
            to="/signup"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#C1694F] px-5 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#D17A60]"
          >
            Create your wedding
            <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-tight transition-colors hover:text-[#C1694F]"
            >
              resvio
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              A simpler way to create your wedding experience, collect RSVPs,
              and stay connected with your guests.
            </p>
          </div>

          {/* Support */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
              Support
            </p>

            <div className="flex flex-col items-start gap-3 text-sm text-white/60">
              <Link
                to="/support"
                className="transition-colors hover:text-white"
              >
                Support
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
              Legal
            </p>

            <div className="flex flex-col items-start gap-3 text-sm text-white/60">
              <Link
                to="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                to="/cookies"
                className="transition-colors hover:text-white"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Resvio. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Twitter
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;