import { Carousel, Image } from "react-bootstrap";
import heroSlider0 from "./../../../Assets/Images/products/product0.jpg";
import "./ProductSlider.css";

export default function ProductSlider({ image }) {
  return (
    <>
      <Carousel className="product-slider">
        <Carousel.Item>
          <Image width={400} height={500} src={image} fluid alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Image width={400} height={500} src={image} fluid alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Image width={400} height={500} src={image} fluid alt="" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
