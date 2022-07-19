import { Carousel, Image } from "react-bootstrap";
import heroSlider0 from "./../../../Assets/Images/products/product0.jpg";
import "./ProductSlider.css";

export default function ProductSlider() {
    return(
        <>
            <Carousel className="product-slider">
                <Carousel.Item>
                    <Image src={heroSlider0} fluid alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={heroSlider0} fluid alt="" />
                </Carousel.Item>
                <Carousel.Item>
                     <Image src={heroSlider0} fluid alt="" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}