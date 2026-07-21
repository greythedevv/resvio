import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createWedding,
  updateWedding,
  uploadCoverImage,
  publishWedding,
} from "../services/wedding";

import { STEPS } from "../constants/wedding";

import type { Wedding } from "../types/wedding";

export default function useCreateWedding() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [wedding, setWedding] =
    useState<Wedding | null>(null);

  const [form, setForm] = useState({
    partner1Name: "",
    partner2Name: "",

    weddingDate: "",

    venueName: "",
    venueAddress: "",
    venueCity: "",

    story: "",

    theme: "classic" as const,
  });

  const [coverFile, setCoverFile] =
    useState<File | null>(null);

  const [coverPreview, setCoverPreview] =
    useState<string | null>(null);

  const updateForm = (
    field: string,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCoverSelect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCoverFile(file);
    setCoverPreview(
      URL.createObjectURL(file)
    );
  };

  const goBack = () => {
    setStep((prev) =>
      Math.max(0, prev - 1)
    );
  };

  const goNext = async () => {
    setError("");
    setSaving(true);

    try {
      if (step === 0) {
        if (
          !form.partner1Name ||
          !form.partner2Name
        ) {
          throw new Error(
            "Both names are required"
          );
        }

        const created =
          await createWedding({
            partner1Name:
              form.partner1Name,
            partner2Name:
              form.partner2Name,
          });

        setWedding(created);
      }

      else if (wedding) {

        if (step === 1) {
          await updateWedding(
            wedding._id,
            {
              weddingDate:
                form.weddingDate,

              venue: {
                name: form.venueName,
                address:
                  form.venueAddress,
                city:
                  form.venueCity,
              },
            }
          );
        }

        else if (step === 2) {
          await updateWedding(
            wedding._id,
            {
              story: form.story,
            }
          );
        }

        else if (
          step === 3 &&
          coverFile
        ) {
          const updated =
            await uploadCoverImage(
              wedding._id,
              coverFile
            );

          setWedding(updated);
        }

        else if (step === 4) {
          await updateWedding(
            wedding._id,
            {
              theme: form.theme,
            }
          );
        }
      }

      setStep((prev) =>
        Math.min(
          STEPS.length - 1,
          prev + 1
        )
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePublish =
    async () => {
      if (!wedding) return;

      setSaving(true);
      setError("");

      try {
        await publishWedding(
          wedding._id
        );

        navigate("/dashboard");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setSaving(false);
      }
    };

  return {
    step,
    saving,
    error,

    form,

    wedding,

    coverFile,
    coverPreview,

    setError,

    updateForm,

    handleCoverSelect,

    goBack,
    goNext,

    handlePublish,
  };
}