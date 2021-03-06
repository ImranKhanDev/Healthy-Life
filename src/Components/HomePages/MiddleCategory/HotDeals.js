import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleDeals from "./SingleDeals";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import NewArrive from "../../Assets/FakeData/NewArrive";
import productsDB from "../../Assets/FakeData/productsDB";

const HotDeals = () => {
  const [products, setProducts] = useState(productsDB);

  // useEffect(() => {
  //   fetch("/newArrive.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const sliderRef = useRef(null);
  // console.log(sliderRef.current);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
        className=" d-flex  justify-content-between align-items-center "
        style={{ paddingLeft: 8 }}
      >
        <div className="text-start inner">
          <h2> Hot Deals</h2>
          <p>Add bestselling products to weekly line up</p>
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
                width: "20px",
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
                width: "20px",
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
          <Slider ref={sliderRef} {...settings}>
            {products?.map((pd) => (
              <SingleDeals pd={pd} key={pd?.newarrive.id}></SingleDeals>
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default HotDeals;
