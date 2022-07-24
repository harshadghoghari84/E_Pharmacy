import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import constant from "../../utils/constant";
import Headerlogo from "./../../Assets/Images/logo-wide.png";
import "./Header.css";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import common from "../../utils/common";

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
];
const Header = ({ user, userStore, globalStore }) => {
  // add remove class on scroll start
  const [isScroll, setIsScroll] = useState(false);
  const [options, setOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //
  const [mobileSidebarOpen, setmobileSidebarOpen] = useState(false);
  const isMountedRef = common.useIsMountedRef();
  useEffect(() => {
    if (isMountedRef.current) {
      globalStore.loadAllCatagory();
    }
  }, []);

  const catagoryLoading = toJS(globalStore.catLoading);
  const catagory = toJS(globalStore.AllCatagory);
  console.log("header user", user);
  console.log("catagoryr", catagory);

  const onClickLogout = () => {
    localStorage.removeItem(constant.prfUserToken);
    userStore.setUser(null);
  };

  return (
    <>
      <section className="small-header d-none d-md-block">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <div className="header-social-ico">
                <Link to="/">
                  <i className="ri-facebook-fill"></i>
                </Link>
                <Link to="/">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link to="/">
                  <i className="ri-twitter-fill"></i>
                </Link>
                <Link to="/">
                  <i className="ri-mail-send-line"></i>
                </Link>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex align-items-center justify-content-end header-social-text">
                <Link to="/" className="d-flex align-items-center">
                  <i class="ri-phone-fill me-2"></i> +91 9232651519
                </Link>
                <Link to="/" className="d-flex align-items-center">
                  <i className="ri-mail-send-line me-2"></i> admin@gmail.com
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <header>
        <Container>
          <Row>
            <Col xs="12" className="header-col py-3 py-xl-0">
              <Link to="/">
                <Image src={Headerlogo} fluid alt="" className="header-logo" />
              </Link>
              <div className="menu d-none d-xl-block">
                <Nav as="ul" className="align-items-center">
                  <Nav.Item as="li" className="menu-list">
                    <Link to="">
                      {catagory[0]?.name}
                      <i className="ri-arrow-drop-down-line ms-2"></i>
                    </Link>
                    <Nav as="ul" className="sub-menu">
                      {catagory[0]?.sub_categories.map((item) => (
                        <Nav.Item as="li">
                          <Link
                            to={`/category-product/${catagory[0]?.id}/${item.id}`}
                          >
                            {item.name}
                          </Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Nav.Item>
                  <Nav.Item as="li" className="menu-list">
                    <Link to="">
                      {catagory[1]?.name}
                      <i className="ri-arrow-drop-down-line ms-2"></i>
                    </Link>
                    <Nav as="ul" className="sub-menu">
                      {catagory[1]?.sub_categories.map((item) => (
                        <Nav.Item as="li">
                          <Link
                            to={`/category-product/${catagory[1]?.id}/${item.id}`}
                          >
                            {item.name}
                          </Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Nav.Item>
                  <Nav.Item as="li" className="menu-list">
                    <Link to="">
                      Skin Care <i className="ri-arrow-drop-down-line ms-2"></i>
                    </Link>
                    <Nav as="ul" className="sub-menu">
                      {menuOption0.map((item) => (
                        <Nav.Item as="li">
                          <Link to="/category-product">
                            {item.subMenuOption0}
                          </Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Nav.Item>
                  <Nav.Item as="li" className="menu-list">
                    <Link to="">
                      Viral Care{" "}
                      <i className="ri-arrow-drop-down-line ms-2"></i>
                    </Link>
                    <Nav as="ul" className="sub-menu">
                      {menuOption0.map((item) => (
                        <Nav.Item as="li">
                          <Link to="/category-product">
                            {item.subMenuOption0}
                          </Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Nav.Item>
                  <Nav.Item as="li" className="menu-list">
                    <Link to="">
                      <div className="waviy">
                        <span style={{ color: "--i:1" }}>O</span>
                        <span style={{ color: "--i:2" }}>F</span>
                        <span style={{ color: "--i:3" }}>F</span>
                        <span style={{ color: "--i:4" }}>E</span>
                        <span style={{ color: "--i:5" }}>R</span>
                        <span style={{ color: "--i:6" }}>_V</span>
                        <span style={{ color: "--i:7" }}>I</span>
                        <span style={{ color: "--i:8" }}>L</span>
                        <span style={{ color: "--i:9" }}>L</span>
                        <span style={{ color: "--i:10" }}>A</span>
                      </div>
                    </Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="authentication-list">
                <Nav as="ul">
                  {user ? (
                    <Nav.Item as="li" onClick={onClickLogout}>
                      <Link to="/login">Logout</Link>
                    </Nav.Item>
                  ) : (
                    <>
                      <Nav.Item as="li">
                        <Link to="/login">Login</Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="me-0">
                        <Link to="/register">Register</Link>
                      </Nav.Item>
                    </>
                  )}

                  <Nav.Item as="li" className="d-xl-none ms-3">
                    <div onClick={() => setmobileSidebarOpen(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z" />
                      </svg>
                    </div>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div
        className={`mobile-sidebar d-xl-none ${
          mobileSidebarOpen && "mobile-sidebar-show"
        }`}
      >
        <div className="w-100 d-flex justify-content-end">
          <i
            class="ri-close-circle-line close-sidebar"
            onClick={() => setmobileSidebarOpen(false)}
          ></i>
        </div>
        <Nav as="ul" className="d-block mt-3">
          <Nav.Item as="li" className="menu-list">
            <Link to="">
              Men's Health <i className="ri-arrow-drop-down-line ms-2"></i>
            </Link>
            <Nav as="ul" className="sub-menu">
              {menuOption0.map((item) => (
                <Nav.Item as="li">
                  <Link to="/category-product">{item.subMenuOption0}</Link>
                </Nav.Item>
              ))}
            </Nav>
          </Nav.Item>
          <Nav.Item as="li" className="menu-list">
            <Link to="">
              Life Saving Drugs <i className="ri-arrow-drop-down-line ms-2"></i>
            </Link>
            <Nav as="ul" className="sub-menu">
              {menuOption0.map((item) => (
                <Nav.Item as="li">
                  <Link to="/category-product">{item.subMenuOption0}</Link>
                </Nav.Item>
              ))}
            </Nav>
          </Nav.Item>
          <Nav.Item as="li" className="menu-list">
            <Link to="">
              Skin Care <i className="ri-arrow-drop-down-line ms-2"></i>
            </Link>
            <Nav as="ul" className="sub-menu">
              {menuOption0.map((item) => (
                <Nav.Item as="li">
                  <Link to="/category-product">{item.subMenuOption0}</Link>
                </Nav.Item>
              ))}
            </Nav>
          </Nav.Item>
          <Nav.Item as="li" className="menu-list">
            <Link to="">
              Viral Care <i className="ri-arrow-drop-down-line ms-2"></i>
            </Link>
            <Nav as="ul" className="sub-menu">
              {menuOption0.map((item) => (
                <Nav.Item as="li">
                  <Link to="/category-product">{item.subMenuOption0}</Link>
                </Nav.Item>
              ))}
            </Nav>
          </Nav.Item>
          <Nav.Item as="li" className="menu-list">
            <Link to="">
              <div className="waviy mt-5">
                <span style={{ color: "--i:1" }}>O</span>
                <span style={{ color: "--i:2" }}>F</span>
                <span style={{ color: "--i:3" }}>F</span>
                <span style={{ color: "--i:4" }}>E</span>
                <span style={{ color: "--i:5" }}>R</span>
                <span style={{ color: "--i:6" }}>_V</span>
                <span style={{ color: "--i:7" }}>I</span>
                <span style={{ color: "--i:8" }}>L</span>
                <span style={{ color: "--i:9" }}>L</span>
                <span style={{ color: "--i:10" }}>A</span>
              </div>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};
export default inject("userStore", "globalStore")(observer(Header));
