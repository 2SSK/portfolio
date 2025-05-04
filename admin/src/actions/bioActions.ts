import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface BioData {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface BioResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
  };
}

export const fetchBio = async (email: string): Promise<BioResponse> => {
  try {
    const response = await axios.get(`${API_URL}/bio`, {
      params: { email },
      timeout: 60000, // 60 seconds timeout
    });
    return response.data as BioResponse;
  } catch (error: unknown) {
    console.error("Error fetching bio:", error);
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        success: false,
        message: "Request timed out. The server took too long to respond."
      };
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
};

export const createBio = async (formData: FormData): Promise<BioResponse> => {
  try {
    const response = await axios.post(`${API_URL}/bio/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 60000, // 60 seconds timeout
    });
    return response.data as BioResponse;
  } catch (error: unknown) {
    console.error("Error creating bio:", error);
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        success: false,
        message: "Request timed out. The server took too long to respond."
      };
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
};

export const updateBio = async (formData: FormData): Promise<BioResponse> => {
  try {
    const response = await axios.patch(`${API_URL}/bio/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 60000, // 60 seconds timeout
    });
    return response.data as BioResponse;
  } catch (error: unknown) {
    console.error("Error updating bio:", error);
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        success: false,
        message: "Request timed out. The server took too long to respond."
      };
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
};
