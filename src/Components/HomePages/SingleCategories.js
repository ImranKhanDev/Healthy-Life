import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiRightArrow } from "react-icons/bi";
import { BsStarFill, BsStar } from "react-icons/bs";
const SingleCategories = ({ pd }) => {
  // console.log(pd);

  return (
    <>
      <Col style={{ marginRight: "20px" }}>
        <Card
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            border: "none",
          }}
        >
          <Card.Body className="d-flex  justify-content-between align-items-center">
            <div className="images">
              <Card.Img
                variant="top"
                className="card-img"
                style={{
                  height: "163px",
                  width: "540px",
                }}
                src={pd?.img}
              />
            </div>
            <div
              className="content"
              style={{ padding: "0px 15px", textAlign: "left" }}
            >
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd?.total}</Card.Text>
              <button className="btn">
                Shop Now <BiRightArrow className="arrow" size={40} />
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ marginRight: "20px" }}>
        <Card
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            border: "none",
          }}
        >
          <Card.Body className="d-flex  justify-content-between align-items-center">
            <div className="images">
              <Card.Img
                variant="top"
                className="card-img"
                style={{
                  height: "163px",
                  width: "540px",
                }}
                src={pd?.img}
              />
            </div>
            <div
              className="content"
              style={{ padding: "0px 15px", textAlign: "left" }}
            >
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd?.total}</Card.Text>
              <button className="btn">
                Shop Now <BiRightArrow className="arrow" size={40} />
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
   </>
  );
};

export default SingleCategories;
