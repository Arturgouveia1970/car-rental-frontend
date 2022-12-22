import React from 'react';
import './CarDetails.css';
import Sidebar from '../../common/sidebar/Sidebar';
// import CarsListHeader from '../carlist/CarsListHeader';
import car1 from '../../../assets/images/Honda-Car.jpg';

const CarDetails = () => (
  <div className="carslist-cont">
    <Sidebar />
    <div className="car-details">
      <img src={car1} alt="car" />
      <div className="text">
        <h4>HONDA CX 2010</h4>
        <h4>$250.00 p/d</h4>
        <button type="button" className="book-btn">Reserve now</button>
      </div>
    </div>
  </div>
);

export default CarDetails;
