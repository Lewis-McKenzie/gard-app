import React from "react";
import MapWithRadius from "../map/Map";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-container" id="services">
      <div className="service-card">
        <h2 className="service-title">Our Services</h2>
        <ul className="service-list">
          <li>Maintenance including pruning, weeding, and seasonal cleanup</li>
          <li>Plant care advice and consultation</li>
          <li>Customized planting plans tailored to your garden</li>
          <li>High-quality plant sourcing and seasonal planting</li>
          <li>Stunning seasonal container arrangements</li>
        </ul>
      </div>


      <img
        src="https://via.placeholder.com/800x600"
        alt="Beautiful garden"
        className="img-fluid rounded shadow"
        style={{ height: '600px' }}
      />

      <MapWithRadius />

      <div className="service-card">
        <h2 className="service-title">Areas Covered</h2>
        <ul className="service-list">
          <li>Bromley</li>
          <li>Beckenham</li>
          <li>West Wickham</li>
          <li>Hayes</li>
          <li>Keston</li>
          <li>Sevenoaks</li>
          <li>Surrounding Areas</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesPage;
