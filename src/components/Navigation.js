import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="nav-name-text">NYA TYUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ textDecoration: "none" }}
              to="/portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ textDecoration: "none" }}
              to="https://docs.google.com/document/d/e/2PACX-1vSg2RenabXZbR7_qGrgXDXkAJpkJASP2FetDbaGRbBpZgMjME9-eWnHbCRsdf8ypRru9E9RetJAxSRb/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
