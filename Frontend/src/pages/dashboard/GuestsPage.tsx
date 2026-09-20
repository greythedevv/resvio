import  { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { LuSearch, LuUserPlus, LuUsers, LuCircleCheck, LuClock, LuCircleX } from 'react-icons/lu';
import { getWeddingStats, getRecentGuests } from '../../services/dashboard';
import type { Wedding } from '../../types/wedding';
import type { Stats, Guest } from '../../types/dashboard';

type FilterTab = 'all' | 'attending' | 'pending' | 'declined';

const statusPill: Record<Guest['rsvpStatus'], string> = {
  attending: 'bg-sage-soft text-sage',
  declined: 'bg-red-soft text-red-text',
  pending: 'bg-border text-muted',
};

export default function GuestsPage() {
  const { wedding } = useOutletContext<{ wedding: Wedding | null }>();
  const [guests, setGuests] = useState<Guest[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<FilterTab>('all');

  useEffect(() => {
    if (!wedding) return;
    getRecentGuests(wedding._id).then(setGuests);
    getWeddingStats(wedding._id).then(setStats);
  }, [wedding]);

  const filtered = useMemo(() => {
    return guests.filter((g: Guest) => {
      const matchesTab = tab === 'all' || g.rsvpStatus === tab;
      const matchesSearch =
        !search ||
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.email?.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [guests, tab, search]);

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: stats?.total ?? 0 },
    { key: 'attending', label: 'Attending', count: stats?.attending ?? 0 },
    { key: 'pending', label: 'Pending', count: stats?.pending ?? 0 },
    { key: 'declined', label: 'Declined', count: stats?.declined ?? 0 },
  ];

  return (
    <div>
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-medium text-ink tracking-tight">Our Guests</h1>
          <p className="text-body text-sm mt-1">The people we're grateful to have with us.</p>
        </div>
        <button className="flex items-center gap-1.5 bg-ink text-ivory text-sm px-4 py-2 rounded-lg hover:bg-ink/90 transition-colors">
          <LuUserPlus size={15} /> Add Guest
        </button>
      </div>

      <div className="relative mb-6 max-w-md">
        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search guest by name, email, or party..."
          className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <LuUsers size={14} />, label: 'Total Guests', value: stats?.total ?? 0, iconBg: 'bg-terracotta-light', iconColor: 'text-terracotta' },
          { icon: <LuCircleCheck size={14} />, label: 'Attending', value: stats?.attending ?? 0, iconBg: 'bg-sage-soft', iconColor: 'text-sage' },
          { icon: <LuClock size={14} />, label: 'Pending', value: stats?.pending ?? 0, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
          { icon: <LuCircleX size={14} />, label: 'Declined', value: stats?.declined ?? 0, iconBg: 'bg-red-soft', iconColor: 'text-red-text' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-border rounded-xl p-4">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-2 ${s.iconBg}`}>
              <span className={s.iconColor}>{s.icon}</span>
            </div>
            <p className="text-2xl font-medium text-ink tabular-nums">{s.value}</p>
            <p className="text-muted text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-1 px-4 pt-3 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3 py-2 text-xs rounded-t-lg transition-colors ${
                tab === t.key ? 'text-terracotta border-b-2 border-terracotta font-medium' : 'text-muted hover:text-ink'
              }`}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted text-xs text-center py-10">No guests match this view.</p>
        ) : (
          <div>
            <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-4 px-4 py-2.5 text-xs text-muted border-b border-border">
              <span>Name</span>
              <span>Email</span>
              <span>RSVP Status</span>
              <span>Party Size</span>
            </div>
            {filtered.map((g) => (
              <div
                key={g._id}
                className="grid grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-4 items-center px-4 py-3.5 border-b border-border last:border-b-0 text-sm"
              >
                <span className="text-ink">{g.name}</span>
                <span className="text-muted">{g.email}</span>
                <span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusPill[g.rsvpStatus]}`}>
                    {g.rsvpStatus}
                  </span>
                </span>
                <span className="text-ink tabular-nums">{g.partySize ?? 1}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}