import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/CartSlice";

function Header() {
  const totalItems = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">PN</span>
        <span className="brand-text">Paradise Nursery</span>
      </Link>

      <nav className="site-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">
          <span className="cart-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-label="cart">
              <path d="M7 4h-2l-1 2h2.4l2.2 9.2a2 2 0 0 0 2 1.6h7.3l1.4-6.6h-9.3l-.4-2h10.3l-.5 2.3-1 4.9a3 3 0 0 1-2.9 2.3h-7.3a3 3 0 0 1-2.9-2.4l-2-8.6zm4.7 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
          </span>
          Cart
          <span
            className="cart-count"
            aria-label={`${totalItems} items in cart`}
          >
            {totalItems}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
