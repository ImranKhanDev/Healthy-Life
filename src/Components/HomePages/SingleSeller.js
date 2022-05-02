import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const SingleSeller = ({ pd }) => {
  console.log(pd.id);
  return (
    <>
      <div className="my-5">
        <Link to={`/singleProductDetails/${pd?.id}`}>
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
        </Link>
      </div>
    </>
  );
};

export default SingleSeller;
