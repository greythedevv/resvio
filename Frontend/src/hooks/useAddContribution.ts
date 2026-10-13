import { useCallback, useState } from "react";
import { addContribution } from "../services/giftFundService";
import type { AddContributionInput } from "../types/giftFund";

export function useAddContribution(
  weddingId: string | undefined,
  onSaved?: () => Promise<void> | void
) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Resolves true on success so the modal knows it can close
  const add = useCallback(
    async (input: AddContributionInput): Promise<boolean> => {
      if (!weddingId) return false;

      setSaving(true);
      setError("");

      try {
        await addContribution(weddingId, input);
        await onSaved?.();
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        return false;
      } finally {
        setSaving(false);
      }
    },
    [weddingId, onSaved]
  );

  return { add, saving, error };
}