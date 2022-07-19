import { Col, Container, Row, Image, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import pharmacy from "./../../Assets/Images/pharmacy.svg";
import "./AboutUs.css";
export default function AboutUs() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">About-us</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>About-us</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5">
                <Container>
                    <Row className="mt-5 align-items-center">
                        <Col xl="6">
                            <Image src={pharmacy} fluid alt=""/>
                        </Col>
                        <Col xl="6" className="mt-3 mt-xl-0">
                            <p>We, Epharmacy, are the world's most trusted <b>generic Drugs pharmacy</b>. We are offering best-value <b>generic ed</b>, skin care, men's health, women health drugs, without ever compromising on quality. We are only supplying non-restricted medicines that we sourced from <b>FDA approved</b> manufacturers. <b>Generic Villa</b> an <Link to="/" className="highlight-link-txt">online pharmacy</Link> store has strived to be The Very Best in each of the health sectors.</p>
                            <p>Leading well-known pharmaceutical companies like: manufacture the products we are offering</p>
                            <Nav as="ul" className="mb-4 about-products-list">
                                <Nav.Item as="li">
                                    <b>Sun Pharma</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Cipla</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Pfizer</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>GSK</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Ajanta Pharma</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Intas Pharma</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Torrent Pharma</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Novartis</b>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Dr. Reddy etc.</b>
                                </Nav.Item>
                            </Nav>
                            <p>Epharmacy is <b>managing by qualified Pharmacist team</b>. All contents of GenericVilla is written by certified Physicians team.</p>
                            <p>All medicines we are offering have a standard quality at the lowest affordable price.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-us-products">
                <Container>
                    <Row>
                        <Col xs="12" className="about-products-wrap">
                            <div className="about-products-col">
                                <Link to="/"><span>Sun Pharma</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Cipla</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Pfizer</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>GSK</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Ajanta Pharma</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Intas Pharma</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Torrent Pharma</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Novartis</span></Link>
                            </div>
                            <div className="about-products-col">
                                <Link to="/"><span>Dr. Reddy etc.</span></Link>
                            </div>
                        </Col>
                        <Col xs="12" className="mt-4 mt-md-5">
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>OUR QUALITY STANDARD</b></h5>
                                    <p>To offer high quality to our customers is our motto.</p>
                                    <p>All the listed medicines on <Link to="/" className="highlight-link-txt">Generic Villa</Link> is directly purchasing from the reputable manufacturer or their respected wholesaler.</p>
                                    <p>Generic alternatives are clearly stated and only sourced from FDA approved manufacturing facilities. We offer these in addition to the branded products as a more affordable alternative if this is important to you.</p>
                                    <p>At Generic Villa, you are our top priority. We uphold the highest quality and safety standards to help you take care of your family’s health. We focus on quality to not only make your life healthier, but we want you to be happy and have great tomorrows!</p>
                                    <p>When you fill a prescription online at Epharmacy or by phone or by mail, our team of pharmacists, technicians, physicians, and other staff take pride in making sure you receive the right products and qualitative services for your health needs. Whether you are filling a prescription or purchasing over-the-counter health products, we want to make your experience at Generic Villa as quick and easy as possible because we care about your health.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>OUR SERVICE STANDARD</b></h5>
                                    <p>We are a licensed pharmacy. Means we meet the high standards and quality required of an International Pharmacy, ensuring your health and safety when you order medication online from us. You can assure that our rules are always up to date.</p>
                                    <p>Our goals are always to deliver increased customer satisfaction, loyalty and positive word of mouth and in return, we know our company will continue to secure increased sales, revenues and cost savings.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>LOWEST PRICE GUARANTEE.</b></h5>
                                    <p>Over the last few years, our service provides international customers with access to the best quality still affordable drugs backed by our world-class Patient service and support. This extensive experience has given us the knowledge and the contacts to source low priced, authentic, high-quality medicines which benefit clients around the world in need of low-cost medication.</p>
                                    <p>We have lower prices because the price of the same medicine, manufactured and marketed by the same pharmaceutical companies can vary significantly from country to country. Generic medication and the brand name listed are the same drugs as sold worldwide and are the same medicines that you may be purchasing from your local, more expensive outlet. The packaging and the product may appear slightly different, but you can be sure they will be the same high-quality medicines as you are purchasing locally, having the same active pharmaceutical ingredients.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>FREE SHIPPING</b></h5>
                                    <p>Epharmacy is the only pharmacy offering free shipping. We offer free worldwide shipping without any minimum order value.</p>
                                    <p>Our free shipping helps the buyer to procure their expensive prescription medicines and OTC medicines from overseas without any shipping charges, which allows the buyer to save more money.</p>
                                </div>
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>WIDE RANGE OF PRODUCTS & AVAILABILITY</b></h5>
                                    <p>We have a wide range of product list in which you will get the products with brand names and with generic names.  At Generic Villa, we offer generic products having the same pharmaceutical ingredients as of their brand names available in the market with the same purity, potency, dosage, or bio-equivalence.</p>                          
                                </div>    
                                <div className="faq-content-list">
                                    <h5 className="mb-3"><b>!! You happy, We happy…!!</b></h5>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}