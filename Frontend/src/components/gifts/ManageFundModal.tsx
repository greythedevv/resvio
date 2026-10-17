import { useState, type FormEvent } from "react";
import Modal, { ModalFooter } from "../ui/Modal";
import { TextField } from "../ui/Field";
import { useUpdateWedding } from "../../hooks/useUpdateWedding";
import { GIFT_FUND_LIMITS } from "../../constants/giftFund";
import { formatNaira } from "../../utils/formatCurrency";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding;
  currentGoal: number;
  onClose: () => void;
  onSaved: () => Promise<void>;
}

export default function ManageFundModal({ wedding, currentGoal, onClose, onSaved }: Props) {
  const { save, saving, error } = useUpdateWedding(wedding._id, onSaved);
  const [goal, setGoal] = useState(currentGoal > 0 ? String(currentGoal) : "");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const target = goal.trim() === "" ? 0 : Number(goal);

    if (!Number.isInteger(target) || target < 0 || target > GIFT_FUND_LIMITS.maxGoal) {
      setLocalError(
        `Enter a whole-number goal up to ${formatNaira(GIFT_FUND_LIMITS.maxGoal)}`
      );
      return;
    }

    setLocalError("");

    const saved = await save({ giftFundTarget: target });
    if (saved) onClose();
  };

  return (
    <Modal
      title="Manage gift fund"
      description="Set the amount you're hoping to raise."
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Fund goal (₦)"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={goal}
          onChange={setGoal}
          placeholder="1000000"
          hint="Leave empty to remove the goal."
        />

        <ModalFooter saving={saving} error={localError || error} onCancel={onClose} />
      </form>
    </Modal>
  );
}