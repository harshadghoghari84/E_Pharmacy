import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import constant from "../../utils/constant";

function Footer({ userStore }) {

    const isLogin = toJS(userStore.user) || (localStorage.getItem(constant.prfUserToken))

    return (
        <>
            <footer>
                <Container className="footer-container">
                    <Row>
                        <Col sm={12} lg={6}>
                            <Row>
                                <Row>
                                    <h4 className="footer-title">Information</h4>
                                </Row>
                                <Col xs={12} sm={6}>
                                    <div className="footer-col">
                                        <Nav as="ul" className="nav-ul-block">
                                            <Nav.Item as="li">
                                                <Link to={isLogin ? "my-account-details" : "my-account"}>My account</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="blog">Blog</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="about-us">About Us</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="contact-us">Contact Us</Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="footer-col">
                                        {/* <h4 className="disply-none">Information</h4> */}
                                        <Nav as="ul" className="nav-ul-block">
                                            <Nav.Item as="li">
                                                <Link to="faq">FAQs</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="privacy-policy">Privacy Policy</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="terms-conditions">Terms and conditions</Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Link to="/">How To Track Order</Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-col">
                                <h4 className="footer-title">Store Information</h4>
                                <Nav as="ul" className="nav-ul-block">
                                    <Nav.Item as="li">
                                        <Link to="category-product">+1 888-800-8358</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">info@Epharmacy</Link>
                                    </Nav.Item>

                                </Nav>
                                <div className="header-social-ico d-md-none">
                                    <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                    <Link to="/"><i className="ri-instagram-line"></i></Link>
                                    <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                    <Link to="/"><i className="ri-mail-send-line"></i></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-col">
                                <Nav as="ul" className="nav-ul-block">
                                    <h4 className="footer-title">Hours of Operation</h4>
                                    <div className="inner-footer-ul">
                                        <Nav.Item as="li">
                                            <Link to="category-product">
                                                Monday to Friday <br />
                                                9:00am - 8:00pm (IST)
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link to="category-product">
                                                Saturday to Sunday <br />
                                                9:00am - 12:00pm (IST)
                                            </Link>
                                        </Nav.Item>
                                    </div>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Royal Plaza, Surat 395006</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <a href="javascript:void(0)" className="black-hover d-flex justify-content-center text-center text-light"><h6>Copyright &copy; 2022 Epharmacy All Rights Reserved.</h6></a>
            </footer>
        </>
    )
}

export default inject("userStore", "globalStore")(observer(Footer))