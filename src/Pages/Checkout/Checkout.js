import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useMutation } from "@apollo/client";
import constant from "../../utils/constant";
import Mutation from "../../graphql/Mutation";
import { billingDetailsSchema } from "../../helper/formikSchemas";
import "./Checkout.css";
import { useFormik } from "formik";

const Checkout = ({ globalStore, userStore }) => {
  const checkOutData = toJS(globalStore.checkOutData);
  const countryListData = toJS(globalStore.countryList);
  const billingAddress = toJS(userStore.userBillingData);
  const isLogin = toJS(userStore.user) || localStorage.getItem(constant.prfUserToken)

  const [userDetail, setUserDetail] = useState({
    fName: billingAddress?.fName,
    lName: billingAddress?.lName,
    address: billingAddress?.address,
    city: billingAddress?.city,
    postcode: billingAddress?.postcode,
    state: billingAddress?.state,
    country: billingAddress?.country,
    phoneNo: billingAddress?.phoneNo,
    email: billingAddress?.email,
    companyName: billingAddress?.companyName,
  })
  const [subTotal, setSubTotal] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [tAndC, setTAndC] = useState(true);
  const [shipToOtherAdd, setShipToOtherAdd] = useState(false);
  const [checkOutError, setCheckOutError] = useState(null);
  const [checkOutLoading, setCheckOutLoading] = useState(false)
  const [paymentLink, setPaymentLink] = useState(null)

  const [checkoutOrder] = useMutation(Mutation.checkoutOrder, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
  const [confirmPayment] = useMutation(Mutation.confirmPayment, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  useEffect(() => {
    if (checkOutData?.length > 0) {
      const subTotalPrice = checkOutData?.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.medicine_detail.price * currentValue.medicine_detail.cart_master.qty,
        0
      );

      setSubTotal(subTotalPrice);
    }
  }, [checkOutData]);

  useEffect(() => {
    if (countryListData?.length > 0) {
      const charge = countryListData.find((ele) => ele.country === "USA");
      setShippingCharge(charge.shipping_charge);
    }
  }, [countryListData]);

  const handleCheckOut = (values) => {
    setCheckOutLoading(true);
    setCheckOutError(null)

    const orderItems = []
    checkOutData.forEach((data) => {
      orderItems.push({
        cartId: data.medicine_detail.cart_master.id,
        price: data.medicine_detail.price,
        productId: data.medicine_detail.id,
        shipping_charge: shippingCharge,
        subtotal: data.medicine_detail.price * data.medicine_detail.cart_master.qty
      })
    })

    const checkOutVariable = {
      fName: values.fName,
      lName: values.lName,
      address: values.address,
      city: values.city,
      postcode: values.postcode,
      state: values.state,
      country: values.country,
      phoneNo: String(values.phoneNo),
      email: values.email,
      orderItems: orderItems
    }

    console.log("checkOutVariable", checkOutVariable)

    checkoutOrder({ variables: checkOutVariable })
      .then((res) => {
        setPaymentLink(res.data.checkOutOrder)
        setCheckOutLoading(false)
        console.log("checkOutVariable", res)
      })
      .catch((err) => {
        setCheckOutError(err);
        setCheckOutLoading(false)
        console.log("checkOutVariable -------", err);
      });

  }

  const handleConfirmOrder = () => {
    const confirmPaymentVariable = {
      paymentId: paymentLink.id,
      total: paymentLink.transactions[0].amount.total,
      currency: paymentLink.transactions[0].amount.currency,
      href: paymentLink.links[1].href,
      rel: paymentLink.links[1].rel
    }

    confirmPayment({ variables: confirmPaymentVariable })
      .then((res) => {
        console.log("confirmPaymentVariable", res)
      })
      .catch((err) => {
        console.log("confirmPaymentVariable -------", err);
      })
  }

  const formik = useFormik({
    initialValues: userDetail,
    validationSchema: billingDetailsSchema,
    onSubmit: handleCheckOut
  });

  return (
    <>
      <section className="page-head-section">
        <Container>
          <Row>
            <Col xs="12 text-center">
              <h1 className="page-head">Checkout</h1>
              <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center">
                <Link to="">
                  <span className="d-flex align-items-center">
                    <i className="ri-home-smile-2-line me-1"></i> Home
                  </span>
                </Link>{" "}
                <b className="mx-3">::</b> <span>Checkout</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs="12">
              <li className="pt-4 mb-0">
                <b>Order Details</b>
              </li>
            </Col>
            <Col xs="12">
              <div className="table-responsive">
                <table className="product-detail-tbl mt-4 cart-table-tbl">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Code</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkOutData.length > 0 &&
                      checkOutData.map((item) => {
                        return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.sku}</td>
                            <td>{item.medicine_detail.cart_master.qty}</td>
                            <td>
                              ${item.medicine_detail.price}
                            </td>
                            <td>
                              ${item.medicine_detail.cart_master.qty * item.medicine_detail.price}
                            </td>
                          </tr>
                        );
                      })}

                    <tr>
                      <td colSpan="4" className="text-end">
                        Subtotal
                      </td>
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="text-end">
                        Shipping
                      </td>
                      <td>
                        <b>Shipping Charge: ${shippingCharge}</b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="text-end">
                        Total
                      </td>
                      <td>
                        <b>${subTotal + shippingCharge}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {
        isLogin ?
          <section className="checkout-section mt-5">
            <Container>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs="12" className="mt-4">
                    <Accordion defaultActiveKey="checkoutA0">
                      <Accordion.Item eventKey="checkoutA0">
                        <Accordion.Header>
                          <b>Billing details:</b>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Row>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="First Name"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.fName}
                                onChange={formik.handleChange("fName")}
                                onBlur={formik.handleBlur("fName")}
                                isError={
                                  formik.touched.fName && formik.errors.fName &&
                                  Boolean(formik.errors.fName)
                                }
                                errorMsg={formik.errors.fName}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Last Name"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.lName}
                                onChange={formik.handleChange("lName")}
                                onBlur={formik.handleBlur("lName")}
                                isError={
                                  formik.touched.lName && formik.errors.lName &&
                                  Boolean(formik.errors.lName)
                                }
                                errorMsg={formik.errors.lName}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Company Name"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.companyName}
                                onChange={formik.handleChange("companyName")}
                                onBlur={formik.handleBlur("companyName")}
                                isError={
                                  formik.touched.companyName && formik.errors.companyName &&
                                  Boolean(formik.errors.companyName)
                                }
                                errorMsg={formik.errors.companyName}
                              />
                            </Col>
                            <Col md="6" className="mt-4 mt-md-0">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Street address"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.address}
                                onChange={formik.handleChange("address")}
                                onBlur={formik.handleBlur("address")}
                                isError={
                                  formik.touched.address && formik.errors.address &&
                                  Boolean(formik.errors.address)
                                }
                                errorMsg={formik.errors.address}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Town / City"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.city}
                                onChange={formik.handleChange("city")}
                                onBlur={formik.handleBlur("city")}
                                isError={
                                  formik.touched.city && formik.errors.city && Boolean(formik.errors.city)
                                }
                                errorMsg={formik.errors.city}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="State"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                                value={formik.values.state}
                                onChange={formik.handleChange("state")}
                                onBlur={formik.handleBlur("state")}
                                isError={
                                  formik.touched.state && formik.errors.state && Boolean(formik.errors.state)
                                }
                                errorMsg={formik.errors.state}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Country"
                                formType="text"
                                compulsoryLabel="*"
                                customInputClassName=""
                                value={formik.values.country}
                                onChange={formik.handleChange("country")}
                                onBlur={formik.handleBlur("country")}
                                isError={
                                  formik.touched.country && formik.errors.country &&
                                  Boolean(formik.errors.country)
                                }
                                errorMsg={formik.errors.country}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Postcode"
                                compulsoryLabel="*"
                                formType="number"
                                customInputClassName=""
                                value={formik.values.postcode}
                                onChange={formik.handleChange("postcode")}
                                onBlur={formik.handleBlur("postcode")}
                                isError={
                                  formik.touched.postcode && formik.errors.postcode &&
                                  Boolean(formik.errors.postcode)
                                }
                                errorMsg={formik.errors.postcode}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Mobile Number"
                                compulsoryLabel="*"
                                formType="number"
                                customInputClassName=""
                                value={formik.values.phoneNo}
                                onChange={formik.handleChange("phoneNo")}
                                onBlur={formik.handleBlur("phoneNo")}
                                isError={
                                  formik.touched.phoneNo && formik.errors.phoneNo &&
                                  Boolean(formik.errors.phoneNo)
                                }
                                errorMsg={formik.errors.phoneNo}
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Email Address"
                                compulsoryLabel="*"
                                formType="email"
                                customInputClassName=""
                                value={formik.values.email}
                                onChange={formik.handleChange("email")}
                                onBlur={formik.handleBlur("email")}
                                isError={
                                  formik.touched.email && formik.errors.email &&
                                  Boolean(formik.errors.email)
                                }
                                errorMsg={formik.errors.email}
                              />
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col xs="12" className="mt-4">
                    <Form.Group className="mb-0" controlId="formBasicCheckbox">
                      <Form.Check
                        id="otherAdress"
                        type="radio"
                        checked={shipToOtherAdd}
                        label={<b>Ship to a differenet address ?</b>}
                        className="custom-checkbox"
                        onChange={() => setShipToOtherAdd(!shipToOtherAdd)}
                      />
                    </Form.Group>
                    {shipToOtherAdd && <Accordion defaultActiveKey="checkoutB0">
                      <Accordion.Item eventKey="checkoutB0">
                        <Accordion.Header>
                          <b>Shipping address:</b>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Row>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="First Name"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Last Name"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Company Name"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Street address"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Town / City"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Country"
                                compulsoryLabel="*"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Postcode"
                                compulsoryLabel="*"
                                formType="number"
                                customInputClassName=""
                              />
                            </Col>
                            <Col xs="12">
                              <Form.Label>Order notes</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="checkoutB1">
                        <Accordion.Header>
                          <b>Medical Condition:</b>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Row>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Medical Condition"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Physician's Telephone No"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Drug Allergies"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Current Medications:"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Current Treatments:"
                                formType="text"
                                customInputClassName=""
                              />
                            </Col>
                            <Col md="6">
                              <Form.Label>Do you Smoke?:</Form.Label>
                              <div className="d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  id="smokeradio0"
                                  label="No"
                                  name="smokeradiobtn0"
                                  className="custom-checkbox custom-radio"
                                />
                                <Form.Check
                                  type="radio"
                                  id="smokeradio1"
                                  label="Yes"
                                  name="smokeradiobtn0"
                                  className="custom-checkbox custom-radio"
                                />
                              </div>
                            </Col>
                            <Col md="6" className="mt-4 mt-md-0">
                              <Form.Label>Do you drink Alcohol?:</Form.Label>
                              <div className="d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  id="smokeradio2"
                                  label="No"
                                  name="smokeradiobtn1"
                                  className="custom-checkbox custom-radio"
                                />
                                <Form.Check
                                  type="radio"
                                  id="smokeradio3"
                                  label="Yes"
                                  name="smokeradiobtn1"
                                  className="custom-checkbox custom-radio"
                                />
                              </div>
                            </Col>
                            <Col xs="12" className="mt-4">
                              <p>
                                I certify that I am 'over 18 years' and that I am
                                under the supervision of a doctor. The ordered
                                medication is for my own personal use and is
                                strictly not meant for a re-sale. I also accept that
                                I am taking the medicine /s at my own risk and that
                                I am duly aware of all the effects / side effects of
                                the medicine / s. If my order contain Tadalafil, I
                                confirm that the same is not meant for consumption
                                in the USA. I acknowledge that the drugs are as per
                                the norms of the country of destination.
                              </p>
                            </Col>
                            <Col md="6">
                              <Form.Label>Upload Prescription:</Form.Label>
                              <Form.Control type="file" />
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>}
                  </Col>

                  <Col xs="12" className="mt-4">
                    <div className="checkout-card-details-wrap">
                      {/* <Form.Check
                  type="radio"
                  id="smokeradioCard0"
                  label="Pay By Credit/Debit Card"
                  name="smokeradioCards0"
                  className="custom-checkbox custom-radio mb-3"
                />
                <Form.Check
                  type="radio"
                  id="smokeradioCard1"
                  label="USA Bank Transfer"
                  name="smokeradioCards0"
                  className="custom-checkbox custom-radio"
                />
                  <hr /> */}
                      <p>
                        Your personal data will be used to process your order, support
                        your experience throughout this website, and for other
                        purposes described in our privacy policy.
                      </p>
                      <Form.Group className="mb-0" controlId="formBasicCheckbox">
                        <Form.Check
                          id="tandc"
                          type="checkbox"
                          defaultChecked={!tAndC}
                          label="I have read and agree to the website *"
                          className="custom-checkbox"
                          onChange={() => setTAndC(!tAndC)}
                        />
                      </Form.Group>

                      {/* {!isLogin ?
                    <Link
                      to="/login"
                      className="ms-auto d-flex"
                    > <CustomButton
                        type="submit"
                        text="Login"
                        formGroupClassName="form-group mt-4 mb-0"
                      />
                    </Link>
                    : */}
                      {paymentLink ?
                        <a href={paymentLink.links[1].href} target="_blank">
                          <CustomButton
                            onClick={() => handleConfirmOrder()}
                            type="button"
                            text="Confirm Order"
                            formGroupClassName="form-group mt-4 mb-0"
                          // disabled={tAndC}
                          />
                        </a> :
                        <>
                          <CustomButton
                            type="submit"
                            text="Place order"
                            formGroupClassName="form-group mt-4 mb-0"
                            disabled={tAndC}
                            loading={checkOutLoading}
                          />
                          {checkOutError ? <p>Somthing went wrong</p> : null}
                        </>
                      }

                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </section> :
          <p> login Place</p>
      }
    </>
  );
};

export default inject("userStore", "globalStore")(observer(Checkout));
