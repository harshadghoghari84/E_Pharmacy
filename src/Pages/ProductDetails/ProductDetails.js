import React from 'react';
import { Col, Container, Dropdown, Form, Nav, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import "./ProductDetails.css";
import ProductSlider from './ProductSlider/ProductSlider';
export default function ProductDetails() {
    return(
        <>
            <section className='mt-5'>
                <Container>
                    <Row>
                        <Col xs="4" className='text-center'>
                            <ProductSlider/>
                        </Col>
                        <Col xs="8">
                            <h5><b>Da Sutra 30 X</b></h5>
                            <h5 className='primary-color'><b>Rs.150</b></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            <Nav as="ul" className='nav-ul-block product-detail-content'>
                                <Nav.Item as="li">
                                    <b>Active Ingredient(Generic Name):</b>
                                    <span>Sildenafil/Dapoxetine</span>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Indication:</b>
                                    <span>Premature Ejaculation and Erectile Dysfunction (ED)</span>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Packaging:</b>
                                    <span>4 Tablets in strip</span>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <b>Manufacturer:</b>
                                    <span>Hetero Drugs Ltd</span>
                                </Nav.Item>
                            </Nav>
                            <h6 className='mt-4'>Delivery Time : <span className='primary-color'>6 to 15 days</span></h6>
                        </Col>
                        <Col xs="12" className='mt-5'>
                            <div className='product-detail-tbl-highlight'>
                                <h6 className='text-center mb-0'>Da Sutra 30 X - 50mg</h6>
                            </div>
                            <table className='product-detail-tbl'>
                                <thead>
                                    <tr>
                                        <th>
                                        50mg
                                        </th>
                                        <th>
                                        Price:
                                        </th>
                                        <th>
                                        Price/unit
                                        </th>
                                        <th>
                                        Quantity
                                        </th>
                                        <th>
                                        Add To Cart
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        28 Tablet/s
                                        </td>
                                        <td>
                                        $45.00
                                        </td>
                                        <td>
                                        $1.61 /Piece
                                        </td>
                                        <td>
                                         <Form.Select >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        </Form.Select>
                                        </td>
                                        <td>
                                        <Link to="#">Add to Cart</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        28 Tablet/s
                                        </td>
                                        <td>
                                        $45.00
                                        </td>
                                        <td>
                                        $1.61 /Piece
                                        </td>
                                        <td>
                                         <Form.Select >
                                         <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        </Form.Select>
                                        </td>
                                        <td>
                                        <Link to="#">Add to Cart</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        28 Tablet/s
                                        </td>
                                        <td>
                                        $45.00
                                        </td>
                                        <td>
                                        $1.61 /Piece
                                        </td>
                                        <td>
                                         <Form.Select >
                                         <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        </Form.Select>
                                        </td>
                                        <td>
                                        <Link to="#">Add to Cart</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        28 Tablet/s
                                        </td>
                                        <td>
                                        $45.00
                                        </td>
                                        <td>
                                        $1.61 /Piece
                                        </td>
                                        <td>
                                         <Form.Select >
                                        <option>1</option>
                                        </Form.Select>
                                        </td>
                                        <td>
                                        <Link to="#">Add to Cart</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col xs="12" className='mt-5'>
                            <span className="mb-1 d-block inner-page-small-title">Customer Review</span>
                            <h1 className="inner-page-big-title">Reviews</h1>
                            <div className='mt-5'>
                                <p>There are no reviews yet.</p>
                                <p>Be the first to review "Da Sutra 30 X"</p>
                                <p>Your email address will not be published.</p>
                                <Form className='product-review-form'>
                                    <CustomInput formGroupClassName="form-group" formLabel="Name" formType="Name" customInputClassName=""/>
                                    <CustomInput formGroupClassName="form-group" formLabel="Email Address" formType="email" customInputClassName=""/>
                                    <Form.Label>
                                        Comments
                                    </Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    <Link to="#"><CustomButton text="Login" formGroupClassName="form-group mt-4 mb-0"/></Link>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}