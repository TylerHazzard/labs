import { CartItem } from '../models/CartItem';
import './CartRow.css';

interface CartRowProps {
  item: CartItem
}

const CartRow: React.FC<CartRowProps> = ({ item }) => {
  return (
    <div className="cart-row">
      <span>{item.product.name}</span>
      <span>Quantity: {item.quantity}</span>
    </div>
  );
};

export default CartRow;
