import { LuCircleDollarSign, LuTarget, LuUsers, LuWallet } from "react-icons/lu";
import { formatNaira } from "../../utils/formatCurrency";
import type { GiftFundSummary } from "../../types/giftFund";

interface Props {
  summary: GiftFundSummary;
}

export default function GiftSummaryCards({ summary }: Props) {
  const hasGoal = summary.goal > 0;
  const remaining = Math.max(summary.goal - summary.raised, 0);

  const cards = [
    { label: "Total Raised", value: formatNaira(summary.raised), icon: LuCircleDollarSign },
    { label: "Fund Goal", value: hasGoal ? formatNaira(summary.goal) : "Not set", icon: LuTarget },
    { label: "Remaining", value: hasGoal ? formatNaira(remaining) : "—", icon: LuWallet },
    { label: "Gifts Received", value: String(summary.count), icon: LuUsers },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map(({ label, value, icon: Icon }) => (
        <div key={label} className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <Icon size={15} />
            <span className="text-[11px]">{label}</span>
          </div>
          <p className="text-xl font-medium text-ink tabular-nums">{value}</p>
        </div>
      ))}
    </div>
  );
}