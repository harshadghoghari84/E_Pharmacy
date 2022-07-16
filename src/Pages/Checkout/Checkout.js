import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./Checkout.css";
export default function Checkout() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Checkout</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to=""><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Checkout</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="checkout-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="checkout-head mb-4">Returning customer? <Link to="#"><b>Click here to login</b></Link></div>
                            <div>
                                <div className="d-flex align-items-center">
                                    <CustomInput formGroupClassName="form-group" formLabel="Have a coupon?" formType="text" customInputClassName="" placeholder="Apply Code"/>
                                    <Link to="/" className="ms-2"><b>Apply Cuppon</b></Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" className="mt-4">
                            <Accordion defaultActiveKey="checkoutA0">
                                            <Accordion.Item eventKey="checkoutA0">
                                                <Accordion.Header><b>Billing details:</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form className="">
                                                        <Row>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="First Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Last Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Company Name" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <Form.Label>Country / Region <span className="color-red">*</span></Form.Label>
                                                                <Form.Select aria-label="Default select example" className="form-control cutom-input">
                                                                    <option>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Street address" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Town / City" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Country" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Postcode" compulsoryLabel="*" formType="number" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Mobile Number" compulsoryLabel="*" formType="number" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Email Address" compulsoryLabel="*" formType="email" customInputClassName=""/>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="checkoutA1">
                                                <Accordion.Header><b>Create an account?:</b></Accordion.Header>
                                                <Accordion.Body>
                                                <Form className="">
                                                        <Row>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Create account password " compulsoryLabel="*" formType="password" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Confirm password" compulsoryLabel="*" formType="password" customInputClassName=""/>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            </Accordion>
                        </Col>
                        <Col xs="6" className="mt-4">
                        <Accordion defaultActiveKey="checkoutB0">
                                            <Accordion.Item eventKey="checkoutB0">
                                                <Accordion.Header><b>Ship to a different address?:</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form className="">
                                                        <Row>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="First Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Last Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Company Name" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <Form.Label>Country / Region <span className="color-red">*</span></Form.Label>
                                                                <Form.Select aria-label="Default select example" className="form-control cutom-input">
                                                                    <option>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Street address" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Town / City" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Country" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Postcode" compulsoryLabel="*" formType="number" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="12">
                                                                <Form.Label>
                                                                    Order notes
                                                                </Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="checkoutB1">
                                                <Accordion.Header><b>Medical Condition:</b></Accordion.Header>
                                                <Accordion.Body>
                                                <Form className="">
                                                        <Row>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Medical Condition" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Physician's Telephone No" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Drug Allergies" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Current Medications:" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
                                                                <CustomInput formGroupClassName="form-group" formLabel="Current Treatments:" formType="text" customInputClassName=""/>
                                                            </Col>
                                                            <Col xs="6">
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
                                                            <Col xs="6">
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
                                                                <p>I certify that I am 'over 18 years' and that I am under the supervision of a doctor. The ordered medication is for my own personal use and is strictly not meant for a re-sale. I also accept that I am taking the medicine /s at my own risk and that I am duly aware of all the effects / side effects of the medicine / s. If my order contain Tadalafil, I confirm that the same is not meant for consumption in the USA. I acknowledge that the drugs are as per the norms of the country of destination.</p>
                                                            </Col>
                                                            <Col xs="6">
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
                        <table className='product-detail-tbl mt-4 cart-table-tbl'>
                                <thead>
                                    <tr>
                                        <th>
                                        Product Name
                                        </th>
                                        <th>
                                        Product Code	
                                        </th>
                                        <th>
                                        Quantity
                                        </th>
                                        <th>
                                        Unit Price	
                                        </th>
                                        <th>
                                        Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        Cenforce 200mg Sildenafil  - 90 Tablet/s 	
                                        </td>
                                        <td>
                                        GV53611-01	
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                        $95.00	
                                        </td>
                                        <td>
                                        $95.00
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colspan="4" className="text-end">Subtotal</td>
                                        <td>$95.00</td>
                                    </tr>
                                    <tr >
                                        <td colspan="4" className="text-end">Shipping</td>
                                        <td><b>Shipping Charge: $30.00</b></td>
                                    </tr>
                                    <tr >
                                        <td colspan="4" className="text-end">Total</td>
                                        <td><b>$125.00</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col xs="12" className="mt-4">
                            <div className="checkout-card-details-wrap">
                                <Form.Check 
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
                                <hr/>
                                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                <Form.Group className="mb-0" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I have read and agree to the website *" className="custom-checkbox" />
                                </Form.Group>
                                <Link to="/" className="ms-auto d-flex"><CustomButton text="Place order" formGroupClassName="form-group mt-4 mb-0"/></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}