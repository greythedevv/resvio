import { FiCheck, FiX } from 'react-icons/fi';

interface Props {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export default function AttendingToggle({ value, onChange }: Props) {
  return (
    <div>
      <p className="text-xs font-medium text-ink mb-2">Will you be attending?</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`flex items-center justify-center gap-1.5 border rounded-lg py-2.5 text-sm transition-colors ${
            value === true
              ? 'border-terracotta bg-terracotta-light text-terracotta'
              : 'border-border text-ink hover:border-terracotta'
          }`}
        >
          <FiCheck size={14} /> Accept
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`flex items-center justify-center gap-1.5 border rounded-lg py-2.5 text-sm transition-colors ${
            value === false
              ? 'border-terracotta bg-terracotta-light text-terracotta'
              : 'border-border text-ink hover:border-terracotta'
          }`}
        >
          <FiX size={14} /> Decline
        </button>
      </div>
    </div>
  );
}