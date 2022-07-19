import { Col, Container, Row, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./MyAccount.css";
export default function MyAccount() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">My Account</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>My Account</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-account-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                           <p>If you already have am account with as, please login at the <Link to="/login" className=""><b>Login page</b></Link></p>
                           <Form className="mt-4">
                                <Row>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="First Name" formType="text" customInputClassName=""/>
                                    </Col>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="Last Name" formType="text" customInputClassName=""/>
                                    </Col>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="Mobile Number" formType="number" customInputClassName=""/>
                                    </Col>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="Email Address" formType="email" customInputClassName=""/>
                                    </Col>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="Password" formType="password" customInputClassName=""/>
                                    </Col>
                                    <Col xs="6">
                                        <CustomInput formGroupClassName="form-group" formLabel="Confirm Password" formType="password" customInputClassName=""/>
                                    </Col>
                                    <Link to="/my-account-details" className="w-max-content"><CustomButton text="Register" formGroupClassName="form-group text-start mb-0"/></Link>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}