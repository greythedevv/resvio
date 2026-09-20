
import type { Guest } from '../../types/dashboard';

interface Props {
  guests: Guest[];
}

const statusPill: Record<Guest['rsvpStatus'], string> = {
  attending: 'bg-sage-soft text-sage',
  declined: 'bg-red-soft text-red-text',
  pending: 'bg-border text-muted',
};

export default function RecentGuests({ guests }: Props) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Recent Guests</h2>
        <a href="/dashboard/guests" className="text-terracotta text-xs hover:underline">
          View all →
        </a>
      </div>

      {guests.length === 0 ? (
        <p className="text-muted text-xs text-center py-8">No RSVPs yet.</p>
      ) : (
        <div className="space-y-4">
          {guests.map((g) => (
            <div key={g._id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-xs font-medium shrink-0">
                {g.name[0]?.toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-ink text-sm font-medium">{g.name}</p>
                {g.message && <p className="text-muted text-xs mt-0.5 line-clamp-1">"{g.message}"</p>}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize shrink-0 ${statusPill[g.rsvpStatus]}`}>
                {g.rsvpStatus}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}