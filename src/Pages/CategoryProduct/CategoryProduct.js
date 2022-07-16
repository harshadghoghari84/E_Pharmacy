import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeProducts from "../Home/HomeProducts/HomeProducts";
import product0 from "../../../src/Assets/Images/products/product0.jpg";
import "./CategoryProduct.css";
import AboutCompanyNote from "../../Components/AboutCompanyNote/AboutCompanyNote";
export default function CategoryProduct() {
    const CategoryProductDetails = [
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "Intas Pharma",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        },
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "Torrent Pharma",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        },
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "Novartis",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        },
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "Sun Pharma",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        },
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "Cipla",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        },
        {
            CategoryProductImg: product0,
            CategoryProductTitle: "GSK",
            CategoryProductContent:"Extraction method has been tested to increase the sperm count that occurs."
        }
    ]
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Category Product</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to=""><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Category Product</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq-section mt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <span className="mb-1 d-block inner-page-small-title">Erectile Dysfunction</span>
                            <h1 className="inner-page-big-title">Pills that make you stay hard longer</h1>
                            <div className="mt-5">
                                <p>Erectile dysfunction also is known as ED is the lack of ability to keep or get an erection hard enough to initiate sexual intercourse. Erectile dysfunction also referred to as Impotent, is a kind of sexual dysfunction with a distinctive lack of abilities to uphold or develop an erection of the penis while there is sexual activity going on between humans.</p>
                                <p>Extraction method has been tested to increase the sperm count that occurs in men by allowing delayed ejaculation, an increase in the period of erection and also making it difficult for women generally. Erection reduces potency; also, safety users develop severe problems known as Erectile dysfunction.</p>
                                <p>Most men experience this during the time of stress; often ED can be signs of health challenges that require treatment. It can also be signs of relationship or emotional difficulties that may need the help of professionals. ED causes not every male sexual issue. Other kinds of male sexual dysfunction include delayed ejaculation, lack of interest in sex, premature ejaculation.</p>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="product-category-row">
                                <div className="product-category-right-col mt-5">
                                    <h4>Related Product Category</h4>
                                    <div className="mt-4 related-product-category-wrap">
                                        {CategoryProductDetails.map((item) =>
                                            <div>
                                                    <Link to="/">
                                                        <div className="related-product-category-box d-flex align-items-start">
                                                            <div className="related-product-category-img">
                                                                <Image src={item.CategoryProductImg} fluid alt="" className="img-cover w-100 h-100"/>
                                                            </div>
                                                            <div className="related-product-category-details ps-3">
                                                                <h6><b>{item.CategoryProductTitle}</b></h6>
                                                                <p className="mb-0">{item.CategoryProductContent}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <hr/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="product-category-left-col mt-5">
                                    <div className="home-product-slides">
                                        <h2 className="head-title text-start mb-0 animated-title">Sun Pharma</h2>
                                        <HomeProducts/>
                                    </div>
                                    <div className="home-product-slides">
                                        <h2 className="head-title text-start mb-0 animated-title">Cipla</h2>
                                        <HomeProducts/>
                                    </div>
                                    <div className="home-product-slides">
                                        <h2 className="head-title text-start mb-0 animated-title">Pfizer</h2>
                                        <HomeProducts/>
                                    </div>
                                    <div className="home-product-slides">
                                        <h2 className="head-title text-start mb-0 animated-title">Ajanta Pharma</h2>
                                        <HomeProducts/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <AboutCompanyNote/>
                </Container>
            </section>
        </>
    )
}