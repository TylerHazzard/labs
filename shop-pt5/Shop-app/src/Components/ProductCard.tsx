import { FC } from "react";
import Product from "../models/Product";

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }) => (
    <>
        <li>
            {product.name}
            {product.price}
            <img src="./images/coming-soon.jpg" alt="" />
        </li>
    </>
)

export default ProductCard