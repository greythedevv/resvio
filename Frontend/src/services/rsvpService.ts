import axios from "axios";
import { api } from "../lib/axios";
import type { RsvpGuest, SubmitRsvpInput } from "../types/rsvp";

const handleError = (error: unknown, fallback: string): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.message || fallback);
  }
  throw new Error("Something went wrong");
};

export const getRsvpByToken = async (token: string): Promise<RsvpGuest> => {
  try {
    const { data } = await api.get<{ guest: RsvpGuest }>(`/public/rsvp/${token}`);
    return data.guest;
  } catch (error) {
    return handleError(error, "RSVP link not found");
  }
};

export const submitRsvp = async (token: string, input: SubmitRsvpInput): Promise<RsvpGuest> => {
  try {
    const { data } = await api.post<{ guest: RsvpGuest }>(`/public/rsvp/${token}`, input);
    return data.guest;
  } catch (error) {
    return handleError(error, "Failed to submit RSVP");
  }
};