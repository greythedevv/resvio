import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  label: string;
  value: string;
}

export default function DetailCard({ icon: Icon, label, value }: Props) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 text-muted mb-3">
        <Icon size={14} />
        <span className="text-[11px]">{label}</span>
      </div>

      <p className="text-sm font-medium text-ink">{value}</p>
    </div>
  );
}