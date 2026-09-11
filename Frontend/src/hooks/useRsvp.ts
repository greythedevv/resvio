import { useEffect, useState } from 'react';
import { getRsvpByToken } from '../services/rsvpService';
import type { RsvpGuest } from '../types/rsvp';

export function useRsvp(token: string | undefined) {
  const [guest, setGuest] = useState<RsvpGuest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    let cancelled = false;
    setLoading(true);
    setError('');

    getRsvpByToken(token)
      .then((data) => {
        if (!cancelled) setGuest(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  return { guest, loading, error, setGuest };
}