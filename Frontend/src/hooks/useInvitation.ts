import { useEffect, useState } from 'react';
import { getInvitationBySlug } from '../services/invitation.service';
import type { Invitation } from '../types/invitation';

export function useInvitation(slug: string | undefined) {
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError('');

    getInvitationBySlug(slug)
      .then((data) => {
        if (!cancelled) setInvitation(data);
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
  }, [slug]);

  return { invitation, loading, error };
}