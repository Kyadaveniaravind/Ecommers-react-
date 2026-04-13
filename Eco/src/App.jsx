import Nav from "./components/Nav";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Check from "./pages/Check";   
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}