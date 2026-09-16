
import RsvpNameField from './RsvpNameField';
import RsvpEmailField from './RsvpEmailField';
import AttendingToggle from './AttendingToggle';
import PartySizeField from './PartySizeField';
import RsvpMessageField from './RsvpMessageField';
import type { RsvpFormState } from '../../types/rsvp';

interface Props {
  form: RsvpFormState;
  updateField: <K extends keyof RsvpFormState>(field: K, value: RsvpFormState[K]) => void;
  error: string;
  saving: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RsvpForm({ form, updateField, error, saving, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <RsvpNameField value={form.name} onChange={(v) => updateField('name', v)} />
      <AttendingToggle value={form.attending} onChange={(v) => updateField('attending', v)} />
      <RsvpEmailField value={form.email} onChange={(v) => updateField('email', v)} />

      {form.attending && (
        <PartySizeField value={form.partySize} onChange={(v) => updateField('partySize', v)} />
      )}

      <RsvpMessageField value={form.message} onChange={(v) => updateField('message', v)} />

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-terracotta text-ivory font-serif text-sm py-3 rounded-lg hover:bg-terracotta-dark transition-colors disabled:opacity-60"
      >
        {saving ? 'Submitting...' : 'Submit RSVP'}
      </button>
    </form>
  );
}