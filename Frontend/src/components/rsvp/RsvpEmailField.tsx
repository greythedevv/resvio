import { FiMail } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RsvpEmailField({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        Email address
      </label>

      <div className="relative">
        <FiMail
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          size={16}
        />

        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="you@example.com"
          className="w-full pl-11 pr-4 py-3.5 text-sm bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-ink placeholder:text-muted/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition"
        />
      </div>

      <p className="text-muted text-xs mt-2">
        We'll only use this if we need to contact you about the wedding.
      </p>
    </div>
  );
}