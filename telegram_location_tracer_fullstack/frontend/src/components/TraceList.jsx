import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';

function TraceList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return (
    <div className="mt-4">
      <h2 className="font-semibold">Traced Sessions</h2>
      <ul>
        {locations.map((item, i) => (
          <li key={i}>{item.ip} - {item.location.city}, {item.location.country}</li>
        ))}
      </ul>
    </div>
  );
}

export default TraceList;
