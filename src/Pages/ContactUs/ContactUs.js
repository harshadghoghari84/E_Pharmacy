import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import contactUsImg from "./../../Assets/Images/contact-img.svg";
import "./ContactUs.css";

export default function ContactUs() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Contact Us</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Contact</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-us-section py-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <span className="mb-1 d-block inner-page-small-title">Come Visit Us At</span>
                            <h1 className="inner-page-big-title">Our Address</h1>
                        </Col>
                        <Col xs="4">
                            <Link to="#">
                                <div className="our-addressBox">
                                    <div className="add-roundBox">
                                        <i className="ri-map-pin-line"></i>
                                    </div>
                                    <h6>Office Address</h6>
                                    <p>304, Anupam Business Hub, near paladium mall, Yogichowk, Surat, Gujarat, 395010</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="4">
                            <Link to="#">
                                <div className="our-addressBox">
                                    <div className="add-roundBox">
                                        <i class="ri-phone-find-line"></i>
                                    </div>
                                    <h6>Our Phone Number</h6>
                                    <p>+91 6598471030</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs="4">
                            <Link to="#">
                                <div className="our-addressBox">
                                    <div className="add-roundBox">
                                        <i class="ri-road-map-line"></i>
                                    </div>
                                    <h6>Our Email</h6>
                                    <p>epharmacy@gmail.com</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5 contact-us-form-section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs="5">
                            <span className="mb-1 d-block inner-page-small-title">Come Visit Us At</span>
                            <h1 className="inner-page-big-title">Get in Touch</h1>

                            <Form className="mt-5">
                                <CustomInput formGroupClassName="form-group" formLabel="Name" formType="text" customInputClassName=""/>
                                <CustomInput formGroupClassName="form-group" formLabel="Email Address" formType="email" customInputClassName=""/>
                                <CustomInput formGroupClassName="form-group" formLabel="Phone" formType="number" customInputClassName=""/>
                                <Link to="/"><CustomButton text="Submit" formGroupClassName="form-group text-start w-100 mt-5 mb-0"/></Link>
                            </Form>
                        </Col>
                        <Col xs="7">
                            <Image src={contactUsImg} fluid alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5 contact-us-map-section">
                <Container>
                    <Row>
                        <Col xs="12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264374652!2d72.75225623680046!3d21.15934583219656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1657564910023!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}