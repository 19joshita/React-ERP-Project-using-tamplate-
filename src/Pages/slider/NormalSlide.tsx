import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface SliderProps {
  images: string[];
}
const CustomPrevArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow custom-prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const CustomNextArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow custom-next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};
const NormalSlider: React.FC<SliderProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: <CustomPrevArrow />, // Use custom prevArrow component
    nextArrow: <CustomNextArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default NormalSlider;
