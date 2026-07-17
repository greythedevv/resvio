import type { InputHTMLAttributes } from "react";

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

export default function InputField({
  label,
  icon,
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#1F2421] mb-1.5">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A756D]">
          {icon}
        </span>

        <input
          {...props}
          className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#E8D9CD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1694F] focus:border-transparent"
        />
      </div>
    </div>
  );
}