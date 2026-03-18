import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/plants"
          element={
            <>
              <Header />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartItem />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
