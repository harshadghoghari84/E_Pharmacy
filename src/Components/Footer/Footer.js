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
                                    <Link to="">My account</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Blog</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">About Us</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Contact Us</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">FAQs</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Privacy Policy</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Terms and conditions</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">How To Track Order</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="footer-col">
                            <h4>Treatable Medicines for ED and PE</h4>
                            <div className="d-flex inner-footer-ul">
                                <Nav as="ul" className="nav-ul-block">
                                    <Nav.Item as="li">
                                        <Link to="">Cenforce 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Kamagra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Vidalista 20</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Fildena</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Tadalista</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Tadacip</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Super P Force</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Caverta 100</Link>
                                    </Nav.Item>
                                </Nav>
                                <Nav as="ul" className="nav-ul-block">
                                    <Nav.Item as="li">
                                        <Link to="">Suhagra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Aurogra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Lovento (Generic Viagra)</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Actilis (Generic Cialis)</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Malegra 100</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Silagra</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">Lovegra Women Viagra</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>New Medicines</h4>
                            <div className="d-flex inner-footer-ul">
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="">Suhagra 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Vega 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Valif 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Tadfil</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Tadora 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Tazzle 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Silditop 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Cenforce D</Link>
                                </Nav.Item>
                            </Nav>
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="">Super Vilitra</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Filagra Oral Jelly</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Poxet 60</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Vigora 100</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Pataday</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Generic latisse</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Zhewitra 20</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">Tadapox</Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Store Information</h4>
                            <Nav as="ul" className="nav-ul-block">
                                <Nav.Item as="li">
                                    <Link to="">+1 888-800-8358</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="">info@genericvilla.com</Link>
                                </Nav.Item>
                                <span className="mb-3 d-block footer-hours-operation"><b>Hours of Operation</b></span>
                                <div className="d-flex inner-footer-ul">
                                    <Nav.Item as="li">
                                        <Link to="">
                                            Monday to Friday <br/>
                                            9:00am - 8:00pm (IST)
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="">
                                            Saturday to Sunday <br/>
                                            9:00am - 12:00pm (IST)
                                        </Link>
                                    </Nav.Item>
                                </div>
                                <Nav.Item as="li">
                                    <Link to="">Royal Plaza, Surat 395006</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </Container>
                <a href="javascript:void(0)" className="black-hover w-max-content d-block mx-auto text-light"><h6>Copyright &copy; 2022 GenericVilla.com All Rights Reserved.</h6></a>
            </footer>
        </>
    )
}