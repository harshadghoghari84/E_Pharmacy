import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faq from "./Pages/Faq/Faq";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import "./App.css";
import OrderRecieve from "./Pages/OrderRecieve/OrderRecieve";
import CategoryProduct from "./Pages/CategoryProduct/CategoryProduct";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyAccountDetails from "./Pages/MyAccount/MyAccountDetails/MyAccountDetails";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/contact-us"} element={<ContactUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        <Route path={"/terms-conditions"} element={<TermsConditions />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/order-recieve"} element={<OrderRecieve />} />
        <Route path={"/category-product"} element={<CategoryProduct />} />
        <Route path={"/product-details"} element={<ProductDetails />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/my-account"} element={<MyAccount />} />
        <Route path={"/my-account-details"} element={<MyAccountDetails />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;