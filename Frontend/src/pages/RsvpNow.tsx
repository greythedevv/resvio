
import { useParams } from 'react-router-dom';
import RsvpHeader from '../components/rsvp/RsvpHeader';
import RsvpForm from '../components/rsvp/RsvpForm';
import RsvpConfirmation from '../components/rsvp/RsvpConfirmation';
import { useRsvpForm } from '../hooks/useRsvpForm';

export default function RsvpNow() {
  const { slug } = useParams<{ slug: string }>();
  const { form, updateField, error, saving, result, handleSubmit } = useRsvpForm(slug);

  if (result) {
    return <RsvpConfirmation result={result} />;
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <RsvpHeader />
        <div className="bg-white border border-border rounded-lg p-6">
          <RsvpForm form={form} updateField={updateField} error={error} saving={saving} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}