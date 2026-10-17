import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { GIVING_OPTIONS } from "../../constants/giftFund";

export default function GivingOptions() {
  return (
    <section className="bg-white border border-border rounded-xl p-5">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-ink">Giving Options</h2>
        <p className="text-[11px] text-muted mt-1">How guests will be able to contribute.</p>
      </div>

      <div className="space-y-2">
        {GIVING_OPTIONS.map(({ label, description, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-3 rounded-lg border border-border"
          >
            <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
              <Icon size={15} strokeWidth={1.75} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-ink">{label}</p>
              <p className="text-[10px] text-muted mt-0.5 leading-relaxed">{description}</p>
            </div>

            <span className="text-[10px] text-muted bg-ivory border border-border px-2 py-0.5 rounded-full shrink-0">
              Soon
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-ink/5 flex items-center justify-center text-ink shrink-0">
          <LuHeart size={15} />
        </div>

        <div>
          <p className="text-xs font-medium text-ink">Gift Registry</p>
          <p className="text-[10px] text-muted mt-0.5 leading-relaxed">
            Manage the items guests can choose from your wishlist.
          </p>
          <Link
            to="/dashboard/wishlist"
            className="inline-block text-[10px] text-terracotta font-medium mt-1.5 hover:underline"
          >
            Manage wishlist →
          </Link>
        </div>
      </div>
    </section>
  );
}