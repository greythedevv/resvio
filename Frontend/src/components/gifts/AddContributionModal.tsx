import { useState, type FormEvent } from "react";
import Modal, { ModalFooter } from "../ui/Modal";
import { TextAreaField, TextField } from "../ui/Field";
import { useAddContribution } from "../../hooks/useAddContribution";
import { GIFT_FUND_LIMITS, MANUAL_METHOD_OPTIONS } from "../../constants/giftFund";
import type { ManualContributionMethod } from "../../types/giftFund";

interface Props {
  weddingId: string;
  onClose: () => void;
  onSaved: () => Promise<void>;
}

export default function AddContributionModal({ weddingId, onClose, onSaved }: Props) {
  const { add, saving, error } = useAddContribution(weddingId, onSaved);
  const [localError, setLocalError] = useState("");
  const [method, setMethod] = useState<ManualContributionMethod>("bank_transfer");
  const [form, setForm] = useState({ name: "", amount: "", email: "", message: "" });

  const setField = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const amount = Number(form.amount);

    if (!form.name.trim()) {
      setLocalError("Enter the giver's name");
      return;
    }

    if (!Number.isInteger(amount) || amount < 1 || amount > GIFT_FUND_LIMITS.maxAmount) {
      setLocalError("Enter the amount as a whole number of naira");
      return;
    }

    setLocalError("");

    const saved = await add({
      name: form.name.trim(),
      amount,
      method,
      email: form.email.trim() || undefined,
      message: form.message.trim() || undefined,
    });

    if (saved) onClose();
  };

  return (
    <Modal
      title="Record a gift"
      description="Log a gift you've received by transfer or in cash."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Given by"
          value={form.name}
          onChange={setField("name")}
          maxLength={GIFT_FUND_LIMITS.name}
          placeholder="Tunde Bankole"
          required
        />

        <TextField
          label="Amount (₦)"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          value={form.amount}
          onChange={setField("amount")}
          placeholder="50000"
          required
        />

        <div>
          <p className="text-xs font-medium text-ink mb-1.5">How was it given?</p>
          <div className="grid grid-cols-2 gap-2">
            {MANUAL_METHOD_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={method === value}
                onClick={() => setMethod(value)}
                className={`px-3 py-2.5 text-xs rounded-lg border transition-colors ${
                  method === value
                    ? "border-terracotta bg-terracotta-light text-terracotta font-medium"
                    : "border-border text-ink hover:border-terracotta/40"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <TextField
          label="Email (optional)"
          type="email"
          value={form.email}
          onChange={setField("email")}
        />

        <TextAreaField
          label="Message (optional)"
          value={form.message}
          onChange={setField("message")}
          rows={3}
          maxLength={GIFT_FUND_LIMITS.message}
          placeholder="A note that came with the gift..."
        />

        <ModalFooter
          saving={saving}
          error={localError || error}
          submitLabel="Record gift"
          onCancel={onClose}
        />
      </form>
    </Modal>
  );
}