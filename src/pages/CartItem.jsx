import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../store/CartSlice";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);

  return (
    <main className="cart-page">
      <Header />

      <section className="cart-content">
        <div className="cart-summary">
          <h1>Your Cart</h1>
          <p>
            Total Plants: <strong>{totalItems}</strong>
          </p>
          <p>
            Total Cost: <strong>${totalCost.toFixed(2)}</strong>
          </p>
        </div>

        <div className="cart-actions">
          <Link className="ghost-button" to="/plants">
            Continue Shopping
          </Link>
          <button
            className="checkout-button"
            onClick={() => window.alert("Coming Soon")}
          >
            Checkout
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Add some beautiful plants.
          </p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-row">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />

                <div className="cart-info">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Item Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default CartItem;
