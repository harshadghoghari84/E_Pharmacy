import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { billingDetailsSchema } from "../../helper/formikSchemas";
import "./Checkout.css";
import { useFormik } from "formik";

const Checkout = ({ globalStore }) => {
  const checkOutData = toJS(globalStore.checkOutData);
  const countryListData = toJS(globalStore.countryList);

  const [subTotal, setSubTotal] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  useEffect(() => {
    if (checkOutData?.length > 0) {
      const subTotalPrice = checkOutData?.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.medicine_detail.cart_master.subtotal,
        0
      );
      console.log("subTotalPrice", subTotalPrice);
      setSubTotal(subTotalPrice);
    }
  }, [checkOutData]);

  useEffect(() => {
    if (countryListData?.length > 0) {
      const charge = countryListData.find((ele) => ele.country === "USA");

      console.log("charge", charge);
      setShippingCharge(charge.shipping_charge);
    }
  }, [countryListData]);

  console.log("checkout data :", checkOutData);

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      address: "",
      city: "",
      postcode: "",
      state: "",
      country: "",
      phoneNo: "",
      email: "",
      companyName: "",
    },
    validationSchema: billingDetailsSchema,
    onSubmit: ({
      fName,
      lName,
      address,
      city,
      postcode,
      state,
      country,
      phoneNo,
      email,
      companyName,
    }) => {
      console.log(
        "-----------------------------------------------",
        fName,
        lName,
        address,
        city,
        postcode,
        state,
        country,
        phoneNo,
        email,
        companyName
      );
    },
  });

  const placeOrder = () => {
    console.log("called");
    formik.handleSubmit();
  };
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
                    <i class="ri-home-smile-2-line me-1"></i> Home
                  </span>
                </Link>{" "}
                <b className="mx-3">::</b> <span>Checkout</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="checkout-section mt-5">
        <Container>
          <Row>
            {/* <Col xs="12">
              <div className="checkout-head mb-4">
                Returning customer?{" "}
                <Link to="#">
                  <b>Click here to login</b>
                </Link>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <CustomInput
                    formGroupClassName="form-group"
                    formLabel="Have a coupon?"
                    formType="text"
                    customInputClassName=""
                    placeholder="Apply Code"
                  />
                  <Link to="/" className="ms-2 apply-cuppon-txt">
                    <b>Apply Cuppon</b>
                  </Link>
                </div>
              </div>
            </Col> */}
            <Col xl="6" className="mt-4">
              <Accordion defaultActiveKey="checkoutA0">
                <Accordion.Item eventKey="checkoutA0">
                  <Accordion.Header>
                    <b>Billing details:</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form className="">
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
                            isError={
                              formik.errors.fName &&
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
                            isError={
                              formik.errors.lName &&
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
                            isError={
                              formik.errors.companyName &&
                              Boolean(formik.errors.companyName)
                            }
                            errorMsg={formik.errors.companyName}
                          />
                        </Col>
                        {/* <Col md="6">
                          <Form.Label>
                            Country / Region{" "}
                            <span className="color-red">*</span>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="form-control cutom-input"
                          >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                          <CustomInput
                            formGroupClassName="form-group"
                            formLabel="Country / Region"
                            formType="text"
                            customInputClassName=""
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            isError={
                              formik.errors.country &&
                              Boolean(formik.errors.country)
                            }
                            errorMsg={formik.errors.country}
                          />
                        </Col> */}
                        <Col md="6" className="mt-4 mt-md-0">
                          <CustomInput
                            formGroupClassName="form-group"
                            formLabel="Street address"
                            compulsoryLabel="*"
                            formType="text"
                            customInputClassName=""
                            value={formik.values.address}
                            onChange={formik.handleChange("address")}
                            isError={
                              formik.errors.address &&
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
                            isError={
                              formik.errors.city && Boolean(formik.errors.city)
                            }
                            errorMsg={formik.errors.city}
                          />
                        </Col>
                        <Col md="6">
                          <CustomInput
                            formGroupClassName="form-group"
                            formLabel="Country"
                            formType="text"
                            customInputClassName=""
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            isError={
                              formik.errors.country &&
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
                            isError={
                              formik.errors.postcode &&
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
                            isError={
                              formik.errors.phoneNo &&
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
                            isError={
                              formik.errors.email &&
                              Boolean(formik.errors.email)
                            }
                            errorMsg={formik.errors.email}
                          />
                        </Col>
                      </Row>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="checkoutA1">
                  <Accordion.Header>
                    <b>Create an account?:</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form className="">
                      <Row>
                        <Col md="6">
                          <CustomInput
                            formGroupClassName="form-group"
                            formLabel="Create account password "
                            compulsoryLabel="*"
                            formType="password"
                            customInputClassName=""
                          />
                        </Col>
                        <Col md="6">
                          <CustomInput
                            formGroupClassName="form-group"
                            formLabel="Confirm password"
                            compulsoryLabel="*"
                            formType="password"
                            customInputClassName=""
                          />
                        </Col>
                      </Row>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xl="6" className="mt-4">
              <Accordion defaultActiveKey="checkoutB0">
                <Accordion.Item eventKey="checkoutB0">
                  <Accordion.Header>
                    <b>Ship to a different address?:</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form className="">
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
                          <Form.Label>
                            Country / Region{" "}
                            <span className="color-red">*</span>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className="form-control cutom-input"
                          >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
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
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="checkoutB1">
                  <Accordion.Header>
                    <b>Medical Condition:</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form className="">
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
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                              ${item.medicine_detail.cart_master.subtotal}
                            </td>
                            <td>
                              ${item.medicine_detail.cart_master.subtotal}
                            </td>
                          </tr>
                        );
                      })}

                    <tr>
                      <td colspan="4" className="text-end">
                        Subtotal
                      </td>
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td colspan="4" className="text-end">
                        Shipping
                      </td>
                      <td>
                        <b>Shipping Charge: ${shippingCharge}</b>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4" className="text-end">
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
                /> */}
                <hr />
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <Form.Group className="mb-0" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I have read and agree to the website *"
                    className="custom-checkbox"
                  />
                </Form.Group>
                <Link
                  onClick={() => placeOrder()}
                  to=""
                  className="ms-auto d-flex"
                >
                  <CustomButton
                    // onClick={() => placeOrder()}
                    // type="submit"
                    text="Place order"
                    formGroupClassName="form-group mt-4 mb-0"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default inject("globalStore")(observer(Checkout));
