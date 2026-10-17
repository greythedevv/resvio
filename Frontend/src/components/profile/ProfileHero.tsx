import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { formatLongDate } from "../../utils/formatDate";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding | null;
}

export default function ProfileHero({ wedding }: Props) {
  const partner1 = wedding?.partner1Name || "Partner One";
  const partner2 = wedding?.partner2Name || "Partner Two";
  const initials = `${partner1[0] ?? ""}${partner2[0] ?? ""}`.toUpperCase();

  return (
    <section className="relative overflow-hidden bg-ink rounded-2xl mb-6">
      <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full border border-white/5" />
      <div className="absolute -right-8 -bottom-28 w-64 h-64 rounded-full border border-white/5" />

      <div className="relative p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-lg font-medium shrink-0">
            {initials}
          </div>

          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40 mb-1">
              Our Wedding
            </p>

            <h2 className="font-serif italic text-2xl sm:text-3xl text-ivory">
              {partner1} &amp; {partner2}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-ivory/50">
              <span className="flex items-center gap-1.5">
                <LuCalendarDays size={12} />
                {formatLongDate(wedding?.weddingDate)}
              </span>

              {wedding?.venue?.name && (
                <span className="flex items-center gap-1.5">
                  <LuMapPin size={12} />
                  {wedding.venue.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}