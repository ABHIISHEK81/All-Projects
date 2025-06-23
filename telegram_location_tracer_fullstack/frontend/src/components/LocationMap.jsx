import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchLocations } from '../services/api';

function LocationMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return (
    <MapContainer center={[20, 77]} zoom={3} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.location.lat, loc.location.lon]}>
          <Popup>{loc.location.city}, {loc.location.country}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LocationMap;
