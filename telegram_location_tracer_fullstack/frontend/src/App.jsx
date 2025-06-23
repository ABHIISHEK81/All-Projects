import React from 'react';
import LocationMap from './components/LocationMap';
import TraceList from './components/TraceList';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Telegram Location Tracer</h1>
      <LocationMap />
      <TraceList />
    </div>
  );
}

export default App;
