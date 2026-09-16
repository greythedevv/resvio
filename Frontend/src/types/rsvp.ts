export interface SubmitRsvpInput {
  name: string;
  email: string;
  attending: boolean;
  partySize?: number;
  message?: string;
}

export interface RsvpResult {
  name: string;
  email: string;
  rsvpStatus: 'attending' | 'declined';
  partySize: number;
  message?: string;
}

export interface RsvpFormState {
  name: string;
  email: string;
  attending: boolean | null;
  partySize: number;
  message: string;
}