import React from "react";
import { Container, Row } from "react-bootstrap";
import service2 from "../Assets/images/service_item2.png";
import service3 from "../Assets/images/service_item3.png";
import service4 from "../Assets/images/service_item4.png";
import service1 from "../Assets/images/service_item1.png";
const Service = () => {
  return (
    <div className="service-fluid my-4 pb-5 service">
      <>
        <Row>
          <div className="service-content d-flex  justify-content-around align-items-center text-start content">
            <div className="service-item d-flex  justify-content-around align-items-center">
              <div>
                <img
                  src={service2}
                  style={{ marginRight: "15px" }}
                  alt="service_item"
                />
              </div>
              <div>
                <h5>Free Shipping</h5>
                <p>Returns are free within 9 days</p>
              </div>
            </div>
            <div className="service-item d-flex  justify-content-between align-items-center">
              <div className="img">
                <img
                  src={service3}
                  style={{ marginRight: "15px" }}
                  alt="service_item"
                />
              </div>
              <div>
                <h5>Free Returns</h5>
                <p>On all orders over $75.00.</p>
              </div>
            </div>
            <div className="service-item d-flex  justify-content-between align-items-center">
              <div>
                <img
                  src={service4}
                  style={{ marginRight: "15px" }}
                  alt="service_item"
                />
              </div>
              <div>
                <h5>100% Payment Secure</h5>
                <p>Your payment are safe with us.</p>
              </div>
            </div>
            <div className="service-item d-flex  justify-content-between align-items-center">
              <div>
                <img
                  src={service1}
                  style={{ marginRight: "15px" }}
                  alt="service_item"
                />
              </div>
              <div>
                <h5>Support 24/7</h5>
                <p>Contact us 24 hours a day</p>
              </div>
            </div>
          </div>
        </Row>
      </>
    </div>
  );
};

export default Service;
