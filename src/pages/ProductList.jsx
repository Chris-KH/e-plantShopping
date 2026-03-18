import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { groupedPlants } from "../data/plants";

function ProductList() {
  return (
    <main className="products-page">
      <Header />

      <section className="products-content">
        {Object.entries(groupedPlants).map(([category, items]) => (
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
