import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Form, Nav, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ProductSlider from "./ProductSlider/ProductSlider";
import "./ProductDetails.css";
import { useLazyQuery, useMutation } from "@apollo/client";
import Querys from "../../graphql/Query";
import Mutation from "../../graphql/Mutation";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const ProductDetails = ({ globalStore }) => {
  const { productId } = useParams();
  console.log("productId", productId);

  const productQty = toJS(globalStore.selectedProductQty);
  const checkOutData = toJS(globalStore.cartData);

  const [quantity, setQuantity] = useState(1);

  const [selectedProduct, { data }] = useLazyQuery(Querys.getSelectedProduct, {
    fetchPolicy: "no-cache",
  });

  const [addToCart, { data: cartData, loading, error }] = useMutation(
    Mutation.addToCart,
    {
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (error) {
      console.log("cart error ", error);
    }
    if (cartData) {
      console.log("cartData ", cartData);
    }
  }, [cartData, error]);

  useEffect(() => {
    if (productId) {
      selectedProduct({
        variables: { productId: parseInt(productId) },
      });
    }
  }, [productId]);

  console.log("selected product data", data);
  console.log("checkOutData", checkOutData);

  const selectedProductData = data?.getSelectedProduct?.selectedProduct;

  const handleAddToCart = (id) => {
    console.log("productQty ,", productQty);

    let product = productQty.find((ele) => ele.medicineId === id);
    console.log("product---", product);
    if (product) {
      addToCart({ variables: product }).then((res) => {
        console.log("res", res);
        globalStore.setCartData(res.data.addToCart.cartItems);
      });
    } else {
      addToCart({ variables: { medicineId: id, qty: 1 } }).then((res) => {
        globalStore.setCartData(res.data.addToCart.cartItems);
      });
    }
  };
  console.log("quantity", quantity);
  return (
    <>
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="5" xl="4" className="text-center">
              <ProductSlider image={selectedProductData?.img_url} />
            </Col>
            <Col lg="7" xl="8" className="mt-4 mt-lg-0">
              <h5>
                <b>{selectedProductData?.title}</b>
              </h5>
              {/* <h5 className="primary-color">
                <b>Rs.150</b>
              </h5> */}
              <p>{selectedProductData?.indication}</p>
              <Nav as="ul" className="nav-ul-block product-detail-content">
                <Nav.Item as="li">
                  <b>Active Ingredient(Generic Name):</b>
                  <span>{selectedProductData?.ingredient}</span>
                </Nav.Item>
                <Nav.Item as="li">
                  <b>Indication:</b>
                  <span>{selectedProductData?.indication}</span>
                </Nav.Item>
                <Nav.Item as="li">
                  <b>Packaging:</b>
                  <span>4 Tablets in strip</span>
                </Nav.Item>
                <Nav.Item as="li">
                  <b>Manufacturer:</b>
                  <span>{selectedProductData?.manufacturer}</span>
                </Nav.Item>
              </Nav>
              <h6 className="mt-4">
                Delivery Time :{" "}
                <span className="primary-color">
                  {selectedProductData?.delivery_time_min} to{" "}
                  {selectedProductData?.delivery_time_max} days
                </span>
              </h6>
            </Col>
            {selectedProductData?.medicine_details?.length > 0 ? (
              <Col xs="12" className="mt-5">
                <div className="product-detail-tbl-highlight">
                  <h6 className="text-center mb-0">
                    {selectedProductData?.title}
                  </h6>
                </div>
                <div className="table-responsive">
                  <table className="product-detail-tbl">
                    <thead>
                      <tr>
                        <th>50mg</th>
                        <th>Price:</th>
                        <th>Price/unit</th>
                        <th>Quantity</th>
                        <th>Add To Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProductData?.medicine_details?.map((item) => {
                        return (
                          <tr>
                            <td>{item.piece} Tablet/s</td>
                            <td>${item.price}.00</td>
                            <td>${item.price / item.piece}/Piece</td>
                            <td>
                              <Form.Select
                                as="select"
                                onChange={(e) => {
                                  globalStore.setSelectProductQty(
                                    item.id,
                                    parseInt(e.target.value)
                                  );
                                  setQuantity(e.target.value);
                                }}
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </Form.Select>
                            </td>
                            <td>
                              <Link
                                onClick={() => handleAddToCart(item.id)}
                                to=""
                              >
                                Add to Cart
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            ) : null}
            {checkOutData.length > 0 && (
              <div className="view-cart">
                <Link to="/cart">
                  <CustomButton
                    text="View Cart"
                    formGroupClassName="form-group mt-4 mb-0"
                  />
                </Link>
              </div>
            )}
            <Col xs="12" className="mt-5">
              <span className="mb-1 d-block inner-page-small-title">
                Customer Review
              </span>
              <h1 className="inner-page-big-title">Reviews</h1>
              <div className="mt-5">
                <p>There are no reviews yet.</p>
                <p>Be the first to review "Da Sutra 30 X"</p>
                <p>Your email address will not be published.</p>
                <Form className="product-review-form">
                  <CustomInput
                    formGroupClassName="form-group"
                    formLabel="Name"
                    formType="Name"
                    customInputClassName=""
                  />
                  <CustomInput
                    formGroupClassName="form-group"
                    formLabel="Email Address"
                    formType="email"
                    customInputClassName=""
                  />
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  <Link to="#">
                    <CustomButton
                      text="Submit"
                      formGroupClassName="form-group mt-4 mb-0"
                    />
                  </Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default inject("globalStore")(observer(ProductDetails));
