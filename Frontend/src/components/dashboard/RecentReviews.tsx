
import { LuStar } from 'react-icons/lu';
import type { Guest } from '../../types/dashboard';

interface Props {
  guests: Guest[];
}

const statusColor: Record<Guest['rsvpStatus'], string> = {
  attending: 'text-sage',
  declined: 'text-red-text',
  pending: 'text-muted',
};

export default function RecentReviews({ guests }: Props) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Recent Reviews</h2>
        <a href="#" className="text-terracotta text-xs hover:underline">
          View All →
        </a>
      </div>

      {guests.length === 0 ? (
        <p className="text-muted text-xs text-center py-8">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {guests.map((g) => (
            <div key={g._id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-xs font-medium shrink-0">
                {g.name[0]?.toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-ink text-sm font-medium">{g.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LuStar key={i} size={11} className="text-terracotta fill-terracotta" />
                    ))}
                  </div>
                </div>
                <p className={`text-xs capitalize ${statusColor[g.rsvpStatus]}`}>{g.rsvpStatus}</p>
                {g.message && <p className="text-body text-xs mt-1 line-clamp-2">"{g.message}"</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}