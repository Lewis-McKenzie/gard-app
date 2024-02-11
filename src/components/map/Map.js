import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapWithRadius.css';

const MapWithRadius = () => {
    const areasCovered = [
        { name: 'Bromley', location: [51.4, 0.01], radius: 5000 },
    ];

    const [userLocation, setUserLocation] = useState(null);


    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                },
                { enableHighAccuracy: true } // Enable high accuracy mode
            );
        };

        getLocation();
    }, []);

    // Custom icon for the pin marker
    const userIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41],
    });

    return (
        <div className="map-container">
            <MapContainer center={userLocation ?? [51.4, 0.01]} zoom={12} className="map">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {userLocation && (
                    <Marker position={userLocation} icon={userIcon}>
                    </Marker>
                )}
                {areasCovered.map((area) => (
                    <Circle center={area.location} radius={area.radius}>
                        <Popup>
                            Area covered
                        </Popup>
                    </Circle>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapWithRadius;
