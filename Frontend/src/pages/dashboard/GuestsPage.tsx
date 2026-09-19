import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getRecentGuests } from '../../services/dashboard';
import type { Wedding } from '../../types/wedding';
import type { Guest } from '../../types/dashboard';

const statusPill: Record<Guest['rsvpStatus'], string> = {
  attending: 'bg-sage-soft text-sage',
  declined: 'bg-red-soft text-red-text',
  pending: 'bg-border text-muted',
};

export default function GuestsPage() {
  const { wedding } = useOutletContext<{ wedding: Wedding | null }>();
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    if (!wedding) return;
    getRecentGuests(wedding._id).then(setGuests);
  }, [wedding]);

  return (
    <div>
      <h1 className="text-3xl font-medium text-ink tracking-tight mb-8">Guests</h1>

      {guests.length === 0 ? (
        <div className="border-t border-border py-14 text-center">
          <p className="text-muted text-sm">No guests yet</p>
          <p className="text-muted text-xs mt-1">Guests appear here as they RSVP to your invitation.</p>
        </div>
      ) : (
        <div className="border-t border-border">
          <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr_2fr] gap-4 py-2.5 text-xs text-muted">
            <span>Name</span>
            <span>Email</span>
            <span>Party size</span>
            <span>Status</span>
            <span>Message</span>
          </div>
          {guests.map((g) => (
            <div
              key={g._id}
              className="grid grid-cols-[1.5fr_2fr_1fr_1fr_2fr] gap-4 items-center py-3.5 border-t border-border text-sm"
            >
              <span className="text-ink">{g.name}</span>
              <span className="text-muted">{g.email}</span>
              <span className="text-ink tabular-nums">{g.partySize ?? 1}</span>
              <span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusPill[g.rsvpStatus]}`}>
                  {g.rsvpStatus}
                </span>
              </span>
              <span className="text-muted text-xs truncate">{g.message || '—'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}