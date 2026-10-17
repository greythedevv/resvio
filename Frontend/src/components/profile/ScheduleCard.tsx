import { LuClock3, LuPencil } from "react-icons/lu";
import { formatTime } from "../../utils/formatDate";
import type { ScheduleItem } from "../../types/wedding";

interface Props {
  schedule?: ScheduleItem[];
  onEdit: () => void;
}

export default function ScheduleCard({ schedule, onEdit }: Props) {
  const hasEvents = Boolean(schedule && schedule.length > 0);

  return (
    <div className="bg-white border border-border rounded-xl mt-6 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <h3 className="text-sm font-medium text-ink">Wedding Schedule</h3>
          <p className="text-[11px] text-muted mt-1">
            Events and timings for your special day.
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1 text-[11px] text-terracotta font-medium hover:underline"
        >
          <LuPencil size={12} />
          Edit
        </button>
      </div>

      {hasEvents ? (
        <div className="divide-y divide-border">
          {schedule!.map((event) => (
            <div
              key={`${event.title}-${event.time}`}
              className="flex items-center gap-3 px-5 py-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
                <LuClock3 size={14} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-ink">{event.title}</p>
                <p className="text-[11px] text-muted mt-0.5">
                  {formatTime(event.time)}
                  {event.location && ` · ${event.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-5 py-10 text-center">
          <div className="w-9 h-9 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-2">
            <LuClock3 size={15} className="text-terracotta" />
          </div>
          <p className="text-xs font-medium text-ink">No schedule added</p>
          <p className="text-[10px] text-muted mt-1">
            Add your ceremony and other wedding events.
          </p>
        </div>
      )}
    </div>
  );
}