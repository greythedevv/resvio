
import { LuUsers, LuCircleCheck, LuClock, LuCircleX } from 'react-icons/lu';
import StatCardWithTrend from './StatCardWithTrend';
import type { Stats } from '../../types/dashboard';

interface Props {
  stats: Stats | null;
}

export default function StatsRow({ stats }: Props) {
  const total = stats?.total ?? 0;
  const attending = stats?.attending ?? 0;
  const pending = stats?.pending ?? 0;
  const declined = stats?.declined ?? 0;

  const pct = (n: number) => (total > 0 ? ((n / total) * 100).toFixed(1) : '0.0');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCardWithTrend
        icon={<LuUsers size={14} />}
        iconBg="bg-terracotta-light"
        iconColor="text-terracotta"
        label="Total Guests"
        value={total}
        subtext="tracked"
        trendColor="#C1694F"
        sparklineData={[total * 0.7, total * 0.8, total * 0.85, total * 0.9, total * 0.95, total]}
      />
      <StatCardWithTrend
        icon={<LuCircleCheck size={14} />}
        iconBg="bg-sage-soft"
        iconColor="text-sage"
        label="Attending"
        value={attending}
        subtext={`${pct(attending)}% of total`}
        trendColor="#9CAF88"
        sparklineData={[attending * 0.6, attending * 0.7, attending * 0.8, attending * 0.85, attending * 0.95, attending]}
      />
      <StatCardWithTrend
        icon={<LuClock size={14} />}
        iconBg="bg-yellow-50"
        iconColor="text-yellow-600"
        label="Pending"
        value={pending}
        subtext={`${pct(pending)}% of total`}
        trendColor="#D6A94A"
        sparklineData={[pending * 1.4, pending * 1.2, pending * 1.1, pending * 1.05, pending * 1.0, pending]}
      />
      <StatCardWithTrend
        icon={<LuCircleX size={14} />}
        iconBg="bg-red-soft"
        iconColor="text-red-text"
        label="Declined"
        value={declined}
        subtext={`${pct(declined)}% of total`}
        trendColor="#B14A4A"
        sparklineData={[declined * 0.5, declined * 0.7, declined * 0.8, declined * 0.9, declined * 0.95, declined]}
      />
    </div>
  );
}