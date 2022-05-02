import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const SingleDeals = ({ pd }) => {
  // console.log(pd);
  return (
    <>
     
        <Col>
          <Card
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "3px solid #4FB68D",
              borderRadius: "5px",
            }}
            className="single-deals-card"
          >
            <Card.Img
              className="single-deals-img"
              variant="top"
              src={pd?.img}
              style={{ height: "440px" }}
            />
            <div className="middle-search">
              <div className="search">
                <BsSearch className="search-icon"/>
              </div>
            </div>
            <Card.Body style={{ height: "312px" }}>
              <Card.Title>Brand : {pd?.brand}</Card.Title>
              <Card.Text>{pd?.title}</Card.Text>
              <Card.Text>{pd?.name}</Card.Text>
              <Card.Text>
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
                <BsStarFill className="text-warning" />
              </Card.Text>
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
      
    </>
  );
};

export default SingleDeals;
