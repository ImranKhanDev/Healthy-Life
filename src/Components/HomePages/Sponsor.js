import React from "react";
import Slider from "react-slick";

import brand1 from "../Assets/images/brand1.jpg";
import brand2 from "../Assets/images/brand2.jpg";
import brand3 from "../Assets/images/brand3.jpg";
import brand4 from "../Assets/images/brand4.jpg";
import brand5 from "../Assets/images/brand5.jpg";

const sponsor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div
      style={{
        paddingLeft: "18px",
        paddingRight: "18px",
      }}
    >
      <div className="slider p-2 my-5">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={brand1} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={brand2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={brand3} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={brand4} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={brand5} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={brand4} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default sponsor;
