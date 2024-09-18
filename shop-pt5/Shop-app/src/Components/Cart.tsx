import { useCart } from './CartContext';
import CartRow from './CartRow';
import './Cart.css';

const Cart: React.FC = () => {
  const { cartItems } = useCart()

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartRow key={item._id} item={item} />)
      )}
    </div>
  )
}

export default Cart
