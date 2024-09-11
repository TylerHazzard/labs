import axios from "axios";
import Product from "../models/Product";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    apiUrl + "/products"
  )
  return response.data
}

export const postProduct = async (
	newProduct: Product
): Promise<void> => {
	await axios.post(apiUrl + "/products", newProduct)
}