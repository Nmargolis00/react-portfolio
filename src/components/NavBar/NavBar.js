import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="navBar" href="/">Nate Margolis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navBar" href="/">About Me</Nav.Link>
            <Nav.Link className="navBar" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="navBar" href="/contact">Contact</Nav.Link>
            <Nav.Link className="navBar" href="https://drive.google.com/file/d/1nWWyI8_7VuBENfZKHbFrhMQMzhikVRio/view?usp=sharing" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;