import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import heroSlider0 from "./../../../Assets/Images/banner/bg-slide.jpg";

export default function HeroSlider() {
    return(
        <>
            <Carousel className="hero-section">
                <Carousel.Item>
                    <Image src={heroSlider0} fluid alt="" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum Kulla vitae elit libero, a pharetra augue mollis interdum ulla vitae elit libero, a pharetra augue mollis interdum Kulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Link to="/"><CustomButton text="More Details" formGroupClassName="text-center w-100 mt-5 mb-0"/></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={heroSlider0} fluid alt="" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <Link to="/"><CustomButton text="More Details" formGroupClassName="text-center w-100 mt-5 mb-0"/></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <Image src={heroSlider0} fluid alt="" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet vel scelerisque nisl consectetur.</p>
                    <Link to="/"><CustomButton text="More Details" formGroupClassName="text-center w-100 mt-5 mb-0"/></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}