import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQ from "../app/components/FAQ";
import NotFoundPage from "../app/components/NotFoundPage";
import CategoriesAll from "../app/pages/Categories/CategoriesAll";
import CheckoutForm from "../app/pages/CheckoutForm/CheckoutForm";
import Contact from "../app/pages/Contact/Contact";
import Home from "../app/pages/Home/Home";
import ProductDetails from "../app/pages/ProductDetails/ProductDetails";
import ProductsAll from "../app/pages/Products/ProductsAll";
import Shop from "../app/pages/Shop/Shop";
import About from "../app/pages/About/About";
import Login from "../app/pages/Authentication/Login";
import ProviderSignup from "../app/pages/Authentication/Provider/ProviderSignup";
import UserSignup from "../app/pages/Authentication/User/UserSignup";
import Service from "../app/pages/Services/Service";
import Booking from "../app/pages/Booking/Booking";
const AllRoutes = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesAll />}></Route>
        <Route path="/products" element={<ProductsAll />}></Route>
        <Route path="/service/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<CheckoutForm />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/provider-signup" element={<ProviderSignup />}></Route>
        <Route path="/user-signup" element={<UserSignup />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
