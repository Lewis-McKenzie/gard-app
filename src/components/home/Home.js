import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section text-center">
        <Container>
          <h1 className="display-3">Katie McKenzie Garden Services</h1>
          <p className="lead">Transforming Outdoor Spaces into Lush Gardens</p>
          <Button variant="light" size="lg">Discover More</Button>
        </Container>
      </header>

      <Container className="about-services-section my-5">
        <Row>
          <Col md={6}>
            <div className="p-4 rounded shadow">
              <div>
                <h2>About Us</h2>
                <p>
                  At Katie McKenzie Garden Services, we're passionate about creating beautiful and sustainable outdoor spaces.
                  Our experienced team of gardeners is dedicated to bringing your vision to life.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 rounded shadow">
              <h2>Our Services</h2>
              <ul>
                <li>Landscape Design</li>
                <li>Planting and Maintenance</li>
                <li>Seasonal Cleanup</li>
                <li>Irrigation Solutions</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="contact-section my-5">
        <Row>
          <Col md={6}>
            <div className="mb-5 p-4 rounded shadow">

              <h2>Contact Us</h2>
              <p>
                Ready to transform your garden? Contact us for a personalized consultation and let's create something extraordinary together.
              </p>
              <Button variant="success">Get in Touch</Button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/800x600"
              alt="Beautiful garden"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
