import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleDeals = ({ pd }) => {
  // console.log(pd);
  return (
    <>
      <div className="" style={{}}>
        <Col>
          <Card
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "3px solid #4FB68D",
              borderRadius: "5px",
            }}
          >
            <Card.Img variant="top" src={pd?.img} style={{ height: "440px" }} />
            <Card.Body style={{ height: "312px" }}>
              <Card.Title>Brand : {pd?.brand}</Card.Title>
              <Card.Text>{pd?.title}</Card.Text>
              <Card.Text>{pd?.name}</Card.Text>
              <Card.Text>Rating : {pd?.rating}</Card.Text>
              <Card.Text>
                <Card.Text>
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    Price : <del>$23 90</del> {pd?.price}
                  </span>
                </Card.Text>
                <span style={{ fontWeight: "600" }}>
                  Available : {pd?.available}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleDeals;
