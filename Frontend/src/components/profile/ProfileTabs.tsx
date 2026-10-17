import { PROFILE_TABS, type ProfileTab } from "../../constants/profile";

interface Props {
  active: ProfileTab;
  onChange: (tab: ProfileTab) => void;
}

export default function ProfileTabs({ active, onChange }: Props) {
  return (
    <div className="border-b border-border mb-6">
      <div className="flex items-center gap-1 overflow-x-auto">
        {PROFILE_TABS.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`relative px-3 py-3 text-xs whitespace-nowrap transition-colors ${
                isActive ? "text-terracotta font-medium" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}

              {isActive && (
                <span className="absolute left-2 right-2 -bottom-px h-0.5 bg-terracotta rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}