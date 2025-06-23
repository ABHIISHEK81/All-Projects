export const fetchLocations = async () => {
  const res = await fetch('http://localhost:5000/locations');
  return res.json();
};
