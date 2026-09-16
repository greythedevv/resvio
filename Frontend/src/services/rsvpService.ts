import axios from "axios";
import { api } from "../lib/axios";
import type { SubmitRsvpInput, RsvpResult } from "../types/rsvp";

export const submitRsvp = async (slug: string, input: SubmitRsvpInput): Promise<RsvpResult> => {
  try {
    const { data } = await api.post<{ guest: RsvpResult }>(`/public/rsvp/${slug}`, input);
    return data.guest;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to submit RSVP", { cause: error });
    }
    throw new Error("Something went wrong", { cause: error });
  }
};