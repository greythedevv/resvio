export type ContributionMethod = "bank_transfer" | "card" | "ussd" | "cash";
export type ManualContributionMethod = "bank_transfer" | "cash";

export interface GiftContribution {
  _id: string;
  name: string;
  email?: string;
  amount: number;
  method: ContributionMethod;
  source: "manual" | "online";
  message?: string;
  createdAt: string;
}

export interface GiftFundSummary {
  raised: number;
  goal: number;
  count: number;
  contributions: GiftContribution[];
}

export interface AddContributionInput {
  name: string;
  amount: number;
  method: ManualContributionMethod;
  email?: string;
  message?: string;
}