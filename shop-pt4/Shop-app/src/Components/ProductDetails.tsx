import { FC } from "react"
import {
	Link,
	useSearchParams
} from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../models/Product"
import { getProducts, getProduct } from "../services/productService"

const ProductDetails: FC = () => {
	const [searchParams] = useSearchParams()
	const maxPrice = searchParams.get("maxPrice")
    const includes = searchParams.get("includes")
    const limit = searchParams.get("limit")
	const [products, setProducts] = useState<
		Product[]
	>([])
    const [product, setProduct] = useState<Product>()

	useEffect(() => {
		getProducts(maxPrice, includes, limit).then(prods => {
			setProducts(prods)
		})
	}, [])

    const id = useParams().id

	useEffect(() => {
		if (id) getProduct(id).then(p => setProduct(p))
	}, [])

	if (!product) return <h3>Not Available</h3>

	return (
		<>
			{products.map(product => (
				<div>
					<Link
						to={"/products/" + product._id}
						key={product._id}
					>
						<span>{product.name}</span>
					</Link>
				</div>
			))}
		</>
	)
}

export default ProductDetails