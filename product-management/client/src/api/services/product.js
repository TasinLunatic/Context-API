import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/products",
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
