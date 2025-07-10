import api from "./api";

interface AxiosErrorResponse {
  data?: {
    message?: string;
  };
  statusText?: string;
}

interface AxiosError {
  response?: AxiosErrorResponse;
  message?: string;
}
// Fetch all banners
export async function fetchBanners() {
  try {
    const response = await api.get("/banners"); 
    return response.data;
  } catch (error) {
    // Assert error as AxiosError to safely access response properties
    const axiosError = error as AxiosError;

    const errorMessage =
      axiosError.response?.data?.message ||
      axiosError.response?.statusText ||
      axiosError.message ||
      "An error occurred while fetching banners.";

    console.error("Error fetching banners:", errorMessage);
    throw new Error(errorMessage);
  }
}

// Fetch banners filtered by page (e.g. "home", "service")
export async function fetchBannersByPage(page = "service") {
  try {
    const response = await api.get(`/banners/page/${page}`);
    
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage =
      axiosError.response?.data?.message ||
      axiosError.response?.statusText ||
      axiosError.message ||
      "An error occurred while fetching page-specific banners.";
    console.error("Error fetching page-specific banners:", errorMessage);
    throw new Error(errorMessage);
  }
}