import { Col, Row } from "react-bootstrap";
import "./AboutCompanyNote.css";
export default function AboutCompanyNote() {
    return(
        <>
            <Row>
                    <Col md="4">
                            <div className="about-company-note">
                                <div className="about-company-note-ico">
                                    <i class="ri-truck-line"></i>
                                </div>
                             <h5>Free Delivery</h5> 
                             <p>Delivery to Dor</p>             
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="about-company-note">
                                <div className="about-company-note-ico">
                                    <i class="ri-command-fill"></i>
                                </div>
                                <h5>30 Day Return</h5> 
                                <p>Easy to Retutn</p>             
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="about-company-note">
                            <div className="about-company-note-ico">
                                    <i class="ri-24-hours-fill"></i>
                            </div>
                             <h5>24/7 Support</h5> 
                             <p>In Safe Hand</p>             
                            </div>
                        </Col>
            </Row>
        </>
    )
}