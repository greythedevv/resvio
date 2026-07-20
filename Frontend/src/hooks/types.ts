import type{ Wedding, WeddingForm } from "../types/wedding";

export interface UseCreateWeddingReturn {
  step: number;
  wedding: Wedding | null;

  form: WeddingForm;

  saving: boolean;
  error: string;

  coverPreview: string | null;

  goBack: () => void;
  goNext: () => Promise<void>;
  handlePublish: () => Promise<void>;

  updateForm: (
    field: keyof WeddingForm,
    value: string
  ) => void;

  handleCoverSelect: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}