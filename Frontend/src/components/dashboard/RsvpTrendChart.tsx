
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

interface Props {
  data: { date: string; attending: number; pending: number; declined: number }[];
}

export default function RsvpTrendChart({ data }: Props) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">RSVP Trend</h2>
        <select className="text-xs text-muted border border-border rounded-lg px-2 py-1 bg-white">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ left: -20 }}>
          <CartesianGrid stroke="#E8D9CD" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#7A756D' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#7A756D' }} axisLine={false} tickLine={false} />
          <Line type="monotone" dataKey="attending" stroke="#9CAF88" strokeWidth={2} dot={{ r: 3 }} name="Attending" />
          <Line type="monotone" dataKey="pending" stroke="#D6A94A" strokeWidth={2} dot={{ r: 3 }} name="Pending" />
          <Line type="monotone" dataKey="declined" stroke="#B14A4A" strokeWidth={2} dot={{ r: 3 }} name="Declined" />
          <Legend
            iconType="circle"
            wrapperStyle={{ fontSize: 11, color: '#5A5650' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}