import { Accordion, Col, Container, Form, Image, Nav, Row, Tab} from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutCompanyNote from "../../../Components/AboutCompanyNote/AboutCompanyNote";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import product0 from "./../../../Assets/Images/products/product0.jpg";
import "./MyAccountDetails.css";
export default function MyAccountDetails() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">My Account</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to=""><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>My Account Details</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-account-details-section mt-5">
                <Container>
                    <Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Dashboard">
                        <Row>
                            <Col sm={3} className="border-end">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="Dashboard" href="#">
                                        Dashboard
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Orders" href="#">
                                        Orders
                                    </Nav.Link>
                                </Nav.Item>   
                                <Nav.Item>                                
                                    <Nav.Link eventKey="Address" href="#">
                                        Address
                                    </Nav.Link>
                                </Nav.Item>   
                                <Nav.Item> 
                                    <Nav.Link eventKey="AddressDetails" href="#">
                                        Address Details
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Dashboard">
                                    <p>Hello <b>Test</b> (not <b>Test</b>? <Link to="#" className="primary-color"><b>Log out</b></Link>)</p>
                                    <p>From your account dashboard you can view your <Link to="#" className="primary-color">recent orders</Link>, manage your <Link to="#" className="primary-color">shipping and billing addresses</Link>, and <Link to="#" className="primary-color">edit your password and account details</Link>.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Orders">
                                    <Row>
                                        <Col xs="3">
                                            <div className='product-wrap'>
                                                <div className='product-img'>
                                                    <Image src={product0} fluid alt=""/>
                                                </div>
                                                <div className='product-details'>
                                                    <p>Kamagra 100mg (Sildenafil Citrate)</p>
                                                    <span>Just $0.83 /Piece</span>
                                                    <Link to="/"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4 mb-0"/></Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="3">
                                            <div className='product-wrap'>
                                                <div className='product-img'>
                                                    <Image src={product0} fluid alt=""/>
                                                </div>
                                                <div className='product-details'>
                                                    <p>Kamagra 100mg (Sildenafil Citrate)</p>
                                                    <span>Just $0.83 /Piece</span>
                                                    <Link to="/"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4 mb-0"/></Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="3">
                                            <div className='product-wrap'>
                                                <div className='product-img'>
                                                    <Image src={product0} fluid alt=""/>
                                                </div>
                                                <div className='product-details'>
                                                    <p>Kamagra 100mg (Sildenafil Citrate)</p>
                                                    <span>Just $0.83 /Piece</span>
                                                    <Link to="/"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4 mb-0"/></Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="3">
                                            <div className='product-wrap'>
                                                <div className='product-img'>
                                                    <Image src={product0} fluid alt=""/>
                                                </div>
                                                <div className='product-details'>
                                                    <p>Kamagra 100mg (Sildenafil Citrate)</p>
                                                    <span>Just $0.83 /Piece</span>
                                                    <Link to="/"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4 mb-0"/></Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Address">
                                    <p>The following addresses will be used on the checkout page by default.</p>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span className="me-3"><b>Edit:</b></span> Billing Address <b className="mx-3">Brijesh</b></Accordion.Header>
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
                                                        <Link to="/" className="w-max-content"><CustomButton text="Save Address" formGroupClassName="form-group text-start mb-0"/></Link>
                                                    </Row>
                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span className="me-3"><b>Add:</b></span> Shipping Address <b className="mx-3">You have not set up this type of address yet.</b></Accordion.Header>
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
                                                        <Link to="/" className="w-max-content"><CustomButton text="Save Address" formGroupClassName="form-group text-start mb-0"/></Link>
                                                    </Row>
                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="AddressDetails">
                                                <Form className="">
                                                    <Row>
                                                        <Col xs="6">
                                                            <CustomInput formGroupClassName="form-group" formLabel="First Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                        </Col>
                                                        <Col xs="6">
                                                            <CustomInput formGroupClassName="form-group" formLabel="Last Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                        </Col>
                                                        <Col xs="6">
                                                            <CustomInput formGroupClassName="form-group" formLabel="Display Name" compulsoryLabel="*" formType="text" customInputClassName=""/>
                                                        </Col>
                                                        <Col xs="6">
                                                            <CustomInput formGroupClassName="form-group" formLabel="Email Address" compulsoryLabel="*" formType="email" customInputClassName=""/>
                                                        </Col>
                                                        <h4 className="mb-3"><b>Password Change</b></h4>
                                                        <Col xs="12">
                                                            <CustomInput formGroupClassName="form-group" formLabel="Current password (leave blank to leave unchanged)" formType="password" customInputClassName=""/>
                                                        </Col>
                                                        <Col xs="12">
                                                            <CustomInput formGroupClassName="form-group" formLabel="New password (leave blank to leave unchanged)" formType="password" customInputClassName=""/>
                                                        </Col>
                                                        <Col xs="12">
                                                            <CustomInput formGroupClassName="form-group" formLabel="Confirm new password" formType="password" customInputClassName=""/>
                                                        </Col>
                                                        <Link to="/" className="w-max-content"><CustomButton text="Save Change" formGroupClassName="form-group text-start mb-0"/></Link>
                                                    </Row>
                                                </Form>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>
                    </Row>
                    <AboutCompanyNote/>
                </Container>
            </section>
        </>
    )
}