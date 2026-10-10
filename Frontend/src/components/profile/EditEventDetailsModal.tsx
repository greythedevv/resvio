import { useState, type FormEvent } from "react";
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

export default function EditEventDetailsModal({ wedding, onClose, onSaved }: Props) {
  const { save, saving, error } = useUpdateWedding(wedding._id, onSaved);

  const [form, setForm] = useState({
    partner1Name: wedding.partner1Name,
    partner2Name: wedding.partner2Name,
    weddingDate: isoToDateTimeLocal(wedding.weddingDate),
    venueName: wedding.venue?.name ?? "",
    venueAddress: wedding.venue?.address ?? "",
    venueCity: wedding.venue?.city ?? "",
  });

  const setField = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const saved = await save({
      partner1Name: form.partner1Name,
      partner2Name: form.partner2Name,
      weddingDate: dateTimeLocalToIso(form.weddingDate),
      venue: {
        name: form.venueName,
        address: form.venueAddress,
        city: form.venueCity,
      },
    });

    if (saved) onClose();
  };

  return (
    <Modal
      title="Edit event details"
      description="Names, date, and venue shown on your invitation."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="Partner 1"
            value={form.partner1Name}
            onChange={setField("partner1Name")}
            maxLength={WEDDING_LIMITS.name}
            required
          />
          <TextField
            label="Partner 2"
            value={form.partner2Name}
            onChange={setField("partner2Name")}
            maxLength={WEDDING_LIMITS.name}
            required
          />
        </div>

        <TextField
          label="Date & time"
          type="datetime-local"
          value={form.weddingDate}
          onChange={setField("weddingDate")}
          hint="Also drives the countdown on your dashboard."
        />

        <TextField
          label="Venue"
          value={form.venueName}
          onChange={setField("venueName")}
          maxLength={WEDDING_LIMITS.venueName}
          placeholder="Eko Hotel & Suites"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="Address"
            value={form.venueAddress}
            onChange={setField("venueAddress")}
            maxLength={WEDDING_LIMITS.venueAddress}
          />
          <TextField
            label="City"
            value={form.venueCity}
            onChange={setField("venueCity")}
            maxLength={WEDDING_LIMITS.venueCity}
          />
        </div>

        <ModalFooter saving={saving} error={error} onCancel={onClose} />
      </form>
    </Modal>
  );
}