
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import type { Guest } from '../../types/dashboard';

interface Props {
  guests: Guest[];
}

const statusPill: Record<Guest['rsvpStatus'], string> = {
  attending: 'bg-sage-soft text-sage',
  declined: 'bg-red-soft text-red-text',
  pending: 'bg-border text-muted',
};

export default function RecentRsvps({ guests }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-ink">Recent RSVPs</h2>
      </div>

      {guests.length === 0 ? (
        <div className="border-t border-border py-10 text-center">
          <p className="text-muted text-sm">No RSVPs yet</p>
          <p className="text-muted text-xs mt-1">Responses will show up here as guests reply.</p>
        </div>
      ) : (
        <div className="border-t border-border">
          <div className="grid grid-cols-[1fr_auto] gap-4 py-2.5 text-xs text-muted">
            <span>Guest</span>
            <span>Status</span>
          </div>
          {guests.map((g) => (
            <div
              key={g._id}
              className="grid grid-cols-[1fr_auto] gap-4 items-center py-3.5 border-t border-border"
            >
              <div>
                <p className="text-ink text-sm">{g.name}</p>
                {g.message && <p className="text-muted text-xs mt-0.5 line-clamp-1">{g.message}</p>}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusPill[g.rsvpStatus]}`}>
                {g.rsvpStatus}
              </span>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/dashboard/guests"
        className="inline-flex items-center gap-1 text-terracotta text-sm mt-4 hover:gap-1.5 transition-all"
      >
        View all guests <LuArrowRight size={14} />
      </Link>
    </div>
  );
}