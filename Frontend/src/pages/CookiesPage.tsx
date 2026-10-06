import { Link } from "react-router-dom";

export default function CookiesPage() {
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
            Cookie Policy
          </h1>

          <p className="mt-4 text-sm text-[#9A948C]">
            Last updated: October 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-sm leading-8 text-[#6F6A63]">
          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              What are cookies?
            </h2>
            <p className="mt-3">
              Cookies are small pieces of information stored by your browser
              that can help websites remember settings and understand how the
              service is being used.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              How Resvio may use cookies
            </h2>
            <p className="mt-3">
              Resvio may use cookies or similar technologies to keep users
              signed in, maintain secure sessions, remember preferences, and
              understand how the service is used.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Managing cookies
            </h2>
            <p className="mt-3">
              Most browsers allow you to control or remove cookies through
              their settings. Disabling certain cookies may affect parts of
              the Resvio experience.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[#E8D9CD] pt-8">
          <Link to="/" className="text-sm font-medium text-[#C1694F]">
            ← Back to Resvio
          </Link>
        </div>
      </div>
    </main>
  );
}