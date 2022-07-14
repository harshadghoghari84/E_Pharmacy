import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Faq.css";
export default function Faq() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Faq</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to=""><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Faq</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1 className="inner-page-big-title">Faq</h1>
                            <div className="faq-data">
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>What is the CVV number when you ask for on your sign-up pages? Where can I see it?</b></h5>
                                    <p>Cvv is an anti-fraud protection function to help to be sure you are in possession of your credit card. For Visa/Mastercard, the three-digit CVV digits are printed on the signature panel on the back of the credit card immediately after the card's account digits. For United States express, the four-digit CVV digits are printed on the front of the card above the card account digits. Visa/MasterCard a 3-digit number in use reverse to get italic on the back again of your credit card american express a 4-digit number on the front, just above your credit card number.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>What is your credit card explanation in my credit card statement?</b></h5>
                                    <p>Before charge your card, we always suggest our credit card explanation label. So, still, make sure that our charge appears in your card documents as per our information and facts in the mail, so, during your cc statement, you should make sure it is from <Link to="/" className="highlight-link-txt">GenericVilla.com</Link> please note that the information and facts are submitted via SSL protected, encrypted site and that there is no risk of fraud.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>How to pay credit card if special payment?</b></h5>
                                    <p>After your verification, you can pay by below advice</p>
                                    <Nav as="ul" className="nav-ul-block">
                                        <Nav.Item as="li" className="mt-3">Step 1: open email ( which you accepted from PayPal )</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 2: click on continue</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 3: make payment by CC (Credit Card) (visa, master, Amex, discover )</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 4: fill your all information and make payment</Nav.Item>
                                    </Nav>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Why is my order on “incomplete payment process” or “want to pay” or “pending e-check payment”?</b></h5>
                                    <p>When the order is in this status, it means that your actual order has not been approved. You may contact us to finish the transaction procedure, or you may ignore the request if you are looking to stop the same.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Why is my order on “dispensing”?</b></h5>
                                    <p>Before charge your card, we always inform our credit card description name. So, make sure that our charge appears in your card statements as per our information in the mail, so, during your credit card statement, make sure that it's from genericvilla.com, please note that the detail is submitted via SSL secured, encrypted page and that there is no hazard of fraud.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Why is my order on “hold order”?</b></h5>
                                    <p>After your verification, you can pay by below advise</p>
                                    <Nav as="ul" className="nav-ul-block">
                                        <Nav.Item as="li" className="mt-3">Step 1: open email ( which you accepted from PayPal )</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 2: click on continue</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 3: make payment by CC (Credit Card) (visa, master, Amex, discover )</Nav.Item>
                                        <Nav.Item as="li" className="mt-3">Step 4: fill your all information and make payment</Nav.Item>
                                    </Nav>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Why Choose Generic Villa?</b></h5>
                                    <p>We believe in directing our abilities and expertise in delivering and growing top quality, in online drugstore services which are not gained by accident. Our guarantee to provide and maintain the present quality of work forms the basis of our work philosophy, a claim endorsed by online pharmacy reports</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>Generic Villa:</b></h5>
                                    <p>We believe as we improve our work quality we will be one step nearer to helping you enhance your lives with good health and enjoyment. We would like to see our customers live a life filled with long-life and facilities. This is Generic villa’s dedication towards the community.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>100% Delivery Guarantee:</b></h5>
                                    <p>If at all times, for any purpose you are not satisfied, we will problem a total refund to you as Piace of our 100% Not any Questions Asked 100% Money Back Guarantee. We believe that you should not be liable to maintain a product if you are not completely happy. Generally, that will typically never be the case, but we like to have it known that we are all about this money back guarantee. We believe anybody will be able to have a promise, and we want you to know that we have one available for you. 100% Total satisfaction Guarantee Additionally, as a part of our 100% Satisfaction Guarantee, if you are not happy with the results of the product, we will deliver an alternate company to you at our cost. When you find yourself not happy with one of the prescription medicine, contact us directly. We will see the basic cause of the problem, or if you would like to send it back, we offer no hassle choice for that as well.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}