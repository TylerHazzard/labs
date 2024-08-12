import { Request, Response } from 'express';
import User from '../models/Users';

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
