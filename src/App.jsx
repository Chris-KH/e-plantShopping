import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

function LandingPage() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  if (showProductList) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <main className="landing-page">
      <section className="landing-hero">
        <p className="eyebrow">Indoor Plant Boutique</p>
        <h1>Welcome to Paradise Nursery</h1>
        <AboutUs />
        <Link className="cta-button" to="/plants" onClick={handleGetStarted}>
          Get Started
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
