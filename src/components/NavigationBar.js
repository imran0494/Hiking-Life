import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="brand-container">
            <img
              src="/logo.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="Hiking Life"
            />
            <span className="brand-text">
              Hiking <span className="text-bold">Life</span>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link nav-link-spacing">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/class"
              className="nav-link nav-link-spacing"
            >
              Class
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/promo"
              className="nav-link nav-link-spacing"
            >
              Promo
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/online-class"
              className="nav-link nav-link-spacing"
            >
              Online Class
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link nav-link-spacing"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
