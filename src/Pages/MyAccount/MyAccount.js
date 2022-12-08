import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./MyAccount.css";
import { toJS } from "mobx";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { inject, observer } from "mobx-react";
import constant from "../../utils/constant";

function MyAccount({ userStore }) {

    const isLogin = toJS(userStore.user) || localStorage.getItem(constant.prfUserToken)

    return (
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">My Account</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i className="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>My Account</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-account-section mt-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>New Customer</h4>
                            <p><b>Register</b></p>
                            <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                            <Link to="/register">
                                <CustomButton
                                    text="Register"
                                    formGroupClassName="form-group mb-0 mt-3"
                                // onClick={handleCheckout}
                                />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <p className="mt-4">* If you already have am account with as, please login at the <Link to="/login" className=""><b>Login page</b></Link></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default inject("userStore", "globalStore")(observer(MyAccount));