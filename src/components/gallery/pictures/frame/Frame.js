import React from 'react';
import './Frame.css'; // Import CSS file for styling

const Frame = ({ image, title, description }) => {
    return (
        <div className="frame shadow">
            <img src={image} alt={title} className="frame-image" />
            <div className="frame-content frame-content-border">
                <h3 className="frame-title">{title}</h3>
                <p className="frame-description">{description}</p>
            </div>
        </div>
    );
};

export default Frame;
