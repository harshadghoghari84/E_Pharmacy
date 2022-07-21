import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import CustomButton from '../../../Components/CustomButton/CustomButton';
import product0 from "./../../../Assets/Images/products/product0.jpg";
import "./HomeProducts.css";

export default function HomeProducts() {
    var homeProductSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1799,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
    return(
        <>
            <Slider {...homeProductSlider} className="product-slider-wrap">
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product-wrap'>
                        <div className='product-img'>
                            <Image src={product0} fluid alt=""/>
                        </div>
                        <div className='product-details'>
                            <p>Kamagra 100mg (Sildenafil Citrate)</p>
                            <span>Just $0.83 /Piece</span>
                            <Link to="/product-details"><CustomButton text="View Details" formGroupClassName="form-group text-center w-100 mt-4"/></Link>
                        </div>
                    </div>
                </div>
            </Slider>  
        </>
    )
}