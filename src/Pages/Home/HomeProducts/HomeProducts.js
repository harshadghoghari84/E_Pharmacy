import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import product0 from "./../../../Assets/Images/products/product0.jpg";
import "./HomeProducts.css";

const HomeProducts = ({ data }) => {
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
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {data?.getCategoryProduct.length > 0 ? (
        <Slider {...homeProductSlider} className="product-slider-wrap">
          {data.getCategoryProduct.map((item, i) => {
            return (
              <div key={i}>
                <div className="product-wrap">
                  <div className="product-img">
                    <Image src={item.img_url} fluid alt="" />
                  </div>
                  <div className="product-details">
                    <p>{item.title}</p>
                    {item?.medicine_details !== null &&
                    item?.medicine_details.length > 0 ? (
                      <span>
                        Just {item?.medicine_details[0]?.price} /Piece
                      </span>
                    ) : null}
                    <Link to={`/product-details/${item.id}`}>
                      <CustomButton
                        text="View Details"
                        formGroupClassName="form-group text-center w-100 mt-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div>
          <div className="product-wrap">
            <div className="product-img">
              <Image src={product0} fluid alt="" />
            </div>
            <div className="product-details">
              <p>Kamagra 100mg (Sildenafil Citrate)</p>
              <span>Just $0.83 /Piece</span>
              <Link to="/product-details">
                <CustomButton
                  text="View Details"
                  formGroupClassName="form-group text-center w-100 mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="product-wrap">
            <div className="product-img">
              <Image src={product0} fluid alt="" />
            </div>
            <div className="product-details">
              <p>Kamagra 100mg (Sildenafil Citrate)</p>
              <span>Just $0.83 /Piece</span>
              <Link to="/product-details">
                <CustomButton
                  text="View Details"
                  formGroupClassName="form-group text-center w-100 mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="product-wrap">
            <div className="product-img">
              <Image src={product0} fluid alt="" />
            </div>
            <div className="product-details">
              <p>Kamagra 100mg (Sildenafil Citrate)</p>
              <span>Just $0.83 /Piece</span>
              <Link to="/product-details">
                <CustomButton
                  text="View Details"
                  formGroupClassName="form-group text-center w-100 mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="product-wrap">
            <div className="product-img">
              <Image src={product0} fluid alt="" />
            </div>
            <div className="product-details">
              <p>Kamagra 100mg (Sildenafil Citrate)</p>
              <span>Just $0.83 /Piece</span>
              <Link to="/product-details">
                <CustomButton
                  text="View Details"
                  formGroupClassName="form-group text-center w-100 mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="product-wrap">
            <div className="product-img">
              <Image src={product0} fluid alt="" />
            </div>
            <div className="product-details">
              <p>Kamagra 100mg (Sildenafil Citrate)</p>
              <span>Just $0.83 /Piece</span>
              <Link to="/product-details">
                <CustomButton
                  text="View Details"
                  formGroupClassName="form-group text-center w-100 mt-4"
                />
              </Link>
            </div>
          </div>
        </div> */}
        </Slider>
      ) : null}
    </>
  );
};

export default HomeProducts;
