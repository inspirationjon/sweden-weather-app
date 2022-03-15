import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WeatherRoutes } from './modules/weather/routes';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<WeatherRoutes />} />
      </Routes>
    </>
  );
}
