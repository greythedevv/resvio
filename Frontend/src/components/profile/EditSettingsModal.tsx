import { useState, type FormEvent } from "react";
import Modal, { ModalFooter } from "../ui/Modal";
import { TextField } from "../ui/Field";
import Toggle from "../ui/Toggle";
import { useUpdateWedding } from "../../hooks/useUpdateWedding";
import { dateInputToIso, isoToDateInput } from "../../utils/dateInput";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding;
  onClose: () => void;
  onSaved: () => Promise<void>;
}

export default function EditSettingsModal({ wedding, onClose, onSaved }: Props) {
  const { save, saving, error } = useUpdateWedding(wedding._id, onSaved);

  const [form, setForm] = useState({
    rsvpDeadline: isoToDateInput(wedding.rsvpDeadline),
    allowPlusOnes: wedding.settings?.allowPlusOnes ?? true,
    showGuestCountPublicly: wedding.settings?.showGuestCountPublicly ?? false,
  });

  const weddingDay = isoToDateInput(wedding.weddingDate);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const saved = await save({
      rsvpDeadline: dateInputToIso(form.rsvpDeadline),
      settings: {
        allowPlusOnes: form.allowPlusOnes,
        showGuestCountPublicly: form.showGuestCountPublicly,
      },
    });

    if (saved) onClose();
  };

  return (
    <Modal
      title="Wedding settings"
      description="Control how RSVPs and your public page behave."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="RSVP deadline"
          type="date"
          value={form.rsvpDeadline}
          max={weddingDay || undefined}
          onChange={(v) => setForm((prev) => ({ ...prev, rsvpDeadline: v }))}
          hint="Leave empty for no deadline."
        />

        <div className="mt-4 divide-y divide-border border-y border-border">
          <Toggle
            label="Allow plus-ones"
            description="Let guests include an additional person."
            checked={form.allowPlusOnes}
            onChange={(v) => setForm((prev) => ({ ...prev, allowPlusOnes: v }))}
          />
          <Toggle
            label="Show guest count publicly"
            description="Display confirmed guests on your public page."
            checked={form.showGuestCountPublicly}
            onChange={(v) => setForm((prev) => ({ ...prev, showGuestCountPublicly: v }))}
          />
        </div>

        <ModalFooter saving={saving} error={error} onCancel={onClose} />
      </form>
    </Modal>
  );
}