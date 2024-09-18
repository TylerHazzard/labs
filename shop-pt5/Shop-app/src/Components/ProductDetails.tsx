import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../models/Product"
import { getProduct } from "../services/productServices"

const ProductDetails = () => {
	const [product, setProduct] =
		useState<Product | null>(null)
	const { productId } = useParams()

	useEffect(() => {
		if (productId)
			getProduct(productId).then(p => setProduct(p))
	}, [productId])
	if (!product) return <div>Product not found!</div>
	return (
		<div>
			<span>{product.name}</span>
			<div>{product.price}</div>
			<img
				src="/images/coming-soon.jpg"
				alt="#"
			/>
		</div>
	)
}

export default ProductDetails