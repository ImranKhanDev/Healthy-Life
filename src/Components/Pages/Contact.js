import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiFacebook } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <div className="py-5" style={{ background: "black", color: "#fff" }}>
        <h1>Contact with us </h1>
        <p>We're here for 24/7 support</p>
      </div>
      <div className="container">
        <Row>
          <Col>
            <img
              src="./contact.png"
              alt="contact"
              style={{ height: 340, width: 300 }}
              rounded
              fluid
            />
            <h4>We're Available in social media 24/7</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: "10px",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
                href="https://www.facebook.com/dreamcoder2022"
              >
                <SiFacebook /> <span>FACEBOOK</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web.whatsapp.com"
                style={{
                  marginRight: "10px",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <FaWhatsappSquare /> <span>Whatsapp</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: "10px",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
                href="https://www.instagram.com/"
              >
                <AiFillInstagram /> <span>Instragram</span>
              </a>
            </div>
            <br />
          </Col>
          <Col>
            <div className="py-4">
              <h2 style={{ textAlign: "center", fontWeight: "700" }}>
                Connect With Healthy life!
              </h2>

              <div className="form-area px-2">
                <form>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    name="message"
                  />
                  <br />
                  <div className="text-center mt-3">
                    <button className=" btn btn-dark" type="submit">
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
