import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TermsConditions.css";
export default function TermsConditions() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Terms Conditions</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Terms Conditions</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-3 mt-sm-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1 className="inner-page-big-title">Terms Conditions</h1>
                            <div className="faq-data">
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Your Personal Information</b></h5>
                                    <p>At Generic villa, we know your rights to confidentiality and are being committed to securing your privacy. We are using this information that we can gather at our site to offer you the best shopping experience. Whenever you order, you will be asked to set-up accounts which will include your email address, mailing address, name, credit card number, and expiry date as well as other pieces of information when you order for drugs. We protect the pieces of information on your account details against any unauthorized release or access. We do not give any classified individual information to any other person only if we need to do so legally.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Security</b></h5>
                                    <p>Whenever an order is placed online, your private information is being in code using SSL encryptions technology before they are being sent through the Internet. This makes it very difficult for your data to be intercepted or stolen while it is being transferred to Epharmacy. Your credit card data is kept in codes in a remote databank, so it is not connected to the internet, and therefore, it is safe.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Your Consent</b></h5>
                                    <p>When using our website, your consent to gathering and use this information by Generic Villa, if we are ever going to amend our privacy policy, we must post the changes to this page so that you will be informed of the information is gathered, the use of it, and under the circumstances we give it out.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Your comments</b></h5>
                                    <p>We always appreciate your response. If you have comments or questions about any of our privacy policy, be free to drop an email at support@Epharmacy</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Shipping Policies for Order</b></h5>
                                    <p>Every order will be charged a fee which is usually based on the consignment weight. Please give up to 10 working days for shipping.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Default Shipping Address</b></h5>
                                    <p>Your default shipping address is mostly used in your recent order. During the registration process, you can change the address by clicking the pick a different address list in drop down. Select another address or choose “add a new address.” You can decide to change your shipping address anytime you want in the address of your account. You can delete, edit or add any of your shipping address. The changes you make won't affect the orders that have placed already.</p>
                                    <p>The drugs that are being mentioned in our site are alternative drugs being marketed by the company and the number one brand mentioned contrary to the marketing drug are only for information/knowledge purpose for anticipated customers. It should not be misunderstood that the site has any farther intentions to market the first named drug or the site has any link with traders or manufacturers of the first named drugs.</p>
                                    <p>The website and owners are not obliged for the actions or use of any drugs mentioned on their website. Furthermore, the website does not plan to use the trademark of the name drugs because the website is not selling any drug to anticipated customers but only sharing pieces of information that are already made public.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Drug Policy</b></h5>
                                    <p>Epharmacy will not ship narcotics or a controlled substance like the Benzodiazepines to any of pharmaceutical clients.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}