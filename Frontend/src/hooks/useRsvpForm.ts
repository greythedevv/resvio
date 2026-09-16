import { useState } from 'react';
import { submitRsvp } from '../services/rsvpService';
import { validateRsvpForm } from '../utils/rsvpValidation';
import { DEFAULT_PARTY_SIZE } from '../constants/rsvp';
import type { RsvpFormState, RsvpResult } from '../types/rsvp';

const initialState: RsvpFormState = {
  name: '',
  email: '',
  attending: null,
  partySize: DEFAULT_PARTY_SIZE,
  message: '',
};

export function useRsvpForm(slug: string | undefined) {
  const [form, setForm] = useState<RsvpFormState>(initialState);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState<RsvpResult | null>(null);

  const updateField = <K extends keyof RsvpFormState>(field: K, value: RsvpFormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateRsvpForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    try {
      const guest = await submitRsvp(slug!, {
        name: form.name,
        email: form.email,
        attending: form.attending as boolean,
        partySize: form.attending ? form.partySize : undefined,
        message: form.message || undefined,
      });
      setResult(guest);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return { form, updateField, error, saving, result, handleSubmit };
}