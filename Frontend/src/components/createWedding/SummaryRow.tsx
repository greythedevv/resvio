interface SummaryRowProps {
  label: string;
  value: string;
}

export default function SummaryRow({
  label,
  value,
}: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-muted">
        {label}
      </span>

      <span className="font-medium text-ink">
        {value}
      </span>
    </div>
  );
}