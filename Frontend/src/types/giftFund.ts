export interface GiftContribution {
  _id: string;
  name: string;
  amount: number;
  method: 'bank_transfer' | 'card' | 'ussd';
  createdAt: string;
}

export interface GiftFundSummary {
  raised: number;
  goal: number;
  contributions: GiftContribution[];
}