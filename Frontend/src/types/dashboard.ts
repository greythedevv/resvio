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
  _id: string;
  name: string;
  message?: string;
  rsvpStatus: 'pending' | 'attending' | 'declined';
}

export interface DashboardData {
  wedding: Wedding;
  stats: Stats;
  recentGuests: Guest[];
}