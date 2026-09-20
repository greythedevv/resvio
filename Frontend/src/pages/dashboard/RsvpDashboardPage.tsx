
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  LuCircleCheck,
  LuClock,
  LuCircleX,
  LuSearch,
  LuDownload,
} from 'react-icons/lu';

import {
  getWeddingStats,
  getRecentGuests,
} from '../../services/dashboard';

import type { Wedding } from '../../types/wedding';
import type { Stats, Guest } from '../../types/dashboard';

const statusPill: Record<Guest['rsvpStatus'], string> = {
  attending: 'bg-sage-soft text-sage',
  declined: 'bg-red-soft text-red-text',
  pending: 'bg-border text-muted',
};

export default function RsvpDashboardPage() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [guests, setGuests] = useState<Guest[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!wedding) return;

    getRecentGuests(wedding._id).then(setGuests);
    getWeddingStats(wedding._id).then(setStats);
  }, [wedding]);

  const filtered = guests.filter(
    (guest: Guest) =>
      !search ||
      guest.name.toLowerCase().includes(search.toLowerCase())
  );

  const exportGuests = () => {
    if (filtered.length === 0) return;

    const headers = ['Name', 'Response', 'Date'];

    const rows = filtered.map((guest) => [
      guest.name,
      guest.rsvpStatus,
      guest.respondedAt
        ? new Date(guest.respondedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : '—',
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) =>
        row
          .map((value) =>
            `"${String(value).replace(/"/g, '""')}"`
          )
          .join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `resvio-rsvp-list-${
      new Date().toISOString().split('T')[0]
    }.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl italic text-ink">
              RSVP
            </h1>

            <p className="text-body text-sm mt-1">
              Kindly let us know if you'll be joining us.
            </p>
          </div>

          <button
            type="button"
            onClick={exportGuests}
            disabled={filtered.length === 0}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-terracotta rounded-lg transition-colors hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <LuDownload size={14} />
            Export list
          </button>
        </div>
      </div>

      {/* RSVP Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-2xl">
        {/* Attending */}
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-1.5 text-sage mb-1.5">
            <LuCircleCheck size={14} />

            <span className="text-xs text-muted">
              Attending
            </span>
          </div>

          <p className="text-2xl font-medium text-ink tabular-nums">
            {stats?.attending ?? 0}
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-1.5 text-yellow-600 mb-1.5">
            <LuClock size={14} />

            <span className="text-xs text-muted">
              Pending
            </span>
          </div>

          <p className="text-2xl font-medium text-ink tabular-nums">
            {stats?.pending ?? 0}
          </p>
        </div>

        {/* Declined */}
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-1.5 text-red-text mb-1.5">
            <LuCircleX size={14} />

            <span className="text-xs text-muted">
              Declined
            </span>
          </div>

          <p className="text-2xl font-medium text-ink tabular-nums">
            {stats?.declined ?? 0}
          </p>
        </div>
      </div>

      {/* RSVP List */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-border">
          <div className="flex gap-2">
            <button
              type="button"
              className="text-xs font-medium text-terracotta border-b-2 border-terracotta px-1 pb-1"
            >
              RSVP List
            </button>

            <button
              type="button"
              className="text-xs text-muted hover:text-ink px-1 pb-1"
            >
              Send Reminders
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <LuSearch
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted"
                size={13}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search guest..."
                className="pl-8 pr-3 py-1.5 text-xs border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta w-40"
              />
            </div>

            {/* Export */}
            <button
              type="button"
              onClick={exportGuests}
              disabled={filtered.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-terracotta border border-terracotta/30 rounded-lg hover:bg-terracotta/5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <LuDownload size={13} />
              Export
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filtered.length === 0 ? (
          <p className="text-muted text-xs text-center py-10">
            No responses yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 py-2.5 text-xs text-muted border-b border-border">
                <span>Name</span>
                <span>Response</span>
                <span>Date</span>
              </div>

              {/* Guest Rows */}
              {filtered.map((guest) => (
                <div
                  key={guest._id}
                  className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center px-4 py-3 border-b border-border last:border-b-0 text-sm"
                >
                  <span className="text-ink">
                    {guest.name}
                  </span>

                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full capitalize w-fit ${
                      statusPill[guest.rsvpStatus]
                    }`}
                  >
                    {guest.rsvpStatus}
                  </span>

                  <span className="text-muted text-xs">
                    {guest.respondedAt
                      ? new Date(
                          guest.respondedAt
                        ).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '—'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Result count */}
      {filtered.length > 0 && (
        <p className="text-xs text-muted mt-3">
          Showing {filtered.length} guest
          {filtered.length !== 1 ? 's' : ''}
          {search ? ` matching "${search}"` : ''}.
        </p>
      )}
    </div>
  );
}
