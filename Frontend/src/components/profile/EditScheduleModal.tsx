import { useState, type FormEvent } from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import Modal, { ModalFooter } from "../ui/Modal";
import { TextField } from "../ui/Field";
import { useUpdateWedding } from "../../hooks/useUpdateWedding";
import { WEDDING_LIMITS } from "../../constants/wedding";
import { dateTimeLocalToIso, isoToDateTimeLocal } from "../../utils/dateInput";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding;
  onClose: () => void;
  onSaved: () => Promise<void>;
}

interface ScheduleDraft {
  id: number;
  title: string;
  time: string;
  location: string;
}

let nextDraftId = 0;

const createDraft = (partial: Partial<Omit<ScheduleDraft, "id">> = {}): ScheduleDraft => ({
  id: nextDraftId++,
  title: "",
  time: "",
  location: "",
  ...partial,
});

export default function EditScheduleModal({ wedding, onClose, onSaved }: Props) {
  const { save, saving, error } = useUpdateWedding(wedding._id, onSaved);
  const [localError, setLocalError] = useState("");

  const [drafts, setDrafts] = useState<ScheduleDraft[]>(() =>
    (wedding.schedule ?? []).map((item) =>
      createDraft({
        title: item.title,
        time: isoToDateTimeLocal(item.time),
        location: item.location ?? "",
      })
    )
  );

  const updateDraft = (id: number, field: keyof Omit<ScheduleDraft, "id">, value: string) =>
    setDrafts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));

  const removeDraft = (id: number) =>
    setDrafts((prev) => prev.filter((d) => d.id !== id));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Ignore rows the host added but never filled in
    const rows = drafts.filter((d) => d.title.trim() || d.time);

    if (rows.some((d) => !d.title.trim() || !d.time)) {
      setLocalError("Each event needs a title and a time");
      return;
    }

    setLocalError("");

    const schedule = [...rows]
      .sort((a, b) => a.time.localeCompare(b.time))
      .map((d) => ({
        title: d.title.trim(),
        time: dateTimeLocalToIso(d.time) ?? "",
        location: d.location.trim(),
      }));

    const saved = await save({ schedule });
    if (saved) onClose();
  };

  const atLimit = drafts.length >= WEDDING_LIMITS.scheduleItems;

  return (
    <Modal
      title="Edit wedding schedule"
      description="Add the events guests can look forward to."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          {drafts.length === 0 && (
            <p className="text-xs text-muted text-center py-6">
              No events yet. Add your ceremony to get started.
            </p>
          )}

          {drafts.map((draft) => (
            <div
              key={draft.id}
              className="border border-border rounded-xl p-3 space-y-3"
            >
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <TextField
                    label="Event"
                    value={draft.title}
                    onChange={(v) => updateDraft(draft.id, "title", v)}
                    maxLength={WEDDING_LIMITS.scheduleTitle}
                    placeholder="Ceremony"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => removeDraft(draft.id)}
                  aria-label="Remove event"
                  className="mb-1 p-2 text-muted hover:text-red-text transition-colors"
                >
                  <LuTrash2 size={15} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TextField
                  label="Time"
                  type="datetime-local"
                  value={draft.time}
                  onChange={(v) => updateDraft(draft.id, "time", v)}
                />
                <TextField
                  label="Location"
                  value={draft.location}
                  onChange={(v) => updateDraft(draft.id, "location", v)}
                  maxLength={WEDDING_LIMITS.scheduleLocation}
                  placeholder="Optional"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDrafts((prev) => [...prev, createDraft()])}
          disabled={atLimit}
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-terracotta hover:underline disabled:text-muted disabled:no-underline"
        >
          <LuPlus size={13} />
          {atLimit
            ? `Maximum of ${WEDDING_LIMITS.scheduleItems} events`
            : "Add event"}
        </button>

        <ModalFooter saving={saving} error={localError || error} onCancel={onClose} />
      </form>
    </Modal>
  );
}