import { useCallback, useEffect, useState } from "react";
import { deleteContribution, getGiftFundSummary } from "../services/giftFundService";
import { EMPTY_SUMMARY } from "../constants/giftFund";
import type { GiftFundSummary } from "../types/giftFund";

export function useGiftFund(weddingId: string | undefined) {
  const [summary, setSummary] = useState<GiftFundSummary>(EMPTY_SUMMARY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refetch = useCallback(async () => {
    if (!weddingId) {
      setLoading(false);
      return;
    }

    try {
      setSummary(await getGiftFundSummary(weddingId));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load gift fund");
    } finally {
      setLoading(false);
    }
  }, [weddingId]);

  const remove = useCallback(
    async (contributionId: string) => {
      if (!weddingId) return;

      try {
        await deleteContribution(weddingId, contributionId);
        await refetch();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Couldn't remove that gift");
      }
    },
    [weddingId, refetch]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch();
  }, [refetch]);

  return { summary, loading, error, refetch, remove };
}