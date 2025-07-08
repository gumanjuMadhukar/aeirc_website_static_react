import api from './api';

// Fetch all banners
export async function fetchBanners() {
  try {
    const response = await api.get("/banners"); 
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message ||
      "An error occurred while fetching banners.";
    console.error("Error fetching banners:", errorMessage);
    throw new Error(errorMessage);
  }
}

// Fetch banners filtered by page (e.g. "home", "service")
export async function fetchBannersByPage(page = "service") {
  try {
    const response = await api.get(`/banners?page=${page}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message ||
      "An error occurred while fetching page-specific banners.";
    console.error("Error fetching page-specific banners:", errorMessage);
    throw new Error(errorMessage);
  }
}
