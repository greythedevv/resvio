import { RSVP_MESSAGE_MAX_LENGTH } from "../../constants/rsvp";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RsvpMessageField({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        A note for the couple
        <span className="text-muted font-normal ml-1">
          (optional)
        </span>
      </label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        maxLength={RSVP_MESSAGE_MAX_LENGTH}
        placeholder="Leave a little message for the couple..."
        className="w-full px-4 py-3.5 text-sm bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-ink placeholder:text-muted/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition resize-none"
      />

      <p className="text-right text-[11px] text-muted mt-1">
        {value.length}/{RSVP_MESSAGE_MAX_LENGTH}
      </p>
    </div>
  );
}