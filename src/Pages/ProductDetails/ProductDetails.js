import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Form, Nav, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ProductSlider from "./ProductSlider/ProductSlider";
import "./ProductDetails.css";
import constant from "../../utils/constant";
import { useLazyQuery, useMutation } from "@apollo/client";
import Querys from "../../graphql/Query";
import Mutation from "../../graphql/Mutation";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const ProductDetails = ({ userStore, globalStore }) => {
  const { productId } = useParams();

  const isLogin = toJS(userStore?.user) || localStorage.getItem(constant.prfUserToken);

  const [productData, setProductData] = useState();
  const [medicineData, setMedicineData] = useState();

  const [selectedProduct, { data: productInfo }] = useLazyQuery(Querys.getSelectedProduct, {
    fetchPolicy: "no-cache",
  });

  const [addToCart, { data: cartData, loading, error }] = useMutation(
    Mutation.addToCart,
    {
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (productId) {
      selectedProduct({
        variables: { productId: parseInt(productId) },
      });
    }
  }, [productId]);

  useEffect(() => {
    if (productInfo) {
      setProductData(productInfo?.getSelectedProduct?.relatedProduct[0])

      let medicineInfo = []
      productInfo?.getSelectedProduct?.selectedProduct?.medicine_details?.forEach((data) => {
        medicineInfo.push({ ...data, qty: 1 })
      })
      setMedicineData(medicineInfo)
    }
  }, [productInfo])

  const handleAddToCart = (id) => {
    let product = medicineData.find((ele) => ele?.id === id);

    if (product && isLogin) {
      addToCart({ variables: { medicineId: product.id, qty: product.qty } }).then((res) => {
        console.log("res", res)
      });
    }
    else {
      globalStore.setCartData({ title: productData?.title, ...product })
    }
  };

  const handleSelectMedicine = (qty, id) => {
    const tempMedicineData = [...medicineData]

    let item = tempMedicineData.find(item => item.id === id)
    if (item) {
      item.qty = Number(qty)
    }

    setMedicineData(tempMedicineData)
  }

  return (
    <>
      <section className="mt-5">
        <Container>
          <Row>
            {productData && <>
              <Col lg="5" xl="4" className="text-center">
                <ProductSlider image={productData.img_url} />
              </Col>
              <Col lg="7" xl="8" className="mt-4 mt-lg-0">
                <h5>
                  <b>{productData?.title}</b>
                </h5>
                <p>{productData?.indication}</p>
                <Nav as="ul" className="nav-ul-block product-detail-content">
                  <Nav.Item as="li">
                    <b>Active Ingredient(Generic Name):</b>
                    <span>{productData?.ingredient}</span>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <b>Indication:</b>
                    <span>{productData?.indication}</span>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <b>Packaging:</b>
                    <span>4 Tablets in strip</span>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <b>Manufacturer:</b>
                    <span>{productData?.manufacturer}</span>
                  </Nav.Item>
                </Nav>
                <h6 className="mt-4">
                  Delivery Time :{" "}
                  <span className="primary-color">
                    {productData?.delivery_time_min} to{" "}
                    {productData?.delivery_time_max} days
                  </span>
                </h6>
              </Col>
            </>
            }
            {medicineData?.length > 0 ? (
              <Col xs="12" className="mt-5">
                <div className="product-detail-tbl-highlight">
                  <h6 className="text-center mb-0">
                    {productData?.title}
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
                      {medicineData?.map((item) => {
                        return (
                          <tr>
                            <td>{item.piece} Tablet/s</td>
                            <td>${item.price}.00</td>
                            <td>${item.price / item.piece}/Piece</td>
                            <td>
                              <Form.Select
                                as="select"
                                value={item.qty}
                                onChange={(e) => { handleSelectMedicine(e.target.value, item.id) }}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
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
            {/* {checkOutData.length > 0 && ( */}
            <div className="view-cart">
              <Link to="/cart">
                <CustomButton
                  text="View Cart"
                  formGroupClassName="form-group mt-4 mb-0"
                />
              </Link>
            </div>
            {/* )} */}
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
