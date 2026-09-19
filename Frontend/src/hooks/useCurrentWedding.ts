import { useEffect, useState, useCallback } from 'react';
import { getCurrentWedding } from '../services/dashboard';
import type { Wedding } from '../types/wedding';

export function useCurrentWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(async () => {
    try {
      const w = await getCurrentWedding();
      setWedding(w as Wedding);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch();
  }, [refetch]);

  return { wedding, loading, refetch };
}