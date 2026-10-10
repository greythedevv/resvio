import { useState, type FormEvent } from "react";
import Modal, { ModalFooter } from "../ui/Modal";
import { TextAreaField } from "../ui/Field";
import { useUpdateWedding } from "../../hooks/useUpdateWedding";
import { WEDDING_LIMITS } from "../../constants/wedding";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding;
  onClose: () => void;
  onSaved: () => Promise<void>;
}

export default function EditStoryModal({ wedding, onClose, onSaved }: Props) {
  const { save, saving, error } = useUpdateWedding(wedding._id, onSaved);
  const [story, setStory] = useState(wedding.story ?? "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const saved = await save({ story });
    if (saved) onClose();
  };

  return (
    <Modal
      title="Our story"
      description="Shown on your public wedding page."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <TextAreaField
          label="How it all began"
          value={story}
          onChange={setStory}
          rows={10}
          maxLength={WEDDING_LIMITS.story}
          placeholder="Tell your guests how you met..."
        />

        <ModalFooter saving={saving} error={error} onCancel={onClose} />
      </form>
    </Modal>
  );
}