import {
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

import type { Stats } from "../../types/dashboard";

import StatCard from "./StatCard";

interface DashboardStatsProps {
  stats: Stats;
}

export default function DashboardStats({
  stats,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <StatCard
        icon={<FiUsers />}
        label="Total guests"
        value={stats.total}
      />

      <StatCard
        icon={<FiCheckCircle />}
        label="Attending"
        value={stats.attending}
        accent="text-sage"
      />

      <StatCard
        icon={<FiClock />}
        label="Pending"
        value={stats.pending}
        accent="text-muted"
      />

      <StatCard
        icon={<FiXCircle />}
        label="Declined"
        value={stats.declined}
        accent="text-red-500"
      />
    </div>
  );
}