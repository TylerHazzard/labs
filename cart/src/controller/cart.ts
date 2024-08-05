import { Request, Response } from "express"

interface ReqRes {
	(req: Request, res: Response): void
}

interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
  }
  
  const cartItems: CartItem[] = [
    { id: 1, product: 'Fancy Lamp', price: 25.00, quantity: 2 },
    { id: 2, product: 'Cheap Mug', price: 2.00, quantity: 5 },
    { id: 3, product: 'Expensive Watch', price: 150.00, quantity: 1 },
  ]

  export const getCartItems = (req: Request, res: Response): void => {
    let filteredItems = cartItems.slice();
    const { maxPrice, prefix, pageSize } = req.query;
  
    if (maxPrice) {
      const max = parseFloat(maxPrice as string);
      if (!isNaN(max)) {
        filteredItems = filteredItems.filter(item => item.price <= max);
      } else {
        res.status(400).send('Invalid maxPrice parameter');
        return;
      }
    }
  
    if (prefix) {
      filteredItems = filteredItems.filter(item => item.product.startsWith(prefix as string));
    }
  
    if (pageSize) {
      const size = parseInt(pageSize as string);
      if (!isNaN(size)) {
        filteredItems = filteredItems.slice(0, size);
      } else {
        res.status(400).send('Invalid pageSize parameter');
        return;
      }
    }
  
    res.status(200).json(filteredItems);
  };

  export const getCartItemById = (req: Request, res: Response): void => {
    const item = cartItems.find(item => item.id === parseInt(req.params.id));
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).send('ID Not Found');
    }
  };

  export const postCartItem = (req: Request, res: Response): void => {
    const newItem = { ...req.body };
    cartItems.push(newItem);
    res.status(201).json(newItem);
  };

  export const deleteCartItem = (req: Request, res: Response): void => {
    const index = cartItems.findIndex(item => item.id === parseInt(req.params.id));
    if (index !== -1) {
      cartItems.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send('ID Not Found');
    }
  };