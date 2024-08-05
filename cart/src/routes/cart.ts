import { Router } from "express"
import {
	getCartItems,
	getCartItemById,
    postCartItem,
    deleteCartItem
} from "../controller/cart"

const router = Router()

router.get("/", getCartItems)
router.get("/:id", getCartItemById)
router.post("/", postCartItem)
router.post("/", deleteCartItem)

export default router