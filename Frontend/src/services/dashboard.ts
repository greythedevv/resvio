import axios from "axios";
import { api } from "../lib/axios";
import type { Wedding, Stats, Guest } from "../types/dashboard";

export const getCurrentWedding = async (): Promise<Wedding> => {
  try {
    const { data } = await api.get<{ wedding: Wedding }>("/weddings/current");
    return data.wedding;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        message:
          error.response?.data?.message || "Failed to load wedding",
      };
    }

    throw {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const getWeddingStats = async (
  weddingId: string
): Promise<Stats> => {
  try {
    const { data } = await api.get<Stats>(
      `/weddings/${weddingId}/stats`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        message:
          error.response?.data?.message || "Failed to load stats",
      };
    }

    throw {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const getRecentGuests = async (
  weddingId: string
): Promise<Guest[]> => {
  try {
    const { data } = await api.get<{ guests: Guest[] }>(
      `/weddings/${weddingId}/guests`,
      {
        params: {
          limit: 5,
          sort: "-updatedAt",
        },
      }
    );

    return data.guests;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        message:
          error.response?.data?.message || "Failed to load guests",
      };
    }

    throw {
      status: 500,
      message: "Something went wrong",
    };
  }
};