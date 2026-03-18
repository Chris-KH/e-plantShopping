import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { groupedPlants } from "../data/plants";
import { addItem } from "../store/CartSlice";

const MIN_PLANTS_PER_CATEGORY = 6;

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categoryEntries = Object.entries(groupedPlants).filter(
    ([, items]) => items.length >= MIN_PLANTS_PER_CATEGORY,
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <main className="products-page">
      <Header />

      <section className="products-content">
        {categoryEntries.map(([category, items]) => (
          <section key={category} className="category-block">
            <h2>{category}</h2>
            <div className="plant-grid">
              {items.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                  isInCart={Boolean(cartItems[plant.id])}
                />
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default ProductList;
