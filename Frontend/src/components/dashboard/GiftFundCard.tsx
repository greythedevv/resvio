
import { Link } from 'react-router-dom';
import { LuGift, LuArrowRight } from 'react-icons/lu';

interface Props {
  raised: number;
  target: number;
}

export default function GiftFundCard({ raised, target }: Props) {
  const pct = target > 0 ? Math.min(100, Math.round((raised / target) * 100)) : 0;
  const hasContributions = raised > 0;

  return (
    <div>
      <h2 className="text-sm font-medium text-ink mb-3 flex items-center gap-2">
        <LuGift size={15} strokeWidth={1.75} /> Gift funds
      </h2>

      <div className="flex items-end justify-between mb-3">
        <div>
          <p className="text-2xl font-medium text-ink tabular-nums">₦{raised.toLocaleString()}</p>
          <p className="text-muted text-xs">raised</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-muted tabular-nums">₦{target.toLocaleString()}</p>
          <p className="text-muted text-xs">goal</p>
        </div>
      </div>

      <div className="h-1.5 bg-border rounded-full overflow-hidden mb-2">
        <div className="h-full bg-sage transition-all" style={{ width: `${pct}%` }} />
      </div>

      <p className="text-muted text-xs mb-3">
        {hasContributions ? `${pct}% of goal reached` : 'No contributions yet'}
      </p>

      <Link
        to="/dashboard/gifts"
        className="inline-flex items-center gap-1 text-terracotta text-sm hover:gap-1.5 transition-all"
      >
        Manage gift funds <LuArrowRight size={14} />
      </Link>
    </div>
  );
}