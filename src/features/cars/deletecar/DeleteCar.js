import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
// import CarsListHeader from '../carlist/CarsListHeader';
import car1 from '../../../assets/images/Honda-Car.jpg';
import './Delete.css';

const DeleteCar = () => (
  <div className="">
    <Sidebar />
    <div className="car-list">
      <img src={car1} alt="car" />
      <div className="text">
        <button type="button" className="delete-btn">Delete Car</button>
      </div>
    </div>
  </div>
);

export default DeleteCar;
