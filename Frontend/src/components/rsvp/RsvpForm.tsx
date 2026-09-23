import RsvpNameField from "./RsvpNameField";
import RsvpEmailField from "./RsvpEmailField";
import AttendingToggle from "./AttendingToggle";
import PartySizeField from "./PartySizeField";
import RsvpMessageField from "./RsvpMessageField";

import type { RsvpFormState } from "../../types/rsvp";

interface Props {
  form: RsvpFormState;

  updateField: <
    K extends keyof RsvpFormState
  >(
    field: K,
    value: RsvpFormState[K]
  ) => void;

  error: string;
  saving: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RsvpForm({
  form,
  updateField,
  error,
  saving,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-7">

      {error && (
        <div className="bg-[#FDF0ED] border border-[#E7C4BB] text-[#9A4D3B] text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <RsvpNameField
        value={form.name}
        onChange={(value) =>
          updateField("name", value)
        }
      />

      <RsvpEmailField
        value={form.email}
        onChange={(value) =>
          updateField("email", value)
        }
      />

      <div className="h-px bg-[#E4DDD4]" />

      <AttendingToggle
        value={form.attending}
        onChange={(value) =>
          updateField("attending", value)
        }
      />

      {form.attending && (
        <PartySizeField
          value={form.partySize}
          onChange={(value) =>
            updateField("partySize", value)
          }
        />
      )}

      <RsvpMessageField
        value={form.message}
        onChange={(value) =>
          updateField("message", value)
        }
      />

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-terracotta text-ivory font-serif text-base py-4 rounded-full hover:bg-terracotta-dark transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {saving ? "Sending your RSVP..." : "Send my RSVP"}
      </button>

      <p className="text-center text-[11px] text-muted leading-5">
        Your response will be shared with the couple to help
        them prepare for their special day.
      </p>

    </form>
  );
}