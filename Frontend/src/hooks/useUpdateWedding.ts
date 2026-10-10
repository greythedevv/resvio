import { useCallback, useState } from "react";
import { updateWedding } from "../services/wedding";
import type { UpdateWeddingInput } from "../types/wedding";

export function useUpdateWedding(
  weddingId: string | undefined,
  onSaved?: () => Promise<void> | void
) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Resolves true on success so callers can close their modal
  const save = useCallback(
    async (input: UpdateWeddingInput): Promise<boolean> => {
      if (!weddingId) return false;

      setSaving(true);
      setError("");

      try {
        await updateWedding(weddingId, input);
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

  return { save, saving, error };
}