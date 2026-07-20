import ProgressBar from "../components/createWedding/ProgressBar";
import WizardHeader from "../components/createWedding/WizardHeader";
import StepNavigation from "../components/createWedding/StepNavigation";
import ErrorAlert from "../components/createWedding/ErrorAlert";

import StepNames from "../components/createWedding/StepNames";
import StepDateVenue from "../components/createWedding/StepDateVenue";
import StepStory from "../components/createWedding/StepStory";
import StepCoverPhoto from "../components/createWedding/StepCoverPhoto";
import StepTheme from "../components/createWedding/StepTheme";
import StepReview from "../components/createWedding/StepReview";

import { STEPS, THEMES } from "../constants/wedding";
import useCreateWedding from "../hooks/useCreateWedding";

export default function CreateWedding() {
  const {
    step,
    saving,
    error,
    form,
    wedding,
    coverPreview,
    updateForm,
    handleCoverSelect,
    goBack,
    goNext,
    handlePublish,
  } = useCreateWedding();

  return (
    <div className="min-h-screen bg-ivory px-6 py-10">
      <div className="mx-auto max-w-lg">
        <ProgressBar currentStep={step} steps={STEPS} />

        <WizardHeader
          currentStep={step}
          steps={STEPS}
        />

        <div className="mb-4 rounded-lg border border-border bg-white p-6">
          {error && <ErrorAlert message={error} />}

          {step === 0 && (
            <StepNames
              form={form}
              updateForm={updateForm}
            />
          )}

          {step === 1 && (
            <StepDateVenue
              form={form}
              updateForm={updateForm}
            />
          )}

          {step === 2 && (
            <StepStory
              form={form}
              updateForm={updateForm}
            />
          )}

          {step === 3 && (
            <StepCoverPhoto
              preview={coverPreview}
              onSelect={handleCoverSelect}
            />
          )}

          {step === 4 && (
            <StepTheme
              selectedTheme={form.theme}
              onSelect={(theme) =>
                updateForm("theme", theme)
              }
            />
          )}

          {step === 5 && (
            <StepReview
              wedding={wedding}
              form={form}
            />
          )}
        </div>

        <StepNavigation
          step={step}
          totalSteps={STEPS.length}
          saving={saving}
          onBack={goBack}
          onNext={goNext}
          onPublish={handlePublish}
        />
      </div>
    </div>
  );
}