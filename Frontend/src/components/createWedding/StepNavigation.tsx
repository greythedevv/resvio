import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

interface StepNavigationProps {
  step: number;
  totalSteps: number;
  saving: boolean;

  onBack: () => void;
  onNext: () => void;
  onPublish: () => void;
}

export default function StepNavigation({
  step,
  totalSteps,
  saving,
  onBack,
  onNext,
  onPublish,
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between">

      <button
        onClick={onBack}
        disabled={step === 0 || saving}
        className="flex items-center gap-1.5 text-ink text-sm px-4 py-2.5 rounded-lg hover:bg-terracotta-light transition-colors disabled:opacity-0"
      >
        <FiArrowLeft size={14} />
        Back
      </button>

      {step < totalSteps - 1 ? (
        <button
          onClick={onNext}
          disabled={saving}
          className="flex items-center gap-1.5 bg-terracotta text-ivory font-serif text-sm px-6 py-2.5 rounded-lg hover:bg-terracotta-dark transition-colors disabled:opacity-60"
        >
          {saving
            ? "Saving..."
            : "Continue"}

          <FiArrowRight size={14} />
        </button>
      ) : (
        <button
          onClick={onPublish}
          disabled={saving}
          className="bg-terracotta text-ivory font-serif text-sm px-6 py-2.5 rounded-lg hover:bg-terracotta-dark transition-colors disabled:opacity-60"
        >
          {saving
            ? "Publishing..."
            : "Publish invitation"}
        </button>
      )}

    </div>
  );
}