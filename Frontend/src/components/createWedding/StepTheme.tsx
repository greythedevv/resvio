import type { Theme } from "../../types/wedding";
import { THEMES } from "../../constants/wedding";
import { FiCheck } from "react-icons/fi";

interface ThemeStepProps {
  selectedTheme: Theme;
  onSelect: (theme: Theme) => void;
}

export default function ThemeStep({
  selectedTheme,
  onSelect,
}: ThemeStepProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {THEMES.map((theme) => (
        <button
          key={theme.key}
          type="button"
          onClick={() => onSelect(theme.key)}
          className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
            selectedTheme === theme.key
              ? "border-terracotta bg-terracotta-light"
              : "border-border hover:border-terracotta"
          }`}
        >
          <span
            className="h-6 w-6 rounded-full"
            style={{
              backgroundColor: theme.swatch,
            }}
          />

          <span className="text-sm text-ink">
            {theme.label}
          </span>

          {selectedTheme === theme.key && (
            <FiCheck
              className="ml-auto text-terracotta"
              size={15}
            />
          )}
        </button>
      ))}
    </div>
  );
}