import { Request, Response } from 'express';
import CartItem from '../models/CartItems';

export const getCartItems = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const cartItems = await CartItem.find({ userId });
        res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const addCartItem = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const { product, quantity } = req.body
        
        const existingItem = await CartItem.findOne({ userId, product });

      if (existingItem) {
        existingItem.quantity += quantity;
        await existingItem.save();
        res.status(200).json(existingItem);
      } else {
        const newCartItem = new CartItem({ userId, product, quantity });
        await newCartItem.save();
        res.status(201).json(newCartItem);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const updateCartItemQuantity = async (req: Request, res: Response) => {
    try {
      const { userId, productId } = req.params;
      const { quantity } = req.body;

      const cartItem = await CartItem.findOne({ userId, 'product._id': productId });

      if (cartItem) {
        cartItem.quantity = quantity;
        await cartItem.save();
        res.status(200).json(cartItem);
      }
    } catch (error) {
      res.status(404).json({ error: 'Item Not Found' });
    }
  };
  
  export const deleteCartItem = async (req: Request, res: Response) => {
    try {
      const { userId, productId } = req.params;

      const result = await CartItem.deleteOne({ userId, 'product._id': productId });
  
      if (result.deletedCount > 0) {
        res.status(204).send();
      }
    } catch (error) {
      res.status(404).json({ error: 'Item Not Found' });
    }
  };