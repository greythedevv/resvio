import axios from "axios";
import { api } from "../lib/axios";
import type { WishlistItem } from "../types/wishlist";

export const getWishlist = async (weddingId: string): Promise<WishlistItem[]> => {
  try {
    const { data } = await api.get<{ items: WishlistItem[] }>(`/weddings/${weddingId}/wishlist`);
    return data.items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // eslint-disable-next-line preserve-caught-error
      throw new Error(error.response?.data?.message || "Failed to load wish list");
    }
    // eslint-disable-next-line preserve-caught-error
    throw new Error("Something went wrong");
  }
};