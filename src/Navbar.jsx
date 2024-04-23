import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navbarr(props) {
  return (
    <Navbar
      className="navbar-default navbar navbar-expand-lg navbar-dark bg-dark p-3"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">C.V.</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavDropdown"
          aria-label="Toggle navigation menu"
        />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/" className="nav-link mx-2 active">
                {props.home}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#About" className="nav-link mx-2">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Education" className="nav-link mx-2">
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/AllMyWork" className="nav-link mx-2">
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact" className="nav-link mx-2">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
