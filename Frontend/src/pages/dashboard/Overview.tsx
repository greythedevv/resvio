import  { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { getWeddingStats, getRecentGuests } from '../../services/dashboard';
import WeddingHero from '../../components/dashboard/WeddingHero';
import StatsRow from '../../components/dashboard/StatsRow';
import AttendanceDonut from '../../components/dashboard/AttendanceDonut';
import RsvpTrendChart from '../../components/dashboard/RsvpTrendChart';
import RecentReviews from '../../components/dashboard/RecentReviews';
import InvitationStatusDonut from '../../components/dashboard/InvitationStatusDonut';
import GiftFundPanel from '../../components/dashboard/GiftFundPanel';
import EventHighlightsCard from '../../components/dashboard/EventHighlightsCard';
import QuickActions from '../../components/dashboard/QuickActions';
import type { Wedding } from '../../types/wedding';
import type { Stats, Guest } from '../../types/dashboard';

const POLL_INTERVAL = 15000;

export default function Overview() {
  const { wedding } = useOutletContext<{ wedding: Wedding | null }>();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentGuests, setRecentGuests] = useState<Guest[]>([]);

  useEffect(() => {
    if (!wedding) return;
    const fetchData = async () => {
      const [statsData, guestsData] = await Promise.all([
        getWeddingStats(wedding._id),
        getRecentGuests(wedding._id),
      ]);
      setStats(statsData);
      setRecentGuests(guestsData);
    };
    fetchData();
    const interval = setInterval(fetchData, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [wedding]);

  // Placeholder trend series until a backend endpoint tracks RSVP history over time
  const trendData = [
    { date: 'Day 1', attending: Math.round((stats?.attending ?? 0) * 0.4), pending: stats?.pending ?? 0, declined: Math.round((stats?.declined ?? 0) * 0.3) },
    { date: 'Day 2', attending: Math.round((stats?.attending ?? 0) * 0.55), pending: stats?.pending ?? 0, declined: Math.round((stats?.declined ?? 0) * 0.4) },
    { date: 'Day 3', attending: Math.round((stats?.attending ?? 0) * 0.7), pending: stats?.pending ?? 0, declined: Math.round((stats?.declined ?? 0) * 0.6) },
    { date: 'Day 4', attending: Math.round((stats?.attending ?? 0) * 0.8), pending: stats?.pending ?? 0, declined: Math.round((stats?.declined ?? 0) * 0.75) },
    { date: 'Day 5', attending: Math.round((stats?.attending ?? 0) * 0.9), pending: stats?.pending ?? 0, declined: Math.round((stats?.declined ?? 0) * 0.9) },
    { date: 'Day 6', attending: Math.round((stats?.attending ?? 0) * 0.95), pending: stats?.pending ?? 0, declined: stats?.declined ?? 0 },
    { date: 'Day 7', attending: stats?.attending ?? 0, pending: stats?.pending ?? 0, declined: stats?.declined ?? 0 },
  ];

  const recentContributions = recentGuests.slice(0, 4).map((g) => ({
    name: g.name,
    amount: 0,
    timeAgo: '—',
  }));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
      <div className="space-y-6 min-w-0">
        {wedding && <WeddingHero wedding={wedding} />}
        <StatsRow stats={stats} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceDonut stats={stats} />
          <RsvpTrendChart data={trendData} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentReviews guests={recentGuests} />
          <InvitationStatusDonut opened={stats?.total ?? 0} notOpened={0} bounced={0} />
          <GiftFundPanel
            raised={stats?.fundsRaised ?? 0}
            goal={stats?.fundsTarget ?? 0}
            contributions={recentContributions}
          />
        </div>
      </div>

      <div className="space-y-6">
        {wedding && <EventHighlightsCard wedding={wedding} />}
        <QuickActions />
      </div>
    </div>
  );
}