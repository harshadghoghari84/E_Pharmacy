import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Privacy Policy</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Privacy Policy</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1 className="inner-page-big-title">Privacy Policy</h1>
                            <div className="faq-data">
                                <div className="faq-content-list">
                                    <p>Your privacy online is essential to us. Privacy policy employs only personal information and conducted activities gotten on Generic Villa.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>What Information do we collect?</b></h5>
                                    <p>We amass the personal information's that you give whenever you are using Generic Villa website. This information is vital, example, we provide answers to questions; give you extra information on healthcare, processing your orders or coupons.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Registration on the site</b></h5>
                                    <p>Before you use any part of the site, you must first finish an online registration form. During checkout or registration process, you will be asked to give us resolved personal information that is not only limited to your name, phone number, email address and shipping, and billing address. Also, we might also ask about your organization's country of residence and/or country of residence, so that we can also agree with the appropriate laws and regulations and for gender too.</p>
                                    <p>This type of personal information can be used for billing purpose, to communicate with you concerning your orders and the site inclusive, to fulfill your requests and also for internal marketing purpose. In case we encounter any problem while we are processing your order, the personal information registered will be used to get back to you.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Other Information you provide</b></h5>
                                    <p>We gather information that you have decided to share with us. Example, you give information when you finish surveys, sign up for special discounts or coupons, contest entry forms, communicate with us, provide another delivery address.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Cookies</b></h5>
                                    <p>To personalize and improve your shopping and browsing experience, we use structure on your Internet browser that is known as a cookie. They are small files that web browser put in your computer’s hard drive. Cookies are used to let customers aware that they are your priority and also to get back essential pieces of information provide before by you, so you might not need to give another information anytime you shop using our website.</p>
                                    <p>Cookies also tell us how you discovered about us (that is either through an advert or particular site). They are not used in accessing information gotten on a secured server. This data can be obtained when you enter your password and name. If you decide to configure your browser to reject or remove our cookies, you might not be able to buy things from our site or take advantage of so many attributes.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3">Data Security</h5>
                                    <p>The site includes administrative, physical and electronic procedure to protect the confidentiality of all the personal information which provides for Secure Sockets Layer (SSL) for every financial transaction using the sites. The SSL encryption safeguards your personal information in the facilities, accessing your personal information is limited. Only the employees that require specific information access your personal information to do a particular job are given access to your personal information. Our site is protected with top securities such as Wordfence, McAfee Secure, and SSL to keep your info; we cannot assure 100% security. Complete protection is not guaranteed anywhere both offline and online.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Changes to our Policy</b></h5>
                                    <p>We have the right to adjust, amend or change the policy anytime. Please check our policy from time to time.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}