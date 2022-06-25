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
          <Navbar.Brand href="/home" className="logo">
            Healthylife
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-lil">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Fresh Food" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Fresh Fruit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Fresh Vegetables
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fresh Salad & Dips
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Milk Butter & Eggs
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Fresh Vegetables"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Potatoes & Sweet Potatoes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Onions & Leeks
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Carrot & Root Vegetables
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Brocolli & Cauliflower
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Cabbage & Greens
                </NavDropdown.Item>
              </NavDropdown>

              <Link style={{textDecoration: "none",marginRight:10}} to="/features">Price Drop</Link>
              <Link style={{textDecoration: "none"}} to="/contact">Contact Us</Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="/login">
                Login
              </Nav.Link> */}
              <Link style={{textDecoration: "none"}} to="/login">Login</Link>
            </Nav>
            <Nav.Link href="#deets">
              <div className="d-flex justify-content-around align-items-center">
                <span>
                  <img src={contact} alt="" />
                </span>
                <span>
                  call us : <br /> (+800)348916
                </span>
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Appbar;
