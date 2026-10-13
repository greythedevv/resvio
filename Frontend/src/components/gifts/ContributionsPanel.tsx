import { useState } from "react";
import { LuCircleDollarSign, LuPlus, LuTrash2 } from "react-icons/lu";
import { METHOD_LABELS } from "../../constants/giftFund";
import { formatNaira } from "../../utils/formatCurrency";
import { formatShortDate } from "../../utils/formatDate";
import type { GiftContribution } from "../../types/giftFund";

interface Props {
  contributions: GiftContribution[];
  count: number;
  onAdd: () => void;
  onDelete: (contributionId: string) => Promise<void>;
}

export default function ContributionsPanel({ contributions, count, onAdd, onDelete }: Props) {
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const handleDelete = async (contributionId: string) => {
    setBusyId(contributionId);
    await onDelete(contributionId);
    setBusyId(null);
    setConfirmingId(null);
  };

  return (
    <section className="lg:col-span-2 bg-white border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border">
        <div>
          <h2 className="text-sm font-medium text-ink">Recent Contributions</h2>
          <p className="text-[11px] text-muted mt-1">Latest gifts from your guests.</p>
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-1.5 bg-ink text-ivory text-xs font-medium px-3.5 py-2 rounded-lg hover:bg-ink/90 transition-colors shrink-0"
        >
          <LuPlus size={13} />
          Add gift
        </button>
      </div>

      {contributions.length === 0 ? (
        <div className="text-center py-12 px-5">
          <div className="w-10 h-10 mx-auto rounded-full bg-terracotta-light flex items-center justify-center text-terracotta mb-3">
            <LuCircleDollarSign size={17} />
          </div>
          <p className="text-sm font-medium text-ink">No gifts yet</p>
          <p className="text-xs text-muted mt-1 max-w-xs mx-auto">
            Record a gift you've received, and it will show up here.
          </p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-2.5 bg-ivory border-b border-border">
            <span className="text-[10px] uppercase tracking-wide text-muted">Guest</span>
            <span className="text-[10px] uppercase tracking-wide text-muted">Amount</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-wide text-muted">Method</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-wide text-muted">Date</span>
            <span className="w-16" />
          </div>

          {contributions.map((c) => (
            <div
              key={c._id}
              className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-3.5 border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-xs font-medium shrink-0">
                  {c.name[0]?.toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-ink truncate">{c.name}</p>
                  {c.message && (
                    <p className="text-[11px] text-muted truncate">"{c.message}"</p>
                  )}
                </div>
              </div>

              <span className="text-sm font-medium text-ink tabular-nums">
                {formatNaira(c.amount)}
              </span>

              <span className="hidden sm:block text-xs text-muted">{METHOD_LABELS[c.method]}</span>
              <span className="hidden sm:block text-xs text-muted">{formatShortDate(c.createdAt)}</span>

              <div className="w-16 flex justify-end">
                {c.source === "manual" &&
                  (confirmingId === c._id ? (
                    <div className="flex items-center gap-2 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleDelete(c._id)}
                        disabled={busyId === c._id}
                        className="font-medium text-red-text hover:underline disabled:opacity-60"
                      >
                        {busyId === c._id ? "..." : "Remove"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmingId(null)}
                        className="text-muted hover:text-ink"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmingId(c._id)}
                      aria-label={`Remove gift from ${c.name}`}
                      className="text-muted hover:text-red-text transition-colors"
                    >
                      <LuTrash2 size={14} />
                    </button>
                  ))}
              </div>
            </div>
          ))}

          {count > contributions.length && (
            <p className="px-5 py-3 text-[11px] text-muted border-t border-border">
              Showing the latest {contributions.length} of {count} gifts.
            </p>
          )}
        </div>
      )}
    </section>
  );
}