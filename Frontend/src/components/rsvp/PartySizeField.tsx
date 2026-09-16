import { MAX_PARTY_SIZE } from '../../constants/rsvp';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function PartySizeField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink mb-1.5">Party size (including you)</label>
      <input
        type="number"
        min={1}
        max={MAX_PARTY_SIZE}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 1)}
        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
      />
    </div>
  );
}