import { Link } from "react-router-dom";

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-[#9A948C]">
            Last updated: October 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-sm leading-8 text-[#6F6A63]">
          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Using Resvio
            </h2>
            <p className="mt-3">
              By using Resvio, you agree to use the service responsibly and in
              accordance with applicable laws and these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Your account
            </h2>
            <p className="mt-3">
              You are responsible for keeping your account credentials secure
              and for activity that occurs through your account.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Your content
            </h2>
            <p className="mt-3">
              You retain responsibility for the information, images, messages,
              and other content you add to Resvio. You should only upload
              content you have the right to use.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Service availability
            </h2>
            <p className="mt-3">
              We aim to keep Resvio available and reliable, but we cannot
              guarantee uninterrupted access at all times.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1F2421]">
              Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these terms as Resvio develops. When changes are
              made, the updated version will be published on this page.
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