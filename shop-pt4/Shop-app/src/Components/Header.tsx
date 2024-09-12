import { Link } from "react-router-dom"


const Header = () => {

    return (
        <>
            <Link to={"/"}>
                <h1>SHOP</h1>
            </Link>
            <Link to={"/products"}>
                <span>products</span>
            </Link>
        </>
    )
}

export default Header