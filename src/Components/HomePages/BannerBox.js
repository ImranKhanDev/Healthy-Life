import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerImg from "../Assets/images/banner-img1.jpg";
import bannerImg2 from "../Assets/images/banner-img2.jpg";
import bannerImg3 from "../Assets/images/banner-img3.jpg";
const BannerBox = () => {
  return (
    <div className="bannerBox-fluid mt-4">
      <>
        <Row className="">
          <div className="banner-content d-flex  justify-content-between mx-auto align-items-center">
            <div className="hidden">
              <img
                className="banner-img featured__img"
                src={bannerImg}
                alt="banner_box"
              />
            </div>
            <div className="hidden">
              <img
                className="banner-img featured__img"
                src={bannerImg2}
                alt="banner_box"
              />
            </div>
            <div className="hidden">
              <img
                className="banner-img featured__img"
                src={bannerImg3}
                alt="banner_box"
              />
            </div>
          </div>
        </Row>
      </>
    </div>
  );
};

export default BannerBox;
