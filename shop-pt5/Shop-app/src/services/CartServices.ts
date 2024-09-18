import axios from 'axios';
import { CartItem } from '../models/CartItem';

const API_URL = '/api/cartItems';

export const getCartItems = async () => {
  return await axios.get<CartItem[]>(API_URL);
};

export const addCartItem = async (item: CartItem) => {
  return await axios.post<CartItem>(API_URL, item);
};

export const updateCartItem = async (item: CartItem) => {
  return await axios.put<CartItem>(`${API_URL}/${item._id}`, item);
};

export const removeCartItem = async (id: string) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const clearCart = async () => {
  return await axios.delete(API_URL);
};
