import { LuChevronRight } from "react-icons/lu";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  label: string;
  description: string;
  value: string;
  onClick?: () => void;
}

const rowClass =
  "w-full flex items-center gap-3 px-5 py-4 text-left border-b border-border last:border-b-0";

export default function SettingRow({ icon: Icon, label, description, value, onClick }: Props) {
  const content = (
    <>
      <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
        <Icon size={14} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-ink">{label}</p>
        <p className="text-[10px] text-muted mt-0.5 leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] text-muted">{value}</span>
        {onClick && <LuChevronRight size={14} className="text-muted" />}
      </div>
    </>
  );

  if (!onClick) return <div className={rowClass}>{content}</div>;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${rowClass} hover:bg-ivory/60 transition-colors`}
    >
      {content}
    </button>
  );
}