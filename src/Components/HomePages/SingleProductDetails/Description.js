import React, { useEffect, useRef, useState } from "react";

const Description = () => {
  const [products, setProducts] = useState([]);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTempData(data);
      });
  }, []);
  const filterProduct = (categoryItem) => {
    const updatedProducts = tempData.filter((currentElement) => {
      return currentElement.type === categoryItem;
    });
    setProducts(updatedProducts);
  };
  const sliderRef = useRef(null);
  const settings = {
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    rows: 2,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1223,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className=" py-5">
        <div
          className="featuredSlideButton"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 ",
          }}
        >
          <ul className="d-flex" type="none">
            <li className="me-4">
              <h2 onClick={() => setProducts(tempData)}>Featured</h2>
            </li>
            <li className="me-4">
              <h2 onClick={() => filterProduct("name")}>OnSale</h2>
            </li>
            <li className="me-4 bestSeller">
              <h2 onClick={() => filterProduct("id")}>Bestseller</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
