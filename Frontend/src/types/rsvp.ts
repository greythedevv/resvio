export interface RsvpGuest {
  name: string;
  email: string;
  rsvpStatus: 'pending' | 'attending' | 'declined';
  plusOneAllowed: boolean;
  partySize: number;
  message?: string;
}

export interface SubmitRsvpInput {
  attending: boolean;
  email: string;
  partySize?: number;
  message?: string;
}