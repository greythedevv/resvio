import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  LuLandmark,
  LuCreditCard,
  LuSmartphone,
  LuArrowUpRight,
  LuCircleDollarSign,
  LuTarget,
  LuUsers,
  LuSettings2,
  LuHeart,
} from 'react-icons/lu';

import { getGiftFundSummary } from '../../services/giftFundService';
import type { Wedding } from '../../types/wedding';
import type { GiftFundSummary } from '../../types/giftFund';

const EMPTY_SUMMARY: GiftFundSummary = {
  raised: 0,
  goal: 0,
  contributions: [],
};

const GIVING_METHODS = [
  {
    label: 'Bank Transfer',
    description: 'Allow guests to contribute through bank transfer',
    icon: LuLandmark,
  },
  {
    label: 'Card Payment',
    description: 'Accept contributions through card payments',
    icon: LuCreditCard,
  },
  {
    label: 'USSD',
    description: 'Allow guests to contribute using USSD',
    icon: LuSmartphone,
  },
];

export default function GiftsPage() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [summary, setSummary] =
    useState<GiftFundSummary>(EMPTY_SUMMARY);

  useEffect(() => {
    if (!wedding) return;

    getGiftFundSummary(wedding._id)
      .then(setSummary)
      .catch(() => setSummary(EMPTY_SUMMARY));
  }, [wedding]);

  const percentage =
    summary.goal > 0
      ? Math.min(
          100,
          Math.round((summary.raised / summary.goal) * 100)
        )
      : 0;

  const remaining = Math.max(summary.goal - summary.raised, 0);

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
            Contributions
          </p>

          <h1 className="font-serif text-3xl italic text-ink">
            Gift Fund
          </h1>

          <p className="text-body text-sm mt-1">
            Manage your wedding fund and keep track of guest contributions.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
        >
          <LuSettings2 size={14} />
          Manage Fund
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuCircleDollarSign size={15} />
            <span className="text-[11px]">
              Total Raised
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            ₦{summary.raised.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuTarget size={15} />
            <span className="text-[11px]">
              Fund Goal
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            ₦{summary.goal.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuCircleDollarSign size={15} />
            <span className="text-[11px]">
              Remaining
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            ₦{remaining.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuUsers size={15} />
            <span className="text-[11px]">
              Contributions
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            {summary.contributions.length}
          </p>
        </div>
      </div>

      {/* Fund Overview */}
      <section className="bg-white border border-border rounded-xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div>
            <h2 className="text-sm font-medium text-ink">
              Fund Overview
            </h2>

            <p className="text-xs text-muted mt-1">
              Track your progress toward your gift fund goal.
            </p>
          </div>

          <span className="text-xs font-medium text-terracotta">
            {percentage}% of goal
          </span>
        </div>

        {/* Progress */}
        <div className="h-2.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-terracotta rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-[11px] text-muted">
            ₦{summary.raised.toLocaleString()} raised
          </span>

          <span className="text-[11px] text-muted">
            Goal: ₦{summary.goal.toLocaleString()}
          </span>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contributions */}
        <section className="lg:col-span-2 bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div>
              <h2 className="text-sm font-medium text-ink">
                Recent Contributions
              </h2>

              <p className="text-[11px] text-muted mt-1">
                Latest gifts received from your guests.
              </p>
            </div>

            {summary.contributions.length > 0 && (
              <button
                type="button"
                className="inline-flex items-center gap-1 text-terracotta text-xs font-medium hover:underline"
              >
                View all
                <LuArrowUpRight size={12} />
              </button>
            )}
          </div>

          {summary.contributions.length === 0 ? (
            <div className="text-center py-12 px-5">
              <div className="w-10 h-10 mx-auto rounded-full bg-terracotta-light flex items-center justify-center text-terracotta mb-3">
                <LuCircleDollarSign size={17} />
              </div>

              <p className="text-sm font-medium text-ink">
                No contributions yet
              </p>

              <p className="text-xs text-muted mt-1 max-w-xs mx-auto">
                Contributions from your guests will appear here
                once they start giving.
              </p>
            </div>
          ) : (
            <div>
              {/* Table Header */}
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-5 py-2.5 bg-ivory border-b border-border">
                <span className="text-[10px] uppercase tracking-wide text-muted">
                  Guest
                </span>

                <span className="text-[10px] uppercase tracking-wide text-muted">
                  Amount
                </span>

                <span className="text-[10px] uppercase tracking-wide text-muted">
                  Date
                </span>
              </div>

              {/* Rows */}
              {summary.contributions.map((contribution) => (
                <div
                  key={contribution._id}
                  className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center px-5 py-3.5 border-b border-border last:border-b-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-xs font-medium shrink-0">
                      {contribution.name[0]?.toUpperCase()}
                    </div>

                    <span className="text-sm text-ink truncate">
                      {contribution.name}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-ink">
                    ₦{contribution.amount.toLocaleString()}
                  </span>

                  <span className="text-xs text-muted">
                    {new Date(
                      contribution.createdAt
                    ).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Giving Methods */}
        <section className="bg-white border border-border rounded-xl p-5">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-sm font-medium text-ink">
                Giving Options
              </h2>

              <p className="text-[11px] text-muted mt-1">
                Choose how guests can contribute.
              </p>
            </div>

            <button
              type="button"
              className="text-muted hover:text-ink transition-colors"
              aria-label="Manage giving options"
            >
              <LuSettings2 size={15} />
            </button>
          </div>

          <div className="space-y-2">
            {GIVING_METHODS.map(
              ({ label, description, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="w-full flex items-center gap-3 p-3 rounded-lg text-left border border-border hover:border-terracotta/30 hover:bg-ivory transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
                    <Icon size={15} strokeWidth={1.75} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-ink">
                      {label}
                    </p>

                    <p className="text-[10px] text-muted mt-0.5 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <LuArrowUpRight
                    size={13}
                    className="text-muted shrink-0"
                  />
                </button>
              )
            )}
          </div>

          {/* Wishlist link */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-ink/5 flex items-center justify-center text-ink shrink-0">
                <LuHeart size={15} />
              </div>

              <div>
                <p className="text-xs font-medium text-ink">
                  Gift Registry
                </p>

                <p className="text-[10px] text-muted mt-0.5 leading-relaxed">
                  Manage the items guests can choose from your wishlist.
                </p>

                <button
                  type="button"
                  className="text-[10px] text-terracotta font-medium mt-1.5 hover:underline"
                >
                  Manage wishlist →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}