import { FiUser } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RsvpNameField({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        Your name
      </label>

      <div className="relative">
        <FiUser
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          size={16}
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Your full name"
          className="w-full pl-11 pr-4 py-3.5 text-sm bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-ink placeholder:text-muted/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition"
        />
      </div>
    </div>
  );
}