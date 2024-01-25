import React, { useState } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar-custom fixed-top" expanded={expanded} onSelect={handleNavItemClick}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img className="logo" src={logo} alt="home" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/" onClick={() => setExpanded(false)}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/services" onClick={() => setExpanded(false)}>
              Services
            </NavLink>
            <NavLink className="nav-link" to="/gallery" onClick={() => setExpanded(false)}>
              Gallery
            </NavLink>
            <NavLink className="nav-link" to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/about" onClick={() => setExpanded(false)}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
