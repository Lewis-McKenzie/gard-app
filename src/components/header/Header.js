import React, { useState, useEffect } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../resources/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded} onSelect={handleNavItemClick}>
      <Container>
        <Navbar.Brand>
          <Nav.Link href="#home">
            <img className="logo" src={logo} alt="home" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link className="nav-link" href="#gallery" onClick={() => setExpanded(false)}>
              Gallery
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
            <Nav.Link className="nav-link" href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
