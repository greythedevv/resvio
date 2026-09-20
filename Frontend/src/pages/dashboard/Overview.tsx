
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { getWeddingStats, getRecentGuests } from '../../services/dashboard';

import WeddingHero from '../../components/dashboard/WeddingHero';
import StatsRow from '../../components/dashboard/StatsRow';
import AttendanceDonut from '../../components/dashboard/AttendanceDonut';
import RsvpTrendChart from '../../components/dashboard/RsvpTrendChart';
import RecentGuests from '../../components/dashboard/RecentGuests';
import InvitationStatusDonut from '../../components/dashboard/InvitationStatusDonut';
import GiftFundPanel from '../../components/dashboard/GiftFundPanel';
import EventHighlightsCard from '../../components/dashboard/EventHighlightsCard';
import QuickActions from '../../components/dashboard/QuickActions';

import type { Wedding } from '../../types/wedding';
import type { Stats, Guest } from '../../types/dashboard';

const POLL_INTERVAL = 15000;

export default function Overview() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [stats, setStats] = useState<Stats | null>(null);
  const [recentGuests, setRecentGuests] = useState<Guest[]>([]);

  useEffect(() => {
    if (!wedding) return;

    const fetchData = async () => {
      try {
        const [statsData, guestsData] = await Promise.all([
          getWeddingStats(wedding._id),
          getRecentGuests(wedding._id),
        ]);

        setStats(statsData);
        setRecentGuests(guestsData);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [wedding]);

  const trendData = [
    {
      date: 'Day 1',
      attending: Math.round((stats?.attending ?? 0) * 0.4),
      pending: stats?.pending ?? 0,
      declined: Math.round((stats?.declined ?? 0) * 0.3),
    },
    {
      date: 'Day 2',
      attending: Math.round((stats?.attending ?? 0) * 0.55),
      pending: stats?.pending ?? 0,
      declined: Math.round((stats?.declined ?? 0) * 0.4),
    },
    {
      date: 'Day 3',
      attending: Math.round((stats?.attending ?? 0) * 0.7),
      pending: stats?.pending ?? 0,
      declined: Math.round((stats?.declined ?? 0) * 0.6),
    },
    {
      date: 'Day 4',
      attending: Math.round((stats?.attending ?? 0) * 0.8),
      pending: stats?.pending ?? 0,
      declined: Math.round((stats?.declined ?? 0) * 0.75),
    },
    {
      date: 'Day 5',
      attending: Math.round((stats?.attending ?? 0) * 0.9),
      pending: stats?.pending ?? 0,
      declined: Math.round((stats?.declined ?? 0) * 0.9),
    },
    {
      date: 'Day 6',
      attending: Math.round((stats?.attending ?? 0) * 0.95),
      pending: stats?.pending ?? 0,
      declined: stats?.declined ?? 0,
    },
    {
      date: 'Day 7',
      attending: stats?.attending ?? 0,
      pending: stats?.pending ?? 0,
      declined: stats?.declined ?? 0,
    },
  ];

  const recentContributions = recentGuests.slice(0, 4).map((guest) => ({
    name: guest.name,
    amount: 0,
    timeAgo: '—',
  }));

  return (
    <div className="space-y-8">
      {/* Page introduction */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        {/* <div>
          <p className="text-xs uppercase tracking-[0.18em] text-terracotta font-medium">
            Your wedding
          </p>

          <h1 className="mt-1 font-serif text-3xl text-ink">
            Everything in one place.
          </h1>

          <p className="mt-1 text-sm text-muted max-w-xl">
            Keep track of your guests, RSVPs, invitations and wedding
            contributions as the big day gets closer.
          </p>
        </div> */}

        {wedding?.date && (
          <div className="shrink-0 text-left sm:text-right">
            <p className="text-xs text-muted">Wedding date</p>
            <p className="mt-1 font-serif text-lg text-ink">
              {new Date(wedding.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        )}
      </div>

      {/* Wedding hero */}
      {wedding && (
        <div className="overflow-hidden rounded-2xl">
          <WeddingHero wedding={wedding} />
        </div>
      )}

      {/* Key statistics */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl text-ink">
              At a glance
            </h2>

            <p className="mt-0.5 text-xs text-muted">
              A quick look at how things are going.
            </p>
          </div>
        </div>

        <StatsRow stats={stats} />
      </section>

      {/* RSVP analytics */}
      <section>
        <div className="mb-4">
          <h2 className="font-serif text-xl text-ink">
            Guest activity
          </h2>

          <p className="mt-0.5 text-xs text-muted">
            Follow your RSVP responses and attendance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0">
            <AttendanceDonut stats={stats} />
          </div>

          <div className="min-w-0">
            <RsvpTrendChart data={trendData} />
          </div>
        </div>
      </section>

      {/* Guests + invitation + funds */}
      <section>
        <div className="mb-4">
          <h2 className="font-serif text-xl text-ink">
            Wedding activity
          </h2>

          <p className="mt-0.5 text-xs text-muted">
            Recent guest responses, invitations and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <RecentGuests guests={recentGuests} />

          <InvitationStatusDonut
            opened={stats?.total ?? 0}
            notOpened={0}
            bounced={0}
          />

          <GiftFundPanel
            raised={stats?.fundsRaised ?? 0}
            goal={stats?.fundsTarget ?? 0}
            contributions={recentContributions}
          />
        </div>
      </section>

      {/* Bottom actions */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        {wedding && (
          <EventHighlightsCard wedding={wedding} />
        )}

        <QuickActions />
      </section>
    </div>
  );
}