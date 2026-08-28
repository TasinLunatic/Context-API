import http from "../../config/http";


export const getProducts = async () => {
  try {
    const response = await http.get(
      "api/products",
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
