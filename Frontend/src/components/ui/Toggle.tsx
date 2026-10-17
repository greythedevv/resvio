interface ToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Toggle({ label, description, checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="w-full flex items-center justify-between gap-4 py-3 text-left"
    >
      <span>
        <span className="block text-xs font-medium text-ink">{label}</span>
        {description && (
          <span className="block text-[11px] text-muted mt-0.5">{description}</span>
        )}
      </span>

      <span
        className={`relative w-9 h-5 rounded-full shrink-0 transition-colors ${
          checked ? "bg-terracotta" : "bg-border"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </span>
    </button>
  );
}