import { LuCalendarDays, LuHeart, LuMapPin, LuPencil } from "react-icons/lu";
import DetailCard from "./DetailCard";
import ScheduleCard from "./ScheduleCard";
import { formatDateTime } from "../../utils/formatDate";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding | null;
  onEditDetails: () => void;
  onEditSchedule: () => void;
}

export default function EventDetailsTab({ wedding, onEditDetails, onEditSchedule }: Props) {
  const partner1 = wedding?.partner1Name || "Partner One";
  const partner2 = wedding?.partner2Name || "Partner Two";

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-medium text-ink">Event Details</h2>
          <p className="text-[11px] text-muted mt-1">
            The basic information about your wedding.
          </p>
        </div>

        <button
          type="button"
          onClick={onEditDetails}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta hover:underline"
        >
          <LuPencil size={13} />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailCard icon={LuHeart} label="Couple" value={`${partner1} & ${partner2}`} />
        <DetailCard
          icon={LuCalendarDays}
          label="Date & Time"
          value={formatDateTime(wedding?.weddingDate)}
        />
        <DetailCard icon={LuMapPin} label="Venue" value={wedding?.venue?.name || "Not set"} />
        <DetailCard
          icon={LuMapPin}
          label="Location"
          value={
            [wedding?.venue?.address, wedding?.venue?.city].filter(Boolean).join(", ") ||
            "Not set"
          }
        />
      </div>

      <ScheduleCard schedule={wedding?.schedule} onEdit={onEditSchedule} />
    </div>
  );
}