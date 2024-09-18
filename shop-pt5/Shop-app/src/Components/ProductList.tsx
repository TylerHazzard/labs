import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../models/Product";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productServices";
import Filter from "./Filter";

const ProductList = () => {
    const [searchParams] = useSearchParams()
    const [products, setProducts] = useState<Product[]>([])

    const maxPriceQuery = searchParams.get("maxPrice")
	const maxPrice = maxPriceQuery
		? +maxPriceQuery
		: null

	const limitQuery = searchParams.get("limit")
	const limit = limitQuery ? +limitQuery : null

	const includes = searchParams.get("includes")

    useEffect(() => {
        getProducts(maxPrice, includes, limit).then(prods => {
            setProducts(prods)
        })
    }, [maxPrice, includes, limit])

    return (
        <>
            <Filter />
            <ul>
                {products.map(product =>
                    <ProductCard product={product} key={product._id} />
                )}
            </ul>
        </>
    )
}

export default ProductList