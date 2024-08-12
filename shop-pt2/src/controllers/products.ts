import { Request, Response } from 'express';
import Product from '../models/Products';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { maxPrice, includes, limit } = req.query;
    let query: any = {};
    let options: any = {};

    if (maxPrice) query.price = { $lte: parseFloat(maxPrice as string) };
    if (includes) query.name = { $regex: includes, $options: 'i' };
    if (limit) options.limit = parseInt(limit as string);

    const products = await Product.find(query, null, options);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
