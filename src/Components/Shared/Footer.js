import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { ImYoutube } from "react-icons/im";

import googlePlay from "../Assets/images/google_play.png";
import playStore from "../Assets/images/app_store.png";

const Footer = () => {
  return (
    <div
      className="footer-fluid py-5 my-5 text-start "
      style={{ paddingLeft: 18, color: "grey" }}
    >
      <Row>
        <Col>
          <Card.Text>
            <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
              HEALTHY LIFE
            </h1>
          </Card.Text>
          <Card.Text>
            We are a team of designers and developers that create high quality
            Magento, Prestashop, Opencart.
          </Card.Text>
          <Card.Text>
            <div className="d-flex  justify-content-start align-items-center">
              <p>
                <FaPhoneVolume size={60} />
              </p>
              <p>
                <span>NEED HELP?</span>
                <span>(+880) 18124 6889 90,</span>
                <span>(+880) 1567 889 149</span>
              </p>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="social d-flex  align-items-center">
              <ImFacebook style={{ marginRight: "24px" }} size={30} />
              <BsTwitter style={{ marginRight: "24px" }} size={30} />
              <CgInstagram style={{ marginRight: "24px" }} size={30} />
              <ImYoutube style={{ marginRight: "24px" }} size={30} />
            </div>
          </Card.Text>
        </Col>
        <Col>
          <Card.Text>
            <h5>HEALTHY LIFE</h5>
            <hr className="hr-style" style={{}} /> <br />
          </Card.Text>
          <Card.Text
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
              color: "grey",
            }}
          >
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Delivery{" "}
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Secure Payment
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              About Us
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Contact Us
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Stores
            </Link>
          </Card.Text>
        </Col>
        <Col>
          <Card.Text>
            <h5>Custom Links</h5>
            <hr className="hr-style" style={{}} /> <br />
          </Card.Text>
          <Card.Text
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              paddingTop: "10px",
            }}
          >
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Legal Notice{" "}
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Prices Drop
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              New Products
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              Best Sales
            </Link>
            <Link style={{ color: "grey", textDecoration: "none" }} href="/">
              My Account
            </Link>
          </Card.Text>
        </Col>
        <Col>
          <Card.Text>
            <h5>NewsLetter</h5>
            <hr className="hr-style" style={{}} /> <br />
          </Card.Text>
          <Card.Text>
            <p>
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the legal notice.
            </p>
          </Card.Text>
          <Card.Text>
            <input
              style={{ borderRadius: "22px 0px 0px 22px" }}
              placeholder="Enter"
              type="text"
            />
            <button style={{ borderRadius: "0px 22px 22px 0px" }}>
              Sign Up
            </button>
          </Card.Text>
          <Card.Text className="googleImg d-flex justify-content-around align-items-center">
            <img
              src={googlePlay}
              style={{ marginRight: "5px" }}
              alt="google play image"
              className="gp"
            />
            <img src={playStore} className="ps" alt="google play image" />
          </Card.Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
