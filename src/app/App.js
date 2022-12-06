import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import Cars from '../features/cars/carlist/Carlist';
import CarDetails from '../features/cars/cardetails/CarDetails';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';

const App = () => (
  (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/carlist" element={<Cars />} />
          <Route exact path="/cardetails" element={<CarDetails />} />
          <Route exact path="/myreservations" element={<MyReservations />} />
          <Route exact path="/reserve" element={<Reserve />} />

        </Routes>
      </Router>
    </>
  ));

export default App;
