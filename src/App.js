import logo from "./logo.svg";
import "./App.css";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home";
import Shop from "./app/pages/Shop";
import * as te from "tw-elements";
import CategoriesAll from "./app/pages/CategoriesAll";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesAll />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
