import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import contact from "../Assets/images/contact.png";
const Appbar = () => {
  return (
    <>
      <div className="appbar-fluid appbar" style={{ paddingLeft: 18 }}>
        <Navbar collapseOnSelect expand="lg">
          <Link style={style.nav} to="/home" className="logo">
            Healthylife
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto navbar-lil ">
              <Link style={style.nav} className="link" to="/about">
                About
              </Link>
              <Link style={style.nav} className="link" to="/services">
                Services
              </Link>

              <Link style={style.nav} className="link" to="/dashboard">
                Dashboard
              </Link>

              <Link style={style.nav} className="link" to="/contact">
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Link style={style.nav} className="link" to="/login">
                Login
              </Link>
            </Nav>
            <Link to="/contact" style={style.nav}>
              <div className="d-flex justify-content-around align-items-center">
                <span>
                  <img src={contact} alt="" />
                </span>
                <span>
                  call us : <br /> (+800)348916
                </span>
              </div>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
const style = {
  nav: {
    textDecoration: "none",
    marginRight: 10,
    color: "black",
  },
};

export default Appbar;
