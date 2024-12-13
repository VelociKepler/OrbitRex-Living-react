// src/services/productService.ts
import axios from "axios";
import { IProduct } from "../components/products/Product.type";

export const fetchProducts = async (backendUrl: string): Promise<IProduct[]> => {
  const response = await axios.get(`${backendUrl}/api/products`);
  if (response.data.success) {
    return response.data.products.reverse();
  } else {
    throw new Error(response.data.message);
  }
};