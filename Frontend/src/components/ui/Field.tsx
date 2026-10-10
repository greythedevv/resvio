import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

const controlClass =
  "w-full px-3 py-2.5 text-sm text-ink bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "className"> {
  label: string;
  hint?: string;
  onChange: (value: string) => void;
}

export function TextField({ label, hint, onChange, ...inputProps }: TextFieldProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-ink mb-1.5">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        onChange={(e) => onChange(e.target.value)}
        className={controlClass}
      />
      {hint && <p className="text-[11px] text-muted mt-1">{hint}</p>}
    </div>
  );
}

interface TextAreaFieldProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "value" | "className"
  > {
  label: string;
  value: string;
  hint?: string;
  onChange: (value: string) => void;
}

export function TextAreaField({
  label,
  hint,
  value,
  maxLength,
  onChange,
  ...textareaProps
}: TextAreaFieldProps) {
  const id = useId();

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={id} className="text-xs font-medium text-ink">
          {label}
        </label>
        {maxLength && (
          <span className="text-[11px] text-muted tabular-nums">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <textarea
        id={id}
        {...textareaProps}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className={`${controlClass} resize-none`}
      />
      {hint && <p className="text-[11px] text-muted mt-1">{hint}</p>}
    </div>
  );
}