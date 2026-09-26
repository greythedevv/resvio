import { MAX_PARTY_SIZE } from "../../constants/rsvp";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function PartySizeField({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        How many are attending?
      </label>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={1}
          max={MAX_PARTY_SIZE}
          value={value}
          onChange={(e) =>
            onChange(parseInt(e.target.value, 10) || 1)
          }
          className="w-24 px-4 py-3.5 text-sm text-center bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-ink focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition"
        />

        <p className="text-muted text-xs">
          Including you
        </p>
      </div>
    </div>
  );
}