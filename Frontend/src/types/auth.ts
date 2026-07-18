export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token?: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ForgotPasswordData {
  email: string;
}