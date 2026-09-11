import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRsvp } from '../hooks/useRsvp';
import RsvpForm from '../components/rsvp/RsvpForm';
import type { RsvpGuest } from '../types/rsvp';

export default function RsvpNow() {
  const { token } = useParams<{ token: string }>();
  const { guest, loading, error } = useRsvp(token);
  const [submittedGuest, setSubmittedGuest] = useState<RsvpGuest | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <p className="text-muted text-sm">Loading your invitation...</p>
      </div>
    );
  }

  if (error || !guest) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-xl text-ink mb-2">RSVP link not found</p>
          <p className="text-muted text-sm mb-6">
            This link may be incorrect. Reach out to the couple for a new one.
          </p>
          <Link to="/" className="text-terracotta text-sm hover:underline">
            Back to resvio
          </Link>
        </div>
      </div>
    );
  }

  const displayGuest = submittedGuest || guest;

  if (submittedGuest) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="max-w-sm text-center">
          <p className="font-serif text-2xl text-ink mb-2">
            {submittedGuest.rsvpStatus === 'attending' ? "You're in!" : 'Thanks for letting us know'}
          </p>
          <p className="text-muted text-sm mb-1">
            {submittedGuest.rsvpStatus === 'attending'
              ? `We can't wait to celebrate with you, ${submittedGuest.name}.`
              : `We'll miss you, ${submittedGuest.name}.`}
          </p>
          <p className="text-muted text-xs mt-4">
            Changed your mind? You can revisit this same link to update your response before the deadline.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-serif text-2xl text-ink">Hi, {displayGuest.name}</p>
          <p className="text-muted text-xs mt-2">We'd love to know if you can make it.</p>
        </div>

        <div className="bg-white border border-border rounded-lg p-6">
          <RsvpForm token={token!} guest={displayGuest} onSubmitted={setSubmittedGuest} />
        </div>
      </div>
    </div>
  );
}