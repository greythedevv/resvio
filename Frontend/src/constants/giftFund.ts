import { LuLandmark, LuCreditCard, LuSmartphone } from "react-icons/lu";
import type { IconType } from "react-icons";
import type {
  ContributionMethod,
  GiftFundSummary,
  ManualContributionMethod,
} from "../types/giftFund";


export const GIFT_FUND_LIMITS = {
  name: 80,
  message: 280,
  maxAmount: 100000000,
  maxGoal: 1000000000,
} as const;

export const EMPTY_SUMMARY: GiftFundSummary = {
  raised: 0,
  goal: 0,
  count: 0,
  contributions: [],
};

export const METHOD_LABELS: Record<ContributionMethod, string> = {
  bank_transfer: "Bank transfer",
  card: "Card",
  ussd: "USSD",
  cash: "Cash",
};

export const MANUAL_METHOD_OPTIONS: { value: ManualContributionMethod; label: string }[] = [
  { value: "bank_transfer", label: "Bank transfer" },
  { value: "cash", label: "Cash" },
];

export const GIVING_OPTIONS: { label: string; description: string; icon: IconType }[] = [
  {
    label: "Bank Transfer",
    description: "Guests send a transfer to your account",
    icon: LuLandmark,
  },
  {
    label: "Card Payment",
    description: "Guests pay online with their card",
    icon: LuCreditCard,
  },
  {
    label: "USSD",
    description: "Guests pay from any phone with a USSD code",
    icon: LuSmartphone,
  },
];