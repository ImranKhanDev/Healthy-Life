import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleSeller from "./SingleSeller";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import SellerDb from "../Assets/FakeData/SellerDb";
import productsDB from "../Assets/FakeData/productsDB";

const BestSeller = () => {
  // const [products, setProducts] = useState(productsDB.SellerDb);
  const [products, setProducts] = useState(productsDB);

  // useEffect(() => {
  //   fetch("/SellerDb.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const sliderRef = useRef(null);
  // console.log(sliderRef.current);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 2,
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
        className=" d-flex  justify-content-between align-items-center"
        style={{ paddingLeft: 18 }}
      >
        <div className="text-start best-seller">
          <h2> Best Seller</h2>
          <p>Add bestselling products to weekly line up</p>
        </div>
        <div className="div d-flex best-seller pointer">
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

      <Row className="g-4">
        <Col>
          {" "}
          <Slider ref={sliderRef} {...settings}>
            {products?.map((pd) => (
              <SingleSeller pd={pd} key={pd?.sellerdb.id}></SingleSeller>
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default BestSeller;
