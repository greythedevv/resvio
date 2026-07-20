import SummaryRow from "./SummaryRow";
import { THEMES } from "../../constants/wedding";
import type { Wedding } from "../../types/wedding";

interface ReviewStepProps {
  wedding: Wedding | null;
  form: {
    partner1Name: string;
    partner2Name: string;
    weddingDate: string;
    venueName: string;
    theme: string;
  };
}

export default function ReviewStep({
  wedding,
  form,
}: ReviewStepProps) {
  const selectedTheme =
    THEMES.find((theme) => theme.key === form.theme)?.label ||
    "—";

  return (
    <div className="space-y-3 text-sm">
      <SummaryRow
        label="Couple"
        value={`${form.partner1Name} & ${form.partner2Name}`}
      />

      <SummaryRow
        label="Wedding Date"
        value={form.weddingDate || "—"}
      />

      <SummaryRow
        label="Venue"
        value={form.venueName || "—"}
      />

      <SummaryRow
        label="Theme"
        value={selectedTheme}
      />

      <SummaryRow
        label="Invitation Link"
        value={
          wedding
            ? `${window.location.origin}/invite/${wedding.slug}`
            : "Will be generated"
        }
      />

      <p className="pt-3 text-xs text-muted">
        Everything can still be edited after publishing.
      </p>
    </div>
  );
}