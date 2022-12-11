import { useLazyQuery, useMutation } from "@apollo/client";
import { Col, Container, Row, Nav, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import heroSlider0 from "./../../Assets/Images/products/product0.jpg";
import "./Cart.css";
import Querys from "../../graphql/Query";
import { useEffect, useState } from "react";
import Mutation from "../../graphql/Mutation";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const Cart = ({ globalStore }) => {
  const storeCartData = toJS(globalStore.cartData)
  const [cartData, setCartData] = useState();
  const [countryList, setCountryList] = useState([]);
  const [subTotal, setSubTotal] = useState(null);
  const [shippingCharge, setShippingCharge] = useState(null);

  console.log("storeCartData", storeCartData)

  const [viewCart, { data, loading }] = useLazyQuery(Querys.viewCart, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const [removeCart] = useMutation(Mutation.removeCartItem, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const [updateCart] = useMutation(Mutation.updateCart, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  useEffect(() => {
    viewCart();
  }, []);

  useEffect(() => {
    if (data) {
      // console.log("CART DATA", data.viewCart.cartItems);
      setCartData(data?.viewCart?.cartItems);
      setCountryList(data?.viewCart?.countryList);

      // globalStore.setCartData(data.viewCart.cartItems);
      globalStore.setCheckOutData(data?.viewCart?.cartItems);
      globalStore.setCountryList(data?.viewCart?.countryList);
    }
  }, [data]);

  useEffect(() => {
    if (cartData?.length > 0) {
      const subTotalPrice = cartData?.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.medicine_detail.price * currentValue.medicine_detail.cart_master.qty,
        0
      );

      setSubTotal(subTotalPrice);
    }
  }, [cartData]);

  useEffect(() => {
    if (countryList?.length > 0) {
      const charge = countryList.find((ele) => ele.country === "USA");
      // console.log("charge", charge);
      setShippingCharge(charge.shipping_charge);
    }
  }, [countryList]);

  const handleQuantityChange = (qty, id, items) => {
    updateCart({ variables: { updateCartId: Number(id), qty: Number(qty) } })
      .then((res) => {
        if (res) {
          viewCart()
        }
      })
      .catch((err) => {
        console.log("updateCart -------", err);
      });
  }

  const removeItem = (id) => {
    removeCart({ variables: { removeCartItemId: id } })
      .then((res) => {
        if (res) {
          viewCart();
        }
      })
      .catch((err) => {
        console.log("remove cart err-------", err);
      });
  };

  return (
    <>
      <section className="page-head-section">
        <Container>
          <Row>
            <Col xs="12 text-center">
              <h1 className="page-head">Cart</h1>
              <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center">
                <Link to="/">
                  <span className="d-flex align-items-center">
                    <i className="ri-home-smile-2-line me-1"></i> Home
                  </span>
                </Link>{" "}
                <b className="mx-3">::</b> <span>Cart</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq-section mt-5">
        <Container>
          {console.log("cartDtaa", cartData)}
          {cartData?.length === 0 || cartData === undefined ?
            <Row>
              <Col xs={12}>
                <div className="text-center my-5">
                  <div>
                    <h1>
                      <i class="ri-shopping-cart-line"></i>
                    </h1>
                  </div>
                  <div>
                    <h4>
                      <b>Your cart is currently empty.</b>
                    </h4>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <Link to="/">
                  <CustomButton
                    text="Continue Shopping"
                    formGroupClassName="form-group text-end w-100 mb-0"
                  />
                </Link>
              </Col>
            </Row>
            :
            <Row>
              <Col xs="12">
                <div className="table-responsive">
                  <table className="product-detail-tbl">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData?.length > 0 &&
                        cartData?.map((item, index) => {
                          // { console.log("items", item) }
                          return (
                            <tr>
                              <td className="">
                                <div className="d-flex align-items-center">
                                  <Link
                                    onClick={() => removeItem(item.medicine_detail.cart_master.id)}
                                    to=""
                                  >
                                    <div className="delete-cart-product me-3">
                                      <i className="ri-delete-bin-line"></i>
                                    </div>
                                  </Link>
                                  <div className="cart-product-img">
                                    <Image
                                      src={heroSlider0}
                                      fluid
                                      alt=""
                                      className="img-cover w-100 h-100"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <Link to="#">{item?.title}</Link>
                              </td>
                              <td>${item?.medicine_detail?.price}</td>
                              <td>
                                <Form.Select
                                  value={item?.medicine_detail?.cart_master?.qty}
                                  onChange={(e) => handleQuantityChange(e.target.value, item.medicine_detail.cart_master.id, item)}
                                >
                                  {[...Array(50).keys()].map((ele) => {
                                    return <option value={ele}>{ele}</option>;
                                  })}
                                </Form.Select>
                              </td>
                              <td>
                                ${item?.medicine_detail?.price * item?.medicine_detail?.cart_master.qty}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {/* <div className="apply-code d-flex align-items-center flex-wrap w-100">
                <Link to="#" className="ms-auto d-flex">
                  <CustomButton
                    text="Update cart"
                    formGroupClassName="form-group mb-0"
                  />
                </Link>
              </div> */}
              </Col>
              <Col xs="12" className="mt-4">
                <h6>Card Totals</h6>
                <Nav
                  as="ul"
                  className="nav-ul-block product-detail-content mt-3 card-total-box"
                >
                  <Nav.Item as="li">
                    <b>Subtotal:</b>
                    <span>${subTotal}</span>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <b>Shipping:</b>
                    <span className="d-flex align-items-center">
                      Shipping Charge:{" "}
                      <b className="p-0 bg-transparent ms-3">${shippingCharge}</b>
                    </span>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <b>Total:</b>
                    <span>
                      <b className="p-0 bg-transparent">${subTotal + shippingCharge}</b>
                    </span>
                  </Nav.Item>
                </Nav>
                <Link to="/checkout" className="ms-auto d-flex">
                  <CustomButton
                    text="Process to Chekout"
                    formGroupClassName="form-group mb-0 mt-3"
                  // onClick={handleCheckout}
                  />
                </Link>
              </Col>
            </Row>}
        </Container>
      </section>
    </>
  );
};

export default inject("globalStore")(observer(Cart));
