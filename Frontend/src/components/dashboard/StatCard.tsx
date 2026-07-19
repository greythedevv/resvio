import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number;
  accent?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  accent = "text-ink",
}: StatCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-4">
      <div className={`mb-2 ${accent}`}>
        {icon}
      </div>

      <p className="text-2xl font-medium text-ink">
        {value}
      </p>

      <p className="text-muted text-xs mt-0.5">
        {label}
      </p>
    </div>
  );
}