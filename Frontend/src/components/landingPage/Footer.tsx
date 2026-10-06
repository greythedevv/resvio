
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F2421] px-6 py-14 text-[#FAF6F1] md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top CTA */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#C99A88]">
              Your day. Your story.
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Make your wedding
              <br />
              easier to share.
            </h2>
          </div>

          <Link
            to="/signup"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#C1694F] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#D17A60]"
          >
            Create your wedding
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-tight"
            >
              resvio
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
              A simpler way to create your wedding experience, collect RSVPs,
              and celebrate with the people who matter.
            </p>

            <a
              href="mailto:hello@resvio.app"
              className="mt-5 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
            >
              <FiMail />
              hello@resvio.app
            </a>
          </div>

          {/* Product */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Product
            </p>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Company
            </p>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Legal
            </p>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Resvio. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {[
              {
                label: "Instagram",
                icon: FiInstagram,
              },
              {
                label: "Twitter",
                icon: FiTwitter,
              },
              {
                label: "Facebook",
                icon: FiFacebook,
              },
              {
                label: "Email",
                icon: FiMail,
              },
            ].map(({ label, icon: Icon }) => (
              <Link
                key={label}
                to="/"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Icon size={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
