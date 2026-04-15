import Nav from "./components/Nav";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Check from "./pages/Check"; 
import ProductDetails from "./pages/ProductDetails";  
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/Cartcontext";
export default function App() {
  return (
    <CartProvider>
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/check" element={<Check />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </CartProvider>
  );
}