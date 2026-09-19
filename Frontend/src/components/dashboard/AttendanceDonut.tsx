
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import type { Stats } from '../../types/dashboard';

interface Props {
  stats: Stats | null;
}

export default function AttendanceDonut({ stats }: Props) {
  const total = stats?.total ?? 0;
  const attending = stats?.attending ?? 0;
  const pending = stats?.pending ?? 0;
  const declined = stats?.declined ?? 0;

  const data = [
    { name: 'Attending', value: attending || 1, color: '#9CAF88' },
    { name: 'Pending', value: pending, color: '#D6A94A' },
    { name: 'Declined', value: declined, color: '#B14A4A' },
  ];

  const pct = (n: number) => (total > 0 ? ((n / total) * 100).toFixed(1) : '0.0');

  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Guest Attendance Overview</h2>
        <Link to="/dashboard/guests" className="text-terracotta text-xs hover:underline">
          View Details →
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <PieChart width={128} height={128}>
            <Pie data={data} dataKey="value" innerRadius={44} outerRadius={62} stroke="none">
              {data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-medium text-ink">{total}</p>
            <p className="text-muted text-[10px]">Total Guests</p>
          </div>
        </div>

        <div className="space-y-2.5 flex-1">
          {[
            { label: 'Attending', value: attending, color: '#9CAF88' },
            { label: 'Pending', value: pending, color: '#D6A94A' },
            { label: 'Declined', value: declined, color: '#B14A4A' },
          ].map((d) => (
            <div key={d.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-body">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                {d.label}
              </span>
              <span className="text-ink font-medium">{d.value}</span>
              <span className="text-muted">{pct(d.value)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}