import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill, BsStar } from "react-icons/bs";
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
            <Card.Img variant="top" src={pd?.newarrive?.img} />
            <Card.Body>
              <Card.Title>{pd?.newarrive?.name}</Card.Title>
              <Card.Text>{pd?.newarrive.title}</Card.Text>
              <Card.Text>
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStar />
              </Card.Text>
              <Card.Text>{pd?.newarrive?.price}</Card.Text>
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
            <Card.Img variant="top" src={pd?.newarrive?.img} />
            <Card.Body>
              <Card.Title>{pd?.newarrive?.name}</Card.Title>
              <Card.Text>{pd?.newarrive.title}</Card.Text>
              <Card.Text>
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStar />
              </Card.Text>
              <Card.Text>{pd?.newarrive?.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleArrive;
