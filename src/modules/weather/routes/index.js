import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Weather } from './weather';

export const WeatherRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Weather />} />
    </Routes>
  );
};
