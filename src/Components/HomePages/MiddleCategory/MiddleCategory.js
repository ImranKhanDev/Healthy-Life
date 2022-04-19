import React from "react";
import HotDeals from "./HotDeals";
import NewArrive from "./NewArrive";
import { Row, Col } from "react-bootstrap";
const MiddleCategory = () => {
  return (
    <div className="py-5">
      {/*
       */}
      <Row className="d-flex">
        <Col style={{ width: "300px" }}>
          <HotDeals />
        </Col>
        <Col style={{ width: "900px" }}>
          <NewArrive />{" "}
        </Col>
      </Row>
    </div>
  );
};

export default MiddleCategory;
