interface WizardHeaderProps {
  currentStep: number;
  steps: string[];
}

export default function WizardHeader({
  currentStep,
  steps,
}: WizardHeaderProps) {
  return (
    <>
      <p className="text-muted text-xs mb-1">
        Step {currentStep + 1} of {steps.length}
      </p>

      <h1 className="font-serif text-2xl text-ink mb-6">
        {steps[currentStep]}
      </h1>
    </>
  );
}