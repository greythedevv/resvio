import { FiUser } from 'react-icons/fi';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RsvpNameField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink mb-1.5">Your name</label>
      <div className="relative">
        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tolu Bankole"
          className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
        />
      </div>
    </div>
  );
}