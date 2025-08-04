import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Headers from "./components/Headers";
import AboutEmployee from "./pages/AboutEmployee";
import AboutCompany from "./pages/AboutCompany";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Headers className="flex justify-center align-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<AboutEmployee />} />
          <Route path="company" element={<AboutCompany />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
