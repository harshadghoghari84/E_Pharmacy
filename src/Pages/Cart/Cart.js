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

const Cart = ({ globalStore }) => {
  const [cartData, setCartData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [subTotal, setSubTotal] = useState(null);
  const [shippingCharge, setShippingCharge] = useState(null);

  const [viewCart, { data, loading }] = useLazyQuery(Querys.viewCart, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const [removeCart] = useMutation(Mutation.removeCartItem, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  useEffect(() => {
    viewCart();
  }, []);

  useEffect(() => {
    if (data) {
      console.log("CART DATA", data);
      setCartData(data.viewCart.cartItems);
      globalStore.setCartData(data.viewCart.cartItems);
      globalStore.setCheckOutData(data.viewCart.cartItems);
      globalStore.setCountryList(data.viewCart.countryList);
      setCountryList(data.viewCart.countryList);
    }
  }, [data]);

  useEffect(() => {
    if (cartData?.length > 0) {
      console.log("cartData----------", cartData);
      const subTotalPrice = cartData?.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.medicine_detail.cart_master.subtotal,
        0
      );
      console.log("subTotalPrice", subTotalPrice);
      setSubTotal(subTotalPrice);
      let productQty = [];
      cartData.map((ele) => {
        productQty.push(ele.medicine_detail.cart_master.qty);
      });
      console.log("productQty", productQty);
      setQuantity(productQty);
    }
  }, [cartData]);

  useEffect(() => {
    if (countryList?.length > 0) {
      const charge = countryList.find((ele) => ele.country === "USA");

      console.log("charge", charge);
      setShippingCharge(charge.shipping_charge);
    }
  }, [countryList]);

  const removeItem = (id) => {
    removeCart({ variables: { removeCartItemId: id } })
      .then((res) => {
        console.log("res", res);
        if (res) {
          viewCart();
        }
      })
      .catch((err) => {
        console.log("remove cart err-------", err);
      });
  };

  console.log("cartData", cartData);
  console.log("countryList", countryList);
  console.log("quantity", quantity);
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
                    <i class="ri-home-smile-2-line me-1"></i> Home
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
          <Row>
            <Col xs="12">
              <Link to="category-product">
                <CustomButton
                  text="Continue Shopping"
                  formGroupClassName="form-group text-end w-100 mb-3 mb-0"
                />
              </Link>
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
                    {cartData.length > 0 &&
                      cartData.map((item, index) => {
                        console.log(
                          "item.medicine_detail.cart_master.qty",
                          item.medicine_detail.cart_master.qty
                        );

                        return (
                          <tr>
                            <td className="">
                              <div className="d-flex align-items-center">
                                <Link
                                  onClick={() =>
                                    removeItem(
                                      item.medicine_detail.cart_master.id
                                    )
                                  }
                                  to=""
                                >
                                  <div className="delete-cart-product me-3">
                                    <i class="ri-delete-bin-line"></i>
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
                              <Link to="#">{item.title}</Link>
                            </td>
                            <td>${item.medicine_detail.price}</td>
                            <td>
                              <Form.Select
                                value={item.medicine_detail.cart_master.qty}
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {[...Array(50).keys()].map((ele) => {
                                  return <option value={ele}>{ele}</option>;
                                })}
                              </Form.Select>
                            </td>
                            <td>
                              ${item.medicine_detail.cart_master.subtotal}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="apply-code d-flex align-items-center flex-wrap w-100">
                <Link to="#" className="ms-auto d-flex">
                  <CustomButton
                    text="Update cart"
                    formGroupClassName="form-group mb-0"
                  />
                </Link>
              </div>
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
                    <b className="p-0 bg-transparent">${subTotal}</b>
                  </span>
                </Nav.Item>
              </Nav>
              <Link to="/checkout" className="ms-auto d-flex">
                <CustomButton
                  text="Process to Chekout"
                  formGroupClassName="form-group mb-0 mt-3"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default inject("globalStore")(observer(Cart));
