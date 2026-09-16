import type { RsvpResult } from '../../types/rsvp';

interface Props {
  result: RsvpResult;
}

export default function RsvpConfirmation({ result }: Props) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="max-w-sm text-center">
        <p className="font-serif text-2xl text-ink mb-2">
          {result.rsvpStatus === 'attending' ? "You're in!" : 'Thanks for letting us know'}
        </p>
        <p className="text-muted text-sm">
          {result.rsvpStatus === 'attending'
            ? `We can't wait to celebrate with you, ${result.name}.`
            : `We'll miss you, ${result.name}.`}
        </p>
      </div>
    </div>
  );
}