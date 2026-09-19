
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { LuArrowUp } from 'react-icons/lu';

interface Props {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  value: number;
  subtext: string;
  trendColor: string;
  sparklineData: number[];
}

export default function StatCardWithTrend({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  subtext,
  trendColor,
  sparklineData,
}: Props) {
  const chartData = sparklineData.map((v, i) => ({ i, v }));

  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${iconBg}`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <p className="text-muted text-xs mb-1">{label}</p>
      <p className="text-2xl font-medium text-ink tabular-nums mb-1">{value}</p>
      <p className="text-xs flex items-center gap-1" style={{ color: trendColor }}>
        <LuArrowUp size={11} /> {subtext}
      </p>
      <div className="h-8 mt-2 -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="v" stroke={trendColor} strokeWidth={1.75} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}