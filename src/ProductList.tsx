import { useMemo } from "react";
import plantsByCategory from "./data/plants";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addToCart } from "./redux/CartSlice";

function ProductList() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const inCartIds = useMemo(() => new Set(Object.keys(cartItems)), [cartItems]);

  return (
    <main className="products-page container">
      <div className="page-title-block">
        <p className="eyebrow">Handpicked Indoor Collection</p>
        <h1>Choose Plants For Your Space</h1>
      </div>

      {plantsByCategory.map(({ category, plants }) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.map((plant) => {
              const isInCart = inCartIds.has(plant.id);

              return (
                <article key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="primary"
                      disabled={isInCart}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
