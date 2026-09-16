import { RSVP_MESSAGE_MAX_LENGTH } from '../../constants/rsvp';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RsvpMessageField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink mb-1.5">Message (optional)</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        maxLength={RSVP_MESSAGE_MAX_LENGTH}
        placeholder="A note for the couple..."
        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
      />
    </div>
  );
}