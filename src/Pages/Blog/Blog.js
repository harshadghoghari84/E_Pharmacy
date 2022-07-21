import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog0 from "./../../Assets/Images/blog/blog01.jpg";
import "./Blog.css";
const blogDetails = [
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
    {
        blogImage: blog0,
        blogHead: "What food works like Generic Viagra?",
        blogSmallText: "Last updated by  Dr. Kishan P on June 9, 2022",
        blogParagraph: "Can food increase sexual stamina? Have you ever tried any food and experienced the result? Or have you tried to find out which food is best for increasing sexual drive? All of these answers will be solved here. As the increasing sexual drive is one of the common practices among spouses. However, in the treatment",
        blogReadMoreTxt: "Read more"
    },
]
export default function Blog() {
    return(
        <>
            <section className="page-head-section">
                <Container>
                    <Row>
                        <Col xs="12 text-center">
                            <h1 className="page-head">Blog</h1>
                            <p className="broadcast-title mb-0 d-flex align-items-center justify-content-center"><Link to="/"><span className="d-flex align-items-center"><i class="ri-home-smile-2-line me-1"></i> Home</span></Link> <b className="mx-3">::</b> <span>Blog</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="blog-section mt-5">
                <Container>
                    <Row className="blog-content-row">
                        {blogDetails.map((item) => 
                        <Col md="6" xl="4">
                                <div className="blog-box">
                                    <div className="blog-img">
                                        <Image src={item.blogImage} fluid alt="" className="w-100 h-100 img-cover"/>
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="mb-1"><b>{item.blogHead}</b></h5>
                                        <span>{item.blogSmallText}</span>
                                        <p className="mb-2">{item.blogParagraph}</p>
                                        <Link to="/" className="black-hover">{item.blogReadMoreTxt}</Link>
                                    </div>
                                </div>
                        </Col> 
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}