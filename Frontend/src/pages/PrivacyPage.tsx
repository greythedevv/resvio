import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF8] text-[#1F2421]">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight hover:text-[#C1694F]"
        >
          resvio
        </Link>

        <div className="mt-20">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C1694F]">
            Legal
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-[#9A948C]">
            Last updated: October 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-sm leading-8 text-[#6F6A63]">
          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Information we collect
            </h2>
            <p className="mt-3">
              When you use Resvio, we may collect information you provide when
              creating an account, setting up an event, managing guests, or
              communicating with us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              How we use information
            </h2>
            <p className="mt-3">
              We use information to provide and improve Resvio, manage your
              account and event, support RSVP functionality, and communicate
              important service information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Guest information
            </h2>
            <p className="mt-3">
              Event organizers may add or receive information about their
              guests through Resvio. Organizers are responsible for ensuring
              they have an appropriate basis for collecting and sharing guest
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Data security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect information stored within
              Resvio. However, no online service can guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Your choices
            </h2>
            <p className="mt-3">
              You may contact us regarding your personal information or
              questions about how your information is handled.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[#E8D9CD] pt-8">
          <Link to="/" className="text-sm font-medium text-[#C1694F]">
            ← Back to Resvio
          </Link>
        </div>
      </div>
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
}