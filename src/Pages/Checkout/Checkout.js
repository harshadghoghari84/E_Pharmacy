import { useLazyQuery, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Mutation from "../../graphql/Mutation";
import Querys from "../../graphql/Query";
import { billingDetailsSchema, loginSchema } from "../../helper/formikSchemas";
import constant from "../../utils/constant";
import "./Checkout.css";

const Checkout = ({ globalStore, userStore }) => {
  const navigate = useNavigate()
  const { search } = useLocation();
  // console.log("params", location)

  // const checkOutData = toJS(globalStore.checkOutData);
  // const countryListData = toJS(globalStore.countryList);
  const billingAddress = toJS(userStore.userBillingData);
  const isLogin = toJS(userStore.user) || localStorage.getItem(constant.prfUserToken);

  const [countryListData, setCountryListData] = useState();
  const [checkOutData, setCheckOutData] = useState([])
  const [subTotal, setSubTotal] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [tAndC, setTAndC] = useState(true);
  // const [shipToOtherAdd, setShipToOtherAdd] = useState(false);
  const [checkOutError, setCheckOutError] = useState(null);
  const [checkOutLoading, setCheckOutLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);

  const [cnfOrderLoading, setCnfOrderLoading] = useState(false);

  const [showModal, setShowModal] = useState(false)

  const [userSignIn, { loading: signInLoading }] = useMutation(Mutation.userSignIn, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });
  const [viewCart, { data: apiCartData, loading: apiCartDataLoading, errors: cartDataError }] = useLazyQuery(Querys.viewCart, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
  const [checkoutOrder] = useMutation(Mutation.checkoutOrder, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });
  const [confirmPayment] = useMutation(Mutation.confirmPayment, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  // console.log("billingAddress", billingAddress)
  useEffect(() => {
    userStore.loadUserBillingDetails();
    viewCart();
  }, [])

  useEffect(() => {
    if (apiCartData) {
      // console.log("apiCartData", apiCartData)
      setCountryListData(apiCartData?.viewCart?.countryList)
      setCheckOutData(apiCartData?.viewCart?.cartItems);
    }
  }, [apiCartData]);

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
        cartId: data?.medicine_detail.cart_master.id,
        price: data?.medicine_detail.price,
        productId: data?.medicine_detail.id,
        shipping_charge: shippingCharge,
        subtotal: data?.medicine_detail.price * data?.medicine_detail.cart_master.qty
      })
    })

    const checkOutVariable = {
      fName: values?.fName,
      lName: values?.lName,
      address: values?.address,
      city: values?.city,
      postcode: values?.postcode,
      state: values?.state,
      country: values?.country,
      phoneNo: String(values?.phoneNo),
      email: values?.email,
      companyName: values?.companyName,
      orderItems: orderItems,
      ...(values?.shipToOtherAdd &&
      {
        fName2: values?.fName2,
        lName2: values?.lName2,
        companyName2: values?.companyName2,
        address2: values?.address2,
        city2: values?.city2,
        postcode2: values?.postcode2,
        state2: values?.state2,
        country2: values?.country2,
        orderNotes: values?.orderNotes
      }
      )
    }

    checkoutOrder({ variables: checkOutVariable })
      .then((res) => {
        localStorage.setItem("paymentDetails", JSON.stringify(res?.data?.checkOutOrder?.transactions[0]))
        setPaymentLink(res.data.checkOutOrder)
        setCheckOutLoading(false)
      })
      .catch((err) => {
        setCheckOutError(err);
        setCheckOutLoading(false)
        console.log("checkOutVariable -------", err);
      });
  }

  const handleConfirmOrder = () => {
    const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails"))

    const confirmPaymentVariable = {
      paymentId: search?.substring(11, 41),
      payerId: search?.substr(-13),
      total: paymentDetails?.amount?.total,
      currency: paymentDetails?.amount?.currency,
    }
    console.log("confirmPaymentVariable", confirmPaymentVariable, paymentLink)
    confirmPayment({ variables: confirmPaymentVariable })
      .then((res) => {
        if (res.data.confirmPayment === "Sucess") {
          setCnfOrderLoading(false);
          setShowModal(true);
          // navigate("/checkout")
        }
        // console.log("confirmPaymentVariable", res)
      })
      .catch((err) => {
        console.log("confirmPaymentVariable -------", err);
      })
  }

  useEffect(() => {
    if (search?.includes('PayerID') && search?.includes('paymentId')) {
      setCnfOrderLoading(true);
      handleConfirmOrder()
    }
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fName: "" || billingAddress?.fName,
      lName: "" || billingAddress?.lName,
      address: "" || billingAddress?.address,
      city: "" || billingAddress?.city,
      postcode: "" || billingAddress?.postcode,
      state: "" || billingAddress?.state,
      country: "" || billingAddress?.country,
      phoneNo: "" || billingAddress?.phoneNo,
      email: "" || billingAddress?.email,
      companyName: "" || billingAddress?.companyName,
      shipToOtherAdd: false,
      fName2: "",
      lName2: "",
      companyName2: "",
      address2: "",
      city2: "",
      postcode2: "",
      state2: "",
      country2: "",
      orderNotes: ""
    },
    validationSchema: billingDetailsSchema,
    onSubmit: handleCheckOut
  });

  const loginFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: ({ mobile, password }) => {
      userSignIn({
        variables: {
          mobile,
          password,
        },
      })
        .then(async ({ data, errors }) => {
          if (data) {
            userStore.loadUserBillingDetails()
            localStorage.setItem(constant.prfUserToken, data.userSingIn.token);
            userStore.setUser(data.userSingIn.user);
          }
          if (errors !== undefined) {
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  });

  if (cnfOrderLoading) {
    return (
      <div className="text-center py-5">
        <BeatLoader color="#00A3C8" />
      </div>
    )
  }

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
      {
        cartDataError ?
          <div>
            <p><b>{cartDataError[0].message}</b></p>
          </div>
          :
          apiCartDataLoading ?
            <div className="text-center py-5">
              <BeatLoader color="#00A3C8" />
            </div>
            :
            checkOutData.length === 0 ?
              <Container>
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
              </Container>
              :
              <>
                <section>
                  <Container>
                    <Row>
                      <Col xs="12">
                        <li className="pt-4 mb-0">
                          <b>Order Details</b>
                        </li>
                      </Col>
                      <Col xs="12">
                        {
                          cartDataError ?
                            <div className="text-center">
                              <b>{cartDataError?.[0]?.message}</b>
                            </div> :
                            apiCartDataLoading ?
                              <div className="text-center">
                                Loading Cart Data.......
                              </div>
                              :
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
                                    {checkOutData?.length > 0 &&
                                      checkOutData?.map((item) => {
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
                              </div>}
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
                                  type="checkbox"
                                  name="shipToOtherAdd"
                                  value={formik.values.shipToOtherAdd}
                                  checked={formik.values.shipToOtherAdd === true}
                                  label={<b>Ship to a differenet address ?</b>}
                                  className="custom-checkbox"
                                  onChange={formik.handleChange("shipToOtherAdd")}
                                />
                              </Form.Group>
                              {formik.values.shipToOtherAdd && <Accordion defaultActiveKey="checkoutB0" className="mt-3">
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
                                          {...formik.getFieldProps("fName2")}
                                          isError={
                                            formik.touched.fName2 && formik.errors.fName2 &&
                                            Boolean(formik.errors.fName2)
                                          }
                                          errorMsg={formik.errors.fName2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Last Name"
                                          compulsoryLabel="*"
                                          formType="text"
                                          customInputClassName=""
                                          {...formik.getFieldProps("lName2")}
                                          isError={
                                            formik.touched.lName2 && formik.errors.lName2 &&
                                            Boolean(formik.errors.lName2)
                                          }
                                          errorMsg={formik.errors.lName2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Company Name"
                                          formType="text"
                                          customInputClassName=""
                                          {...formik.getFieldProps("companyName2")}
                                          isError={
                                            formik.touched.companyName2 && formik.errors.companyName2 &&
                                            Boolean(formik.errors.companyName2)
                                          }
                                          errorMsg={formik.errors.companyName2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Street address"
                                          compulsoryLabel="*"
                                          formType="text"
                                          customInputClassName=""
                                          {...formik.getFieldProps("address2")}
                                          isError={
                                            formik.touched.address2 && formik.errors.address2 &&
                                            Boolean(formik.errors.address2)
                                          }
                                          errorMsg={formik.errors.address2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Town / City"
                                          compulsoryLabel="*"
                                          formType="text"
                                          customInputClassName=""
                                          {...formik.getFieldProps("city2")}
                                          isError={
                                            formik.touched.city2 && formik.errors.city2 &&
                                            Boolean(formik.errors.city2)
                                          }
                                          errorMsg={formik.errors.city2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="State"
                                          compulsoryLabel="*"
                                          formType="text"
                                          customInputClassName=""
                                          value={formik.values.state2}
                                          onChange={formik.handleChange("state2")}
                                          onBlur={formik.handleBlur("state2")}
                                          isError={
                                            formik.touched.state2 && formik.errors.state2 && Boolean(formik.errors.state2)
                                          }
                                          errorMsg={formik.errors.state2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Country"
                                          compulsoryLabel="*"
                                          formType="text"
                                          customInputClassName=""
                                          {...formik.getFieldProps("country2")}
                                          isError={
                                            formik.touched.country2 && formik.errors.country2 &&
                                            Boolean(formik.errors.country2)
                                          }
                                          errorMsg={formik.errors.country2}
                                        />
                                      </Col>
                                      <Col md="6">
                                        <CustomInput
                                          formGroupClassName="form-group"
                                          formLabel="Postcode"
                                          compulsoryLabel="*"
                                          formType="number"
                                          customInputClassName=""
                                          {...formik.getFieldProps("postcode2")}
                                          isError={
                                            formik.touched.postcode2 && formik.errors.postcode2 &&
                                            Boolean(formik.errors.postcode2)
                                          }
                                          errorMsg={formik.errors.postcode2}
                                        />
                                      </Col>
                                      <Col xs="12">
                                        <Form.Label>Order notes</Form.Label>
                                        <Form.Control
                                          as="textarea"
                                          rows={3}
                                          id="orderNotes"
                                          name="orderNotes"
                                          value={formik.values.orderNotes}
                                          {...formik.getFieldProps("orderNotes")}
                                        />
                                      </Col>
                                    </Row>
                                  </Accordion.Body>
                                </Accordion.Item>
                                {/* <Accordion.Item eventKey="checkoutB1">
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
                      </Accordion.Item> */}
                              </Accordion>}
                            </Col>
                            <Col xs="12" className="mt-4">
                              <div className="checkout-card-details-wrap">
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
                                {(paymentLink) ?
                                  <a href={paymentLink.links[1].href}>
                                    <CustomButton
                                      // onClick={() => handleConfirmOrder()}
                                      type="button"
                                      text="Confirm Order"
                                      formGroupClassName="form-group mt-4 mb-0"
                                    // disabled={tAndC}
                                    />
                                  </a>
                                  :
                                  <>
                                    <CustomButton
                                      type="submit"
                                      text="Place order"
                                      formGroupClassName="form-group mt-4 mb-0"
                                      disabled={tAndC || checkOutData.length === 0}
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
                    <section className="mt-5">
                      <Container>
                        <Row>
                          <Col>
                            <li>
                              <b>Please Login to Continue</b>
                            </li>
                          </Col>
                        </Row>
                        <Form onSubmit={loginFormik.handleSubmit} className="mt-5 border border-1 p-3">
                          <Row>
                            <Col xs={6}>
                              <CustomInput
                                placeholder="Mobile Number"
                                value={loginFormik.values.mobile}
                                onChange={loginFormik.handleChange("mobile")}
                                isError={loginFormik.errors.mobile && loginFormik.touched.mobile && Boolean(loginFormik.errors.mobile)}
                                errorMsg={loginFormik.errors.mobile}
                                formGroupClassName="form-group"
                                formLabel="Mobile"
                                formType="mobile"
                                customInputClassName=""
                              />
                            </Col>
                            <Col xs={6}>
                              <CustomInput
                                placeholder="Password"
                                value={loginFormik.values.password}
                                onChange={loginFormik.handleChange("password")}
                                isError={
                                  loginFormik.errors.password && loginFormik.touched.password && Boolean(loginFormik.errors.password)
                                }
                                errorMsg={loginFormik.errors.password}
                                formGroupClassName="form-group"
                                formLabel="Password"
                                formType="password"
                                customInputClassName=""
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <CustomButton
                                type="submit"
                                text="Login"
                                disabled={signInLoading || !loginFormik.isValid}
                                formGroupClassName="form-group text-end"
                              />
                            </Col>
                          </Row>
                        </Form>
                      </Container>
                    </section>
                }
              </>
      }

      {/* order success modal */}
      <Modal show={showModal} backdrop="static">
        <Modal.Body>
          <Row>
            <Col className="text-center">
              <span style={{ color: "#00A3C8", fontSize: "50px" }}>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <p>
                <b>
                  Woohoo, Payment Successful !!
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-end">
              <CustomButton
                onClick={() => { navigate("/"); setShowModal(false) }}
                type="button"
                text="Continue Shopping"
                formGroupClassName="form-group mt-4 mb-0"
              // disabled={tAndC}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default inject("userStore", "globalStore")(observer(Checkout));
