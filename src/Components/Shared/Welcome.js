import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsShuffle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import log from "../Assets/images/america-log.jpg";

const Welcome = () => {
  return (
    <>
      <div className="welcome-fluid">
        <Navbar
          style={{ height: 40, paddingLeft: 18 }}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home" className="brand">
            Welcome you to Healthylife store!
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav">
              <Nav.Link href="#features">
                <BsShuffle /> Compare(0) |
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className=" d-flex justify-content-center align-items-center"
              >
                <AiOutlineHeart style={{ marginRight: 3 }} /> {""}
                Wishlist(0) |
              </Nav.Link>
              <Nav.Link href="#pricing">Setting |</Nav.Link>
              <Nav.Link
                href="#pricing"
                className=" d-flex justify-content-center align-items-center"
              >
                USD
                <BiDollar />|
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className=" d-flex justify-content-center align-items-center"
              >
                <img src={log} alt="american-flag" style={{ marginRight: 3 }} />
                USD
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Welcome;
