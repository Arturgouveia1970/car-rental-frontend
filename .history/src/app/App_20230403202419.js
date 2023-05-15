import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
// import Carlist from '../features/cars/carlist/Carslist';
import CarDetails from '../features/cars/cardetails/CarDetails';
import MyReservations from '../features/reservation/myreservations/MyReservations';
import Reserve from '../features/reservation/reserve/Reserve';
import DeleteCar from '../features/cars/deletecar/DeleteCar';
import NewCar from '../features/cars/newcar/Newcar';
import Sidebar from '../features/common/sidebar/Sidebar';
import Login from '../features/login/Login';
import Register from '../features/register/Register';
import InicialScreen from '../features/inicialScreen/InicialScreen';

const App = () => (
  (
    <>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<InicialScreen />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/car/:id" element={<CarDetails />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
        <Route exact path="/reserve/:id" element={<Reserve />} />
        <Route exact path="/deletecar" element={<DeleteCar />} />
        <Route exact path="/newcar" element={<NewCar />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  ));

export default App;
