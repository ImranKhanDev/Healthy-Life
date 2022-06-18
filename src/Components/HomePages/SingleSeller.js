import React from "react";
import { Col, Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const SingleSeller = ({ pd }) => {
  // console.log(pd.id);
  return (
    <>
      <div className="my-5">
        <Link
          to={`/singleProductDetails/${pd.sellerdb?.id}`}
          style={{ textDecoration: "none", color: "black", fontWeight: "700" }}
        >
          <Col style={{ marginRight: "20px" }}>
            <Card style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              <Card.Img variant="top" src={pd?.sellerdb?.img} />
              <Card.Body>
                <Card.Title>{pd.sellerdb?.name}</Card.Title>
                <Card.Text>{pd?.sellerdb.title}</Card.Text>

                <Card.Text>
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStar />
                </Card.Text>
                <Card.Text>Price : $ {pd?.sellerdb.price}</Card.Text>
                <button style={styles.btnStyle}>Get Details</button>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </div>
    </>
  );
};

const styles = {
  btnStyle: {
    backgroundColor: "#FFC107",
    padding: "2px 8px",
    color: "black",
    borderRadius:"5px",
    border:'none',
  },
};
export default SingleSeller;
