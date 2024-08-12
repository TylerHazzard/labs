import { Router } from "express";
import {
    getCartItems,
    addCartItem,
    updateCartItemQuantity,
    deleteCartItem
} from "../controllers/cartItems"

const router = Router();

router.get('//users/:userId/cart', getCartItems);
router.get('/users/:userId/cart', addCartItem);
router.post('/users/:userId/cart/:productId', updateCartItemQuantity);
router.put('/users/:userId/cart/:productId', deleteCartItem);

export default router;