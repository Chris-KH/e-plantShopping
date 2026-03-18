import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectCartCount } from "../redux/CartSlice";

function Header() {
  const totalItems = useAppSelector(selectCartCount);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            PS
          </span>
          <span>
            <strong>Paradise Nursery</strong>
            <small>Indoor Plant Boutique</small>
          </span>
        </Link>

        <nav aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/cart" className="cart-link">
            <span aria-hidden="true">Cart</span>
            <span
              className="cart-pill"
              aria-label={`${totalItems} items in cart`}
            >
              {totalItems}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
