import { ApolloProvider } from "@apollo/client";
import { Provider } from "mobx-react";
import React from "react";
import GlobalStore from "../src/mobx/GlobalStore";
import UserStore from "../src/mobx/UserStore";
import client from "../src/utils/ApolloClient";
import "./App.css";
import AppWrapper from "./Router";

// function AppWrapper() {
//   const { loading, error, data } = useQuery(Query.userDetail);

//   const user = UserStore.user;
//   console.log("user", user);

//   const isUser = user || !!data?.userDetail;

//   console.log("isUser", isUser);

//   return (
//     <Router>
//       {data?.userDetail && <Header user={data?.userDetail} />}
//       <ScrollToTop />
//       <Routes>
//         <Route path={"/"} element={isUser ? <Home /> : <Login />} />
//         <Route path={"/login"} element={<Login />} />
//         <Route path={"/register"} element={<Register />} />
//         <Route path={"/contact-us"} element={<ContactUs />} />
//         <Route path={"/faq"} element={<Faq />} />
//         <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
//         <Route path={"/terms-conditions"} element={<TermsConditions />} />
//         <Route path={"/about-us"} element={<AboutUs />} />
//         <Route path={"/blog"} element={<Blog />} />
//         <Route path={"/order-recieve"} element={<OrderRecieve />} />
//         <Route
//           path={"/category-product/:mainId/:subId"}
//           element={<CategoryProduct />}
//         />
//         <Route
//           path={"/product-details/:productId"}
//           element={<ProductDetails />}
//         />
//         <Route path={"/cart"} element={<Cart />} />
//         <Route path={"/my-account"} element={<MyAccount />} />
//         <Route path={"/my-account-details"} element={<MyAccountDetails />} />
//         <Route path={"/checkout"} element={<Checkout />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

const App = () => {
  return (
    <>
      <Provider userStore={UserStore} globalStore={GlobalStore}>
        <ApolloProvider client={client}>
          <AppWrapper />
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default App;
