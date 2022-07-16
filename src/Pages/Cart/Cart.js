import { Col, Container, Row, Nav, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import heroSlider0 from "./../../Assets/Images/products/product0.jpg";
import "./Cart.css";
export default function Cart() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Cart</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to=""><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Cart</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                        <Link to="#"><CustomButton text="Continue Shopping" formGroupClassName="form-group text-end w-100 mb-3 mb-0"/></Link>
                        <table className='product-detail-tbl'>
                                <thead>
                                    <tr>
                                        <th>
                                       
                                        </th>
                                        <th>
                                        Product
                                        </th>
                                        <th>
                                        Price
                                        </th>
                                        <th>
                                        Quantity
                                        </th>
                                        <th>
                                        Subtotal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="">
                                            <div className="d-flex align-items-center">
                                                <Link to="#"><div className="delete-cart-product me-3"><i class="ri-delete-bin-line"></i></div></Link>
                                                <div className="cart-product-img">
                                                    <Image src={heroSlider0} fluid alt="" className="img-cover w-100 h-100" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        <Link to="#">Cenforce 200mg Sildenafil  - 90 Tablet/s</Link>
                                        </td>
                                        <td>
                                        $95.00	
                                        </td>
                                        <td>
                                         <Form.Select disabled>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        </Form.Select>
                                        </td>
                                        <td>
                                        $95.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="apply-code d-flex align-items-center w-100">
                                <div className="d-flex align-items-center">
                                    <CustomInput formGroupClassName="form-group" formLabel="" formType="text" customInputClassName="" placeholder="Apply Code"/>
                                    <Link to="/" className="ms-2"><b>Apply Cuppon</b></Link>
                                </div>
                                <Link to="/" className="ms-auto d-flex"><CustomButton text="Update card" formGroupClassName="form-group mb-0"/></Link>
                            </div>
                        </Col>
                        <Col xs="12" className="mt-4">
                            <h6>Card Totals</h6>
                            <Nav as="ul" className='nav-ul-block product-detail-content mt-3 card-total-box'>
                                <Nav.Item as="li">
                                    <b>Subtotal:</b>
                                    <span>$95.00</span>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Shipping:</b>
                                    <span className="d-flex align-items-center">Shipping Charge: <b className="p-0 bg-transparent ms-3">$30.00</b></span>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Total:</b>
                                    <span><b className="p-0 bg-transparent">$125.00</b></span>
                                </Nav.Item>
                            </Nav>
                            <Link to="/" className="ms-auto d-flex"><CustomButton text="Process to Chekout" formGroupClassName="form-group mb-0 mt-3"/></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}