// src/components/createWedding/CoverPhotoStep.tsx

import { FiUpload } from "react-icons/fi";

interface CoverPhotoStepProps {
  preview: string | null;
  onSelect: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function CoverPhotoStep({
  preview,
  onSelect,
}: CoverPhotoStepProps) {
  return (
    <div>
      <label
        htmlFor="cover-upload"
        className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-10 transition-colors hover:border-terracotta"
      >
        {preview ? (
          <img
            src={preview}
            alt="Cover Preview"
            className="h-48 w-full rounded-lg object-cover"
          />
        ) : (
          <>
            <FiUpload
              className="mb-2 text-2xl text-terracotta"
            />

            <p className="text-sm text-ink">
              Click to upload a cover photo
            </p>

            <p className="mt-1 text-xs text-muted">
              JPG or PNG • Maximum 5MB
            </p>
          </>
        )}
      </label>

      <input
        id="cover-upload"
        type="file"
        accept="image/*"
        onChange={onSelect}
        className="hidden"
      />
    </div>
  );
}