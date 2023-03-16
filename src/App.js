import "./App.css";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home/Home";
import Shop from "./app/pages/Shop";
import CategoriesAll from "./app/pages/Categories/CategoriesAll";
import ProductsAll from "./app/pages/Products/ProductsAll";
import ProductDetails from "./app/pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesAll />}></Route>
        <Route path="/products" element={<ProductsAll />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
