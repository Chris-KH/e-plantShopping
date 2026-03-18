import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { groupedPlants } from "../data/plants";

const MIN_PLANTS_PER_CATEGORY = 6;

function ProductList() {
  const categoryEntries = Object.entries(groupedPlants).filter(
    ([, items]) => items.length >= MIN_PLANTS_PER_CATEGORY,
  );

  return (
    <main className="products-page">
      <Header />

      <section className="products-content">
        {categoryEntries.map(([category, items]) => (
          <section key={category} className="category-block">
            <h2>{category}</h2>
            <div className="plant-grid">
              {items.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default ProductList;
