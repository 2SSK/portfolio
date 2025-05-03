import axios from "axios";

export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (user: User): Promise<LoginResponse> => {
  try {
    console.log("API URL:", API_URL);
    const response = await axios.post<LoginResponse>(
      `${API_URL}/user/login`,
      user,
    );

    return response.data;
  } catch (error) {
    const apiError = error as ApiError;
    return {
      success: false,
      message: apiError.response?.data?.message || "Login failed",
    };
  }
};
