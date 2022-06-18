import { Carousel } from "bootstrap";
import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import slider1 from "../Assets/images/banner_1.jpg";
import slider2 from "../Assets/images/banner_2.jpg";

const Banner = () => {
  return (
    <div className="banner-fluid mb-5" style={{ textTransform: "uppercase" }}>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block img" alt="..." />
            <div class="carousel-caption  d-none d-md-block">
              <div className="caro uppercase ">
                <p>
                  {" "}
                  <i>Not fried not baked</i>{" "}
                </p>
                <h3>
                  Organic Foods
                  <br />
                  Summer Drinks
                </h3>
                <p>Fresh new pack Brusting fruits</p>{" "}
                <button
                  className="btn
                  "
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block  " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div className="caro  ">
                <p style={{ fontWeight: 500 }}>
                  {" "}
                  <i>Not fried not baked</i>{" "}
                </p>
                <h3>
                  Freeze Dried Fruits
                  <br />
                  Pineapple Drinks
                </h3>
                <p style={{ fontWeight: 500 }}>
                  Free shipping on Qualified ordders Over $35
                </p>

                <button
                  className="btn 
                  "
                >
                  SHOW NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
