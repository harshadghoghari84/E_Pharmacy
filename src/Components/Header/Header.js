import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headerlogo from "./../../Assets/Images/logo-wide.png";
import "./Header.css";

const menuOption0 = [
    {
        subMenuOption0: "Erectile Dysfunction",
    },
    {
        subMenuOption0: "Blue Pill (Sildenafil-Viagra)",
    },
    {
        subMenuOption0: "Avanafil(Stendra)",
    },
    {
        subMenuOption0: "Penis Enlargement",
    },
    {
        subMenuOption0: "Sexual Wellness",
    },
    {
        subMenuOption0: "Premature Ejaculation",
    },
    {
        subMenuOption0: "Male Infertility",
    },
]
export default function Header() {
    return(
        <>
            <section className="small-header d-none d-md-block">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <div className="header-social-ico">
                                <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                <Link to="/"><i className="ri-instagram-line"></i></Link>
                                <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                <Link to="/"><i className="ri-mail-send-line"></i></Link>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="d-flex align-items-center justify-content-end header-social-text">
                                <Link to="/" className="d-flex align-items-center"><i class="ri-phone-fill me-2"></i> +91 9232651519</Link>
                                <Link to="/" className="d-flex align-items-center"><i className="ri-mail-send-line me-2"></i> admin@gmail.com</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <header>
                <Container>
                    <Row>
                        <Col xs="12" className="header-col py-3 py-xl-0">
                            <Link to="/"><Image src={Headerlogo} fluid alt="" className="header-logo" /></Link>
                            <div className="menu d-none d-xl-block">
                                <Nav as="ul" className="align-items-center">
                                    <Nav.Item as="li" className="menu-list">
                                        <Link to="">Men's Health <i className="ri-arrow-drop-down-line ms-2"></i></Link>
                                        <Nav as="ul" className="sub-menu">
                                            {menuOption0.map((item) => 
                                                <Nav.Item as="li"><Link to="/category-product">{item.subMenuOption0}</Link></Nav.Item>
                                            )}
                                        </Nav>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="menu-list">
                                        <Link to="">Life Saving Drugs <i className="ri-arrow-drop-down-line ms-2"></i></Link>
                                        <Nav as="ul" className="sub-menu">
                                            {menuOption0.map((item) => 
                                                <Nav.Item as="li"><Link to="/category-product">{item.subMenuOption0}</Link></Nav.Item>
                                            )}
                                        </Nav>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="menu-list">
                                        <Link to="">Skin Care <i className="ri-arrow-drop-down-line ms-2"></i></Link>
                                        <Nav as="ul" className="sub-menu">
                                            {menuOption0.map((item) => 
                                                <Nav.Item as="li"><Link to="/category-product">{item.subMenuOption0}</Link></Nav.Item>
                                            )}
                                        </Nav>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="menu-list">
                                        <Link to="">Viral Care <i className="ri-arrow-drop-down-line ms-2"></i></Link>
                                        <Nav as="ul" className="sub-menu">
                                            {menuOption0.map((item) => 
                                                <Nav.Item as="li"><Link to="/category-product">{item.subMenuOption0}</Link></Nav.Item>
                                            )}
                                        </Nav>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="menu-list">
                                        <Link to="">
                                            <div className="waviy">
                                                <span style={{color: "--i:1"}}>O</span>
                                                <span style={{color: "--i:2"}}>F</span>
                                                <span style={{color: "--i:3"}}>F</span>
                                                <span style={{color: "--i:4"}}>E</span>
                                                <span style={{color: "--i:5"}}>R</span>
                                                <span style={{color: "--i:6"}}>_V</span>
                                                <span style={{color: "--i:7"}}>I</span>
                                                <span style={{color: "--i:8"}}>L</span>
                                                <span style={{color: "--i:9"}}>L</span>
                                                <span style={{color: "--i:10"}}>A</span>
                                            </div>                                  
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="authentication-list">
                                <Nav as="ul">
                                    <Nav.Item as="li">
                                        <Link to="/login">Login</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link to="/register">Register</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"/></svg>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}