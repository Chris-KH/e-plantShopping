import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/CartSlice";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80";

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => Boolean(state.cart.items[plant.id]));

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <article className="plant-card">
      <img
        src={plant.image}
        alt={plant.name}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
      <h3>{plant.name}</h3>
      <p className="price">${plant.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </article>
  );
}

export default PlantCard;
