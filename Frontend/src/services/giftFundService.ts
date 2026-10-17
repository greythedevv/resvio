import { api } from "../lib/axios";
import { toApiError } from "../utils/apiError";
import type {
  AddContributionInput,
  GiftContribution,
  GiftFundSummary,
} from "../types/giftFund";

export const getGiftFundSummary = async (weddingId: string): Promise<GiftFundSummary> => {
  try {
    const { data } = await api.get<GiftFundSummary>(`/weddings/${weddingId}/gift-fund`);
    return data;
  } catch (error) {
    return toApiError(error, "Failed to load gift fund");
  }
};

export const addContribution = async (
  weddingId: string,
  input: AddContributionInput
): Promise<GiftContribution> => {
  try {
    const { data } = await api.post<{ contribution: GiftContribution }>(
      `/weddings/${weddingId}/gift-fund/contributions`,
      input
    );
    return data.contribution;
  } catch (error) {
    return toApiError(error, "Failed to record gift");
  }
};

export const deleteContribution = async (
  weddingId: string,
  contributionId: string
): Promise<void> => {
  try {
    await api.delete(`/weddings/${weddingId}/gift-fund/contributions/${contributionId}`);
  } catch (error) {
    toApiError(error, "Failed to remove gift");
  }
};