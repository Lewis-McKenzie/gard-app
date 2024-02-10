import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer-section bg-light text-dark py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h4>Contact Us</h4>
            <p>Email: info@greenthumbgardens.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="mr-3"><i className="fa fa-facebook"></i></a>
              <a href="#" className="mr-3"><i className="fa fa-twitter"></i></a>
              <a href="#" className="mr-3"><i className="fa fa-instagram"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
