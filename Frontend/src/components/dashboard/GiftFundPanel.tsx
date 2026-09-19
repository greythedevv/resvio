
import { Link } from 'react-router-dom';

interface Contribution {
  name: string;
  amount: number;
  timeAgo: string;
}

interface Props {
  raised: number;
  goal: number;
  contributions: Contribution[];
}

export default function GiftFundPanel({ raised, goal, contributions }: Props) {
  const pct = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Gift Fund</h2>
        <Link to="/dashboard/gifts" className="text-terracotta text-xs hover:underline">
          View Details →
        </Link>
      </div>

      <div className="bg-ink rounded-lg p-4 mb-4">
        <p className="text-ivory text-2xl font-medium tabular-nums">₦{raised.toLocaleString()}</p>
        <p className="text-ivory/60 text-xs mb-3">Total Gifts Received</p>
        <div className="h-1.5 bg-white/15 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-sage transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-ivory/60">Goal: ₦{goal.toLocaleString()}</span>
          <span className="text-ivory/80">{pct}%</span>
        </div>
      </div>

      <p className="text-ink text-xs font-medium mb-3">Recent Contributions</p>
      <div className="space-y-3">
        {contributions.length === 0 ? (
          <p className="text-muted text-xs">No contributions yet.</p>
        ) : (
          contributions.map((c) => (
            <div key={c.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-[10px] font-medium">
                  {c.name[0]?.toUpperCase()}
                </div>
                <span className="text-ink">{c.name}</span>
              </div>
              <div className="text-right">
                <p className="text-ink font-medium">₦{c.amount.toLocaleString()}</p>
                <p className="text-muted text-[10px]">{c.timeAgo}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}