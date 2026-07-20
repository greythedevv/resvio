import axios from "axios";
import { api } from "../lib/axios";
import type { Wedding, CreateWeddingInput, UpdateWeddingInput } from "../types/wedding";

const handleError = (error: unknown, fallback: string): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.message || fallback);
  }
  throw new Error("Something went wrong");
};

export const createWedding = async (input: CreateWeddingInput): Promise<Wedding> => {
  try {
    const { data } = await api.post<{ wedding: Wedding }>("/weddings", input);
    return data.wedding;
  } catch (error) {
    return handleError(error, "Failed to create wedding");
  }
};

export const getWedding = async (id: string): Promise<Wedding> => {
  try {
    const { data } = await api.get<{ wedding: Wedding }>(`/weddings/${id}`);
    return data.wedding;
  } catch (error) {
    return handleError(error, "Failed to load wedding");
  }
};

export const updateWedding = async (id: string, input: UpdateWeddingInput): Promise<Wedding> => {
  try {
    const { data } = await api.put<{ wedding: Wedding }>(`/weddings/${id}`, input);
    return data.wedding;
  } catch (error) {
    return handleError(error, "Failed to save changes");
  }
};

export const uploadCoverImage = async (id: string, file: File): Promise<Wedding> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await api.post<{ wedding: Wedding }>(
      `/weddings/${id}/cover-image`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return data.wedding;
  } catch (error) {
    return handleError(error, "Failed to upload image");
  }
};

export const publishWedding = async (id: string): Promise<Wedding> => {
  try {
    const { data } = await api.post<{ wedding: Wedding }>(`/weddings/${id}/publish`, {});
    return data.wedding;
  } catch (error) {
    return handleError(error, "Failed to publish wedding");
  }
};