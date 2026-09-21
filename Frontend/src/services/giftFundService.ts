import axios from "axios";
import { api } from "../lib/axios";
import type { GiftFundSummary } from "../types/giftFund";

export const getGiftFundSummary = async (weddingId: string): Promise<GiftFundSummary> => {
  try {
    const { data } = await api.get<GiftFundSummary>(`/weddings/${weddingId}/gift-fund`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // eslint-disable-next-line preserve-caught-error
      throw new Error(error.response?.data?.message || "Failed to load gift fund");
    }
    // eslint-disable-next-line preserve-caught-error
    throw new Error("Something went wrong");
  }
};