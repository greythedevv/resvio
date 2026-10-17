import { useEffect, type ReactNode } from "react";
import { LuX } from "react-icons/lu";

interface ModalProps {
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, description, onClose, children }: ModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/40 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-border rounded-t-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-4 border-b border-border">
          <div>
            <h2 className="text-sm font-medium text-ink">{title}</h2>
            {description && (
              <p className="text-[11px] text-muted mt-1">{description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-muted hover:text-ink transition-colors"
          >
            <LuX size={16} />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

interface ModalFooterProps {
  error?: string;
  saving: boolean;
  submitLabel?: string;
  onCancel: () => void;
}

export function ModalFooter({
  error,
  saving,
  submitLabel = "Save changes",
  onCancel,
}: ModalFooterProps) {
  return (
    <div className="mt-6">
      {error && (
        <div
          role="alert"
          className="bg-red-soft text-red-text text-xs rounded-lg px-3 py-2 mb-4"
        >
          {error}
        </div>
      )}

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={saving}
          className="text-xs font-medium text-ink px-4 py-2.5 rounded-lg hover:bg-ivory transition-colors disabled:opacity-60"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={saving}
          className="bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors disabled:opacity-60"
        >
          {saving ? "Saving..." : submitLabel}
        </button>
      </div>
    </div>
  );
}