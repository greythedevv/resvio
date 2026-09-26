import { FiCheck, FiX } from "react-icons/fi";

interface Props {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export default function AttendingToggle({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <p className="text-sm font-medium text-ink mb-3">
        Will you be joining us?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`flex items-center justify-center gap-2 border px-4 py-4 rounded-xl text-sm transition-all ${
            value === true
              ? "border-terracotta bg-terracotta/10 text-terracotta"
              : "border-[#D8CFC4] text-ink hover:border-terracotta/60 bg-[#FBF9F6]"
          }`}
        >
          <FiCheck size={16} />

          <span className="font-serif">
            Joyfully accepts
          </span>
        </button>

        <button
          type="button"
          onClick={() => onChange(false)}
          className={`flex items-center justify-center gap-2 border px-4 py-4 rounded-xl text-sm transition-all ${
            value === false
              ? "border-terracotta bg-terracotta/10 text-terracotta"
              : "border-[#D8CFC4] text-ink hover:border-terracotta/60 bg-[#FBF9F6]"
          }`}
        >
          <FiX size={16} />

          <span className="font-serif">
            Regretfully declines
          </span>
        </button>
      </div>
    </div>
  );
}