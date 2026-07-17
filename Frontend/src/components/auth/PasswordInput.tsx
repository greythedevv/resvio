import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

interface PasswordInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  value,
  name,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-xs font-medium text-[#1F2421] mb-1.5">
        Password
      </label>

      <div className="relative">
        <FiLock
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A756D]"
          size={15}
        />

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder="••••••••"
          className="w-full pl-9 pr-9 py-2.5 text-sm border border-[#E8D9CD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1694F] focus:border-transparent"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A756D]"
        >
          {showPassword ? (
            <FiEyeOff size={15} />
          ) : (
            <FiEye size={15} />
          )}
        </button>
      </div>
    </div>
  );
}