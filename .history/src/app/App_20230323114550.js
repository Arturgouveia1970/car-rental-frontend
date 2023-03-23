import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import Carlist from '../features/cars/carlist/Carslist';
import CarDetails from '../features/cars/cardetails/CarDetails';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';
import DeleteCar from '../features/cars/deletecar/DeleteCar';
import NewCar from '../features/cars/newcar/Newcar';
import Sidebar from '../features/common/sidebar/Sidebar';

const App = () => (
  (
    <>
      <Routes>
        
        <Route exact path="/" element={<Carlist />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/car/:id" element={<CarDetails />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
        <Route exact path="/reserve/:id" element={<Reserve />} />
        <Route exact path="/deletecar" element={<DeleteCar />} />
        <Route exact path="/newcar" element={<NewCar />} />

      </Routes>
    </>
  ));

export default App;
