interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

export default function ProgressBar({
  currentStep,
  steps,
}: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1.5 mb-8">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`h-1 flex-1 rounded-full ${
            index <= currentStep
              ? "bg-terracotta"
              : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}