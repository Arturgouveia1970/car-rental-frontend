import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './src/features/home/Home';
// import Carlist from '../features/cars/carlist/Carslist';
import CarDetails from './src/features/cars/cardetails/CarDetails';
import MyReservations from './src/features/reservation/myreservations/MyReservations';
import Reserve from './src/features/reservation/reserve/Reserve';
import DeleteCar from './src/features/cars/deletecar/DeleteCar';
import NewCar from './src/features/cars/newcar/Newcar';
import Sidebar from './src/features/common/sidebar/Sidebar';
import Login from './src/features/login/Login';
import Register from './src/features/register/Register';
import InicialScreen from './src/features/inicialScreen/InicialScreen';
import { getReservations } from './src/Redux/Users/users';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  });

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<InicialScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/car/:id" element={<CarDetails />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
        <Route exact path="/reserve/:id" element={<Reserve />} />
        <Route exact path="/deletecar" element={<DeleteCar />} />
        <Route exact path="/newcar" element={<NewCar />} />
      </Routes>
    </Router>
  );
};

export default App;
