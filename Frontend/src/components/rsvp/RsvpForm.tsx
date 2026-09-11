import { useState } from 'react';
import { FiMail, FiCheck, FiX } from 'react-icons/fi';
import { submitRsvp } from '../../services/rsvpService';
import type { RsvpGuest } from '../../types/rsvp';

interface RsvpFormProps {
  token: string;
  guest: RsvpGuest;
  onSubmitted: (guest: RsvpGuest) => void;
}

export default function RsvpForm({ token, guest, onSubmitted }: RsvpFormProps) {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [email, setEmail] = useState(guest.email || '');
  const [partySize, setPartySize] = useState(guest.partySize || 1);
  const [message, setMessage] = useState(guest.message || '');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (attending === null) {
      setError('Let us know if you can make it');
      return;
    }
    if (!email) {
      setError('Email is required so we can reach you if anything changes');
      return;
    }

    setSaving(true);

    try {
      const updated = await submitRsvp(token, {
        attending,
        email,
        partySize: attending ? partySize : undefined,
        message: message || undefined,
      });
      onSubmitted(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <div>
        <p className="text-xs font-medium text-ink mb-2">Will you be attending?</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setAttending(true)}
            className={`flex items-center justify-center gap-1.5 border rounded-lg py-2.5 text-sm transition-colors ${
              attending === true
                ? 'border-terracotta bg-terracotta-light text-terracotta'
                : 'border-border text-ink hover:border-terracotta'
            }`}
          >
            <FiCheck size={14} /> Joyfully accept
          </button>
          <button
            type="button"
            onClick={() => setAttending(false)}
            className={`flex items-center justify-center gap-1.5 border rounded-lg py-2.5 text-sm transition-colors ${
              attending === false
                ? 'border-terracotta bg-terracotta-light text-terracotta'
                : 'border-border text-ink hover:border-terracotta'
            }`}
          >
            <FiX size={14} /> Regretfully decline
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">Email</label>
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
          />
        </div>
        <p className="text-muted text-xs mt-1">In case anything changes.</p>
      </div>

      {attending && guest.plusOneAllowed && (
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Party size (including you)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value, 10) || 1)}
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
          />
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          maxLength={280}
          placeholder="A note for the couple..."
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
        />
      </div>

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