import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill, BsStar } from "react-icons/bs";
const SingleSeller = ({ pd }) => {
  console.log(pd);
  return (
    <>
      <div className="my-5">
        <Col style={{ marginRight: "20px" }}>
          <Card style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <Card.Img variant="top" src={pd?.img} />
            <Card.Body>
              <Card.Title>{pd?.name}</Card.Title>
              <Card.Text>{pd?.title}</Card.Text>
            
              <Card.Text>
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStar />
              </Card.Text>
              <Card.Text>{pd?.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleSeller;
