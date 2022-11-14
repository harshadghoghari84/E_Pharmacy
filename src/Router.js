import { useQuery } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Query from "../src/graphql/Query";
import UserStore from "../src/mobx/UserStore";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Cart from "./Pages/Cart/Cart";
import CategoryProduct from "./Pages/CategoryProduct/CategoryProduct";
import Checkout from "./Pages/Checkout/Checkout";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyAccountDetails from "./Pages/MyAccount/MyAccountDetails/MyAccountDetails";
import OrderRecieve from "./Pages/OrderRecieve/OrderRecieve";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Register from "./Pages/Register/Register";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const AppWrapper = ({ userStore }) => {
  const { loading, error, data } = useQuery(Query.userDetail);

  const user = toJS(userStore.user);
  console.log("user", user);

  const isUser = user || !!data?.userDetail;

  console.log("isUser", isUser);

  return (
    <Router>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isUser && <Header user={data?.userDetail} />}
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={isUser ? <Home /> : <Login />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/contact-us"} element={<ContactUs />} />
            <Route path={"/faq"} element={<Faq />} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
            <Route path={"/terms-conditions"} element={<TermsConditions />} />
            <Route path={"/about-us"} element={<AboutUs />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/order-recieve"} element={<OrderRecieve />} />
            <Route
              path={"/category-product/:mainId/:subId"}
              element={<CategoryProduct />}
            />
            <Route
              path={"/product-details/:productId"}
              element={<ProductDetails />}
            />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/my-account"} element={<MyAccount />} />
            <Route
              path={"/my-account-details"}
              element={<MyAccountDetails />}
            />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default inject("userStore")(observer(AppWrapper));
