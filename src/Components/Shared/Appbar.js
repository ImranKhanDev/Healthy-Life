import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import contact from "../Assets/images/contact.png";
const Appbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user);
  return (
    <>
      <div className="appbar-fluid appbar" style={{ paddingLeft: 18 }}>
        <Navbar collapseOnSelect expand="lg">
          <Link style={style.nav} href="/home" className="logo">
            Healthylife
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto navbar-lil ">
              <Link style={style.nav} className="link" href="/about">
                <span> About</span>{" "}
              </Link>
              <Link style={style.nav} className="link" href="/services">
                <span> Services</span>
              </Link>

              <Link style={style.nav} className="link" href="/dashboard">
                <span> Dashboard</span>
              </Link>

              <Link style={style.nav} className="link" href="/contact">
                <span> Contact Us</span>
              </Link>
            </Nav>
            {user && user.email ? (
              <Nav>
                <Link style={style.nav} className="link" href="/login">
                  <span className="login" onClick={logOut}>
                    {user?.displayName} ("") logOut
                  </span>
                </Link>
              </Nav>
            ) : (
              <Nav>
                <Link style={style.nav} className="link" href="/login">
                  <span className="login"> Login</span>
                </Link>
              </Nav>
            )}
            <Link href="/contact" style={style.nav}>
              <div className="ml-3 d-flex justify-content-around align-items-center">
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
