import axios from "axios";
import { api } from "../lib/axios";
import type{
  LoginFormData,
  SignupFormData,
  AuthResponse,
} from "../types/auth";

export const loginUser = async (
  formData: LoginFormData
): Promise<AuthResponse> => {
  try {
    const { data } = await api.post<AuthResponse>(
      "/auth/login",
      formData
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Login failed"
      );
    }

    throw new Error("Something went wrong");
  }
};

export const signupUser = async (
  formData: SignupFormData
): Promise<AuthResponse> => {
  try {
    const { data } = await api.post<AuthResponse>(
      "/auth/register",
      formData
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Registration failed"
      );
    }

    throw new Error("Something went wrong");
  }
};

export const forgotPassword = async (
  email: string
): Promise<{ message: string }> => {
  try {
    const { data } = await api.post("/auth/forgot-password", {
      email,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Unable to send reset link"
      );
    }

    throw new Error("Something went wrong");
  }
};

export const logoutUser = async (): Promise<void> => {
  await api.post("/auth/logout");
};