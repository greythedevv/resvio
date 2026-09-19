
import { WEDDING_HIGHLIGHTS } from '../../constants/dashboardHighlights';
import type { Wedding } from '../../types/wedding';

interface Props {
  wedding: Wedding;
}

export default function EventHighlightsCard({ wedding }: Props) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="rounded-lg overflow-hidden mb-4 h-24 bg-terracotta-light flex flex-col items-center justify-center text-center px-4">
        <p className="text-ink text-sm font-medium">Your special day is almost here</p>
        <p className="text-muted text-[11px] mt-1">Everything is coming together for a beautiful celebration.</p>
      </div>

      <p className="text-ink text-sm font-medium mb-3">Wedding Highlights</p>
      <div className="space-y-3">
        {wedding.schedule && wedding.schedule.length > 0 ? (
          wedding.schedule.map((item, i) => {
            const Icon = WEDDING_HIGHLIGHTS[i % WEDDING_HIGHLIGHTS.length].icon;
            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
                  <Icon size={14} />
                </div>
                <div>
                  <p className="text-ink text-xs font-medium">{item.title}</p>
                  <p className="text-muted text-[11px]">
                    {new Date(item.time).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-muted text-xs">No schedule added yet.</p>
        )}
      </div>
    </div>
  );
}