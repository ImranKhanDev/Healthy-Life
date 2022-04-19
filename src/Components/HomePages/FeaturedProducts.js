import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SingleFeatured from "./SingleFeatured";



const FeaturedProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/sellerDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div
        className="mt-4 d-flex  justify-content-between align-items-center"
        style={{ paddingLeft: "18px" }}
      >
        <div className="text-start">
          <h2> Featured Products</h2>
          <p>Add featured products to weekly line up.</p>
        </div>
        <div className="div d-flex">
          <div className="prev ">
            <AiOutlineArrowLeft
              size={10}
              style={{
                marginRight: 30,
                color: "grey",
                cursor: "pointer",
                height: "20px",
                width: "20",
                border: "2px solid grey",
                borderRadius: "50%",
              }}
              onClick={() => sliderRef?.current?.slickPrev()}
            />
          </div>
          <div className="next ">
            <AiOutlineArrowRight
              size={10}
              style={{
                color: "grey",
                marginRight: 30,
                cursor: "pointer",
                height: "20px",
                width: "20",
                border: "2px solid grey",
                borderRadius: "50%",
              }}
              onClick={() => sliderRef?.current?.slickNext()}
            />
          </div>
        </div>
      </div>

      <Row className="">
        <Col>
          {" "}
          <Slider ref={sliderRef} {...settings}>

            {products?.map((pd) => (
              <SingleFeatured pd={pd} id={pd.id}></SingleFeatured>
            ))}

          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default FeaturedProducts;
