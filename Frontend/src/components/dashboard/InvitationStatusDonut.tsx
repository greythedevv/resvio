
import { PieChart, Pie, Cell } from 'recharts';

interface Props {
  opened: number;
  notOpened: number;
  bounced: number;
}

export default function InvitationStatusDonut({ opened, notOpened, bounced }: Props) {
  const total = opened + notOpened + bounced;
  const data = [
    { label: 'Opened', value: opened || 1, color: '#1F2421' },
    { label: 'Not Opened', value: notOpened, color: '#E8D9CD' },
    { label: 'Bounced', value: bounced, color: '#B14A4A' },
  ];
  const pct = (n: number) => (total > 0 ? ((n / total) * 100).toFixed(1) : '0.0');

  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Invitation Status</h2>
        <a href="#" className="text-terracotta text-xs hover:underline">
          View All →
        </a>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28">
          <PieChart width={112} height={112}>
            <Pie data={data} dataKey="value" innerRadius={38} outerRadius={54} stroke="none">
              {data.map((d) => (
                <Cell key={d.label} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-medium text-ink">{total}</p>
            <p className="text-muted text-[9px]">Invitations Sent</p>
          </div>
        </div>

        <div className="w-full mt-4 space-y-2">
          {data.map((d) => (
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