import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import contact from "../Assets/images/contact.png";
const Appbar = () => {
  return (
    <>
      <div className="appbar-fluid" style={{ paddingLeft: 18 }}>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className="logo">
            Healthylife
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
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

              <Nav.Link href="#features">Prices Drop</Nav.Link>
              <Nav.Link href="#features">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <BsSearch
                  size={20}
                  style={{ marginRight: 20 }}
                  className="search"
                />
              </Nav.Link>
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
