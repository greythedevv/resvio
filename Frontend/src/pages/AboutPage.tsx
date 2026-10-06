import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF8] text-[#1F2421]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight hover:text-[#C1694F]"
        >
          resvio
        </Link>

        <div className="mt-20 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C1694F]">
            About Resvio
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Your wedding,
            <br />
            <span className="text-[#C1694F]">beautifully organized.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#6F6A63]">
            Resvio helps couples create a simple, personal place for their
            guests to find everything they need — from the wedding story and
            event details to RSVPs, gifts, and messages.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E8D9CD] bg-white p-7">
            <h2 className="font-serif text-2xl">Less chasing</h2>
            <p className="mt-3 text-sm leading-7 text-[#7A756D]">
              No endless messages, scattered spreadsheets, or manually
              tracking who's coming. Resvio brings the important details into
              one place.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8D9CD] bg-white p-7">
            <h2 className="font-serif text-2xl">More celebrating</h2>
            <p className="mt-3 text-sm leading-7 text-[#7A756D]">
              Your guests get a simple experience, while you get a clearer
              view of your wedding and the people who are part of it.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#E8D9CD] pt-8">
          <Link
            to="/"
            className="text-sm font-medium text-[#C1694F] hover:underline"
          >
            ← Back to Resvio
          </Link>
        </div>
      </div>
    </main>
  );
}