import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF8] text-[#1F2421]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight hover:text-[#C1694F]"
        >
          resvio
        </Link>

        <div className="mt-20 grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Intro */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C1694F]">
              Contact
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
              Let's talk.
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#7A756D]">
              Have a question, need some help, or want to tell us something
              about Resvio? Send us a message and we'll get back to you.
            </p>
          </div>

          {/* Form */}
          <form className="rounded-2xl border border-[#E8D9CD] bg-white p-6 shadow-[0_10px_35px_rgba(31,36,33,0.04)] md:p-8">
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#1F2421]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#E3DCD4] bg-white px-4 py-3 text-sm text-[#1F2421] outline-none transition-all placeholder:text-[#AAA39B] focus:border-[#C1694F] focus:ring-4 focus:ring-[#C1694F]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#1F2421]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#E3DCD4] bg-white px-4 py-3 text-sm text-[#1F2421] outline-none transition-all placeholder:text-[#AAA39B] focus:border-[#C1694F] focus:ring-4 focus:ring-[#C1694F]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[#1F2421]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What can we help with?"
                  className="w-full rounded-xl border border-[#E3DCD4] bg-white px-4 py-3 text-sm text-[#1F2421] outline-none transition-all placeholder:text-[#AAA39B] focus:border-[#C1694F] focus:ring-4 focus:ring-[#C1694F]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#1F2421]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  className="w-full resize-none rounded-xl border border-[#E3DCD4] bg-white px-4 py-3 text-sm text-[#1F2421] outline-none transition-all placeholder:text-[#AAA39B] focus:border-[#C1694F] focus:ring-4 focus:ring-[#C1694F]/10"
                />
              </div>

              <button
                type="submit"
                className="mt-1 rounded-xl bg-[#C1694F] px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#A8573F]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 border-t border-[#E8D9CD] pt-8">
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