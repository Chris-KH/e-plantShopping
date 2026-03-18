import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "./redux/CartSlice";

function CartItem() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalCount = useAppSelector(selectCartCount);
  const totalCost = useAppSelector(selectCartTotal);

  return (
    <main className="cart-page container">
      <div className="cart-summary">
        <h1>Your Cart</h1>
        <p>Total plants: {totalCount}</p>
        <p>Total cost: ${totalCost.toFixed(2)}</p>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <p>Your cart is empty. Add a few plants to get started.</p>
          <Link to="/plants" className="secondary-link">
            Continue shopping
          </Link>
        </section>
      ) : (
        <section className="cart-list">
          {items.map((item) => {
            const lineTotal = item.price * item.quantity;

            return (
              <article key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} loading="lazy" />

                <div className="cart-row-info">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Line total: ${lineTotal.toFixed(2)}</p>
                </div>

                <div className="cart-controls">
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      )}

      <section className="cart-actions">
        <Link to="/plants" className="secondary-link">
          Continue shopping
        </Link>
        <button
          type="button"
          className="primary"
          onClick={() => window.alert("Checkout is coming soon!")}
        >
          Checkout
        </button>
      </section>
    </main>
  );
}

export default CartItem;
