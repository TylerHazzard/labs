import { useEffect, useState } from "react";
import Product from "../models/Product";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productService";

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    })

    return (
        <>
            <ul>
                {products.map(product =>
                    <ProductCard product={product} key={product._id} />
                )}
            </ul>
        </>
    )
}

export default ProductList