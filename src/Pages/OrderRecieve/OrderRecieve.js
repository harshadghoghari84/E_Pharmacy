import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderRecieve.css";
export default function OrderRecieve() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Order Recieve</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i className="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Order Recieve</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-5">
                <Container>
                    <Row>
                       <Col xs="12" className="order-recieve-wrap d-xl-flex align-items-center">
                            <div className="order-recieve-box">
                                <p>Thank you. Your order has been received.</p>
                                <p>Please check your email for payment process.</p>
                                <p>If you do not receive email, Kindly check your spam folder.</p>
                            </div>
                            <div className="order-recieve-details mt-5 mt-xl-0">
                                <div className="oc-detail">
                                    <h6><b>Order Number</b>:</h6>
                                    <p>2502524763</p>
                                </div>
                                <div className="oc-detail">
                                    <h6><b>Date</b>:</h6>
                                    <p>June 29, 2022</p>
                                </div>
                                <div className="oc-detail">
                                    <h6><b>Total</b>:</h6>
                                    <p>$120.00</p>
                                </div>
                                <div className="oc-detail">
                                    <h6><b>Payment Method</b>:</h6>
                                    <p>Pay By Credit/Debit Card</p>
                                </div>
                            </div>
                       </Col>
                       <Col xs="12">
                            <table className="mt-5 w-100 order-recieve-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Da Sutra 30 X - 28 Tablet/s (50mg) × 2 50mg: 28 Tablet/s</td>
                                        <td>$90.00</td>
                                    </tr>
                                    <tr>
                                        <td>Subtotal:</td>
                                        <td>$90.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td>$90.00</td>
                                    </tr>
                                    <tr>
                                        <td>Payment method:</td>
                                        <td>Pay By Credit/Debit Card</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total:</b></td>
                                        <td><b>$120.00</b></td>
                                    </tr>
                                </tbody>
                            </table>
                       </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}