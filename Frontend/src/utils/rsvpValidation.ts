import type { RsvpFormState } from '../types/rsvp';

export function validateRsvpForm(form: RsvpFormState): string | null {
  if (!form.name) return 'Your name is required';
  if (form.attending === null) return 'Let us know if you can make it';
  if (!form.email) return 'Email is required so we can reach you if anything changes';
  return null;
}