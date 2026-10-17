import { LuCalendarDays, LuPencil, LuSettings2, LuUsers } from "react-icons/lu";
import SettingRow from "./SettingRow";
import { formatShortDate } from "../../utils/formatDate";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding | null;
  onEdit: () => void;
  onManageDetails: () => void;
}

export default function SettingsTab({ wedding, onEdit, onManageDetails }: Props) {
  const enabled = (value?: boolean) => (value ? "Enabled" : "Disabled");

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-medium text-ink">Wedding Settings</h2>
          <p className="text-[11px] text-muted mt-1">
            Control how your RSVP and wedding information works.
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta hover:underline"
        >
          <LuPencil size={13} />
          Edit
        </button>
      </div>

      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <SettingRow
          icon={LuCalendarDays}
          label="RSVP Deadline"
          description="The date guests should submit their RSVP by."
          value={formatShortDate(wedding?.rsvpDeadline, "No deadline")}
        />
        <SettingRow
          icon={LuUsers}
          label="Allow Plus-Ones"
          description="Allow guests to include an additional person."
          value={enabled(wedding?.settings?.allowPlusOnes)}
        />
        <SettingRow
          icon={LuUsers}
          label="Show Guest Count Publicly"
          description="Display the number of confirmed guests on your public page."
          value={enabled(wedding?.settings?.showGuestCountPublicly)}
        />
        <SettingRow
          icon={LuSettings2}
          label="Wedding Details"
          description="Manage the information displayed across your wedding experience."
          value="Manage"
          onClick={onManageDetails}
        />
      </div>
    </div>
  );
}