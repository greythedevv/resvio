interface StepNamesProps {
  form: {
    partner1Name: string;
    partner2Name: string;
  };
  updateForm: (field: string, value: string) => void;
}

export default function StepNames({
  form,
  updateForm,
}: StepNamesProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">
          Partner 1's name
        </label>

        <input
          type="text"
          value={form.partner1Name}
          onChange={(e) =>
            updateForm(
              "partner1Name",
              e.target.value
            )
          }
          placeholder="Amara"
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">
          Partner 2's name
        </label>

        <input
          type="text"
          value={form.partner2Name}
          onChange={(e) =>
            updateForm(
              "partner2Name",
              e.target.value
            )
          }
          placeholder="Jide"
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
        />
      </div>
    </div>
  );
}