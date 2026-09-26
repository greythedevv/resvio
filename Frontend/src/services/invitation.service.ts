import axios from "axios";
import { api } from "../lib/axios";
import type { Invitation } from "../types/invitation";

export const getInvitationBySlug = async (slug: string): Promise<Invitation> => {
  try {
    const { data } = await api.get<{ invitation: Invitation }>(`/public/invite/${slug}`);
    return data.invitation;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // eslint-disable-next-line preserve-caught-error
      throw new Error(error.response?.data?.message || "Invitation not found");
    }
    // eslint-disable-next-line preserve-caught-error
    throw new Error("Something went wrong");
  }
};