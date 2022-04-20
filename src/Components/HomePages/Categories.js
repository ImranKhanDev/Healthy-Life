import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SingleCategories from "./SingleCategories";
const Categories = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/categoriesDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sliderRef = useRef(null);
  // console.log(sliderRef.current);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
        className="   d-flex  justify-content-between align-items-center"
        style={{ paddingLeft: 18 }}
      >
        <div className="text-start">
          <h2> Popular Categories </h2>

          <p>Add Popular Categories to weekly line up</p>
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

      <Row xs={12} md={2} lg={1}>
        <Col>
          {" "}
          <Slider ref={sliderRef} {...settings}>
            {products?.map((pd) => (
              <SingleCategories pd={pd} id={pd.id}></SingleCategories>
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default Categories;
