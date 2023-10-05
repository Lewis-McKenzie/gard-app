import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <NavLink className="nav-link" to="/">
              <img className="logo" src={logo} alt="home" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="nav-box">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/">
                Gallery
              </NavLink>
              <NavLink className="nav-link" to="/">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
