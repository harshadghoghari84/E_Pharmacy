import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
    return(
        <>
            <footer>
                <Container className="mb-5 pb-5">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Information</h4>
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="my-account">My account</Link>
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
                        <div className="footer-col">
                            <h4>Treatable Medicines for ED and PE</h4>
                            <div className="d-flex inner-footer-ul">
                                <Nav as="ul" className="nav-ul-block">
                                    <Nav.Item as="li">
                                        <Link to="category-product">Cenforce 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Kamagra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Vidalista 20</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Fildena</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Tadalista</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Tadacip</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Super P Force</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Caverta 100</Link>
                                    </Nav.Item>
                                </Nav>
                                <Nav as="ul" className="nav-ul-block">
                                    <Nav.Item as="li">
                                        <Link to="category-product">Suhagra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Aurogra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Lovento (Generic Viagra)</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Actilis (Generic Cialis)</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Malegra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Silagra</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">Lovegra Women Viagra</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>New Medicines</h4>
                            <div className="d-flex inner-footer-ul">
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="category-product">Suhagra 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Vega 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Valif 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Tadfil</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Tadora 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Tazzle 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Silditop 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Cenforce D</Link>
                                </Nav.Item>
                            </Nav>
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="category-product">Super Vilitra</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Filagra Oral Jelly</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Poxet 60</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Vigora 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Pataday</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Generic latisse</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Zhewitra 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">Tadapox</Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Store Information</h4>
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="category-product">+1 888-800-8358</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="category-product">info@Epharmacy</Link>
                                </Nav.Item>
                                <span className="mb-3 d-block footer-hours-operation"><b>Hours of Operation</b></span>
                                <div className="d-flex inner-footer-ul">
                                    <Nav.Item as="li">
                                        <Link to="category-product">
                                            Monday to Friday <br/>
                                            9:00am - 8:00pm (IST)
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="category-product">
                                            Saturday to Sunday <br/>
                                            9:00am - 12:00pm (IST)
                                        </Link>
                                    </Nav.Item>
                                </div>
                                <Nav.Item as="li">
                                    <Link to="category-product">Royal Plaza, Surat 395006</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </Container>
                <a href="javascript:void(0)" className="black-hover w-max-content d-block mx-auto text-light"><h6>Copyright &copy; 2022 Epharmacy All Rights Reserved.</h6></a>
            </footer>
        </>
    )
}