import React from "react";
import Frame from "./pictures/frame/Frame";
import logo from "../../resources/logo.png";
import './Gallery.css'; // Import CSS file for styling

const Gallery = () => {
  return (
    <section className="gallery-page" id="gallery">
      <h1>Gallery</h1>
      <div className="gallery">
        <Frame
          image={logo}
          title="Frame 1"
          description="Description 1"
        />
        <Frame
          image={logo}
          title="Frame 1"
          description="Description 1"
        />
      </div>
    </section>

  );
};

export default Gallery;