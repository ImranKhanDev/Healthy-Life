import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleArrive = ({ pd }) => {
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
            <Card.Img variant="top" src={pd?.img} />
            <Card.Body>
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd?.title}</Card.Text>
              <Card.Text>{pd?.rating}</Card.Text>
              <Card.Text>{pd?.price}</Card.Text>
            </Card.Body>
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
            <Card.Img variant="top" src={pd?.img} />
            <Card.Body >
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd?.title}</Card.Text>
              <Card.Text>{pd?.rating}</Card.Text>
              <Card.Text>{pd?.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleArrive;
