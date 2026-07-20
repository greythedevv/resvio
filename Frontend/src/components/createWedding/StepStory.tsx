interface StepStoryProps {
  form: {
    story: string;
  };

  updateForm: (
    field: string,
    value: string
  ) => void;
}

export default function StepStory({
  form,
  updateForm,
}: StepStoryProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-ink mb-1.5">
        Your story
      </label>

      <textarea
        rows={6}
        value={form.story}
        onChange={(e) =>
          updateForm(
            "story",
            e.target.value
          )
        }
        placeholder="Tell your guests how it all began..."
        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
      />
    </div>
  );
}