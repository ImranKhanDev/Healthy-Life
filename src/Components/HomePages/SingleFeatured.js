import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleFeatured = ({ pd }) => {
  // console.log(pd);
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col>
          <Card
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="main d-flex justify-content-between align-items-center">
              <div className="img-div">
                <Card.Img
                  variant="top"
                  className="featured__img"
                  src={pd?.img}
                />
              </div>
              <div className="div-body">
                <Card.Body>
                  <Card.Title>{pd?.name}</Card.Title>
                  <Card.Text>{pd?.title}</Card.Text>
                  <Card.Text>{pd?.rating}</Card.Text>
                  <Card.Text>{pd?.price}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginRight: "20px",
            }}
          >
            <div className="main d-flex justify-content-between align-items-center">
              <div className="img-div">
                <Card.Img variant="top" className="featured__img" src={pd?.img} />
              </div>
              <div className="div-body">
                <Card.Body>
                  <Card.Title>{pd?.name}</Card.Title>
                  <Card.Text>{pd?.title}</Card.Text>
                  <Card.Text>{pd?.rating}</Card.Text>
                  <Card.Text>{pd?.price}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleFeatured;
