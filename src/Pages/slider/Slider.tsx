import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "./../../assets/home/4b24a673-11b2-4867-9e6c-1c51eb690612.jpg";
import home2 from "./../../assets/home/e030820d-8691-41ea-b51d-99bea90f2e27.jpg";
import home3 from "./../../assets/home/ee63ad5c-a5b8-4bfe-89e6-2b1cc351088a.jpg";
import home4 from "./../../assets/home/f2252aaa-acce-4dff-a3bc-becaab828ebc.jpg";
type Props = {
  images: any[];
};

const SliderImage = ({ images }: Props) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
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

export default SliderImage;
