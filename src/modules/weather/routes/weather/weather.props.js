import React from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export const useWeather = () => {
  const [address, setAddress] = React.useState('');

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const { lng, lat } = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates({
      lng: Number(lng).toFixed(6),
      lat: Number(lat).toFixed(6)
    });
  };

  // Weather Info Logic
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/geotype/point/lon/' +
        coordinates.lng +
        '/lat/' +
        coordinates.lat +
        '/data.json'
    )
      .then(response => response.json())
      .then(data => setData(data?.timeSeries))
      .catch(err => setError(err));
  }, [coordinates]);

  // Props
  return {
    address,
    setAddress,
    coordinates,
    setCoordinates,
    handleSelect,
    data,
    error
  };
};
