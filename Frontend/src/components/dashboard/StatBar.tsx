
import { LuUsers, LuCircleCheck, LuClock, LuCircleX } from 'react-icons/lu';

interface Stat {
  label: string;
  value: number;
  icon: React.ReactNode;
  valueClass?: string;
}

interface Props {
  total: number;
  attending: number;
  pending: number;
  declined: number;
}

export default function StatBar({ total, attending, pending, declined }: Props) {
  const stats: Stat[] = [
    { label: 'Total guests', value: total, icon: <LuUsers size={15} strokeWidth={1.75} /> },
    {
      label: 'Attending',
      value: attending,
      icon: <LuCircleCheck size={15} strokeWidth={1.75} />,
      valueClass: 'text-sage',
    },
    { label: 'Pending', value: pending, icon: <LuClock size={15} strokeWidth={1.75} /> },
    {
      label: 'Declined',
      value: declined,
      icon: <LuCircleX size={15} strokeWidth={1.75} />,
      valueClass: 'text-red-text',
    },
  ];

  return (
    <div className="mb-9">
      <h2 className="text-sm font-medium text-ink mb-4">RSVP overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-t border-b border-border">
        {stats.map((s) => (
          <div key={s.label} className="px-1 py-4 md:px-6">
            <div className="flex items-center gap-1.5 text-muted mb-2">
              {s.icon}
              <span className="text-xs">{s.label}</span>
            </div>
            <p className={`text-3xl font-medium tabular-nums ${s.valueClass ?? 'text-ink'}`}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}