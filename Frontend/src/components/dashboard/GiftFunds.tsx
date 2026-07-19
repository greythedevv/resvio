import { Link } from "react-router-dom";
import { FiGift } from "react-icons/fi";

import type { Stats } from "../../types/dashboard";

interface GiftFundsProps {
  stats: Stats;
}

export default function GiftFunds({
  stats,
}: GiftFundsProps) {
  const raisedPct = stats.fundsTarget
    ? Math.min(
        100,
        Math.round(
          (stats.fundsRaised / stats.fundsTarget) *
            100
        )
      )
    : 0;

  return (
    <div className="bg-white border border-border rounded-lg p-5">
      <h2 className="font-medium text-ink text-sm mb-3 flex items-center gap-2">
        <FiGift size={14} />
        Gift funds raised
      </h2>

      <div className="h-2 bg-ivory rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-sage transition-all"
          style={{
            width: `${raisedPct}%`,
          }}
        />
      </div>

      <p className="text-muted text-xs">
        {stats.fundsRaised.toLocaleString()} of{" "}
        {stats.fundsTarget.toLocaleString()} raised
      </p>

      <Link
        to="/gifts"
        className="block text-center text-xs text-terracotta mt-3 hover:underline"
      >
        Manage gift registry
      </Link>
    </div>
  );
}