import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart()
  const itemCount = cartItems.length

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
      </nav>
    </header>
  )
}

export default Header
