export interface Wedding {
  _id: string;
  partner1Name: string;
  partner2Name: string;
  slug: string;
  weddingDate: string;
  isPublished: boolean;
}

export interface Stats {
  total: number;
  attending: number;
  pending: number;
  declined: number;
  fundsRaised: number;
  fundsTarget: number;
}

export interface Guest {
  respondedAt: string | number | Date;
  _id: string;
  name: string;
  email?: string;
  partySize?: number;
  message?: string;
  rsvpStatus: 'pending' | 'attending' | 'declined';
}

export interface DashboardData {
  wedding: Wedding;
  stats: Stats;
  recentGuests: Guest[];
}