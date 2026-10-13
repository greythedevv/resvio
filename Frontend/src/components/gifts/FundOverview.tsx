import { formatNaira } from "../../utils/formatCurrency";
import type { GiftFundSummary } from "../../types/giftFund";

interface Props {
  summary: GiftFundSummary;
  onSetGoal: () => void;
}

export default function FundOverview({ summary, onSetGoal }: Props) {
  const hasGoal = summary.goal > 0;
  const percentage = hasGoal
    ? Math.min(100, Math.round((summary.raised / summary.goal) * 100))
    : 0;

  return (
    <section className="bg-white border border-border rounded-xl p-5 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div>
          <h2 className="text-sm font-medium text-ink">Fund Overview</h2>
          <p className="text-xs text-muted mt-1">
            Track your progress toward your gift fund goal.
          </p>
        </div>

        {hasGoal ? (
          <span className="text-xs font-medium text-terracotta">{percentage}% of goal</span>
        ) : (
          <button
            type="button"
            onClick={onSetGoal}
            className="text-xs font-medium text-terracotta hover:underline"
          >
            Set a goal
          </button>
        )}
      </div>

      <div className="h-2.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-terracotta rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-muted">{formatNaira(summary.raised)} raised</span>
        <span className="text-[11px] text-muted">
          {hasGoal ? `Goal: ${formatNaira(summary.goal)}` : "No goal set yet"}
        </span>
      </div>
    </section>
  );
}