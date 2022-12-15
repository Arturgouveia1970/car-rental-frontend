import React from 'react';
import './CarCard.css';
import car1 from '../../../assets/images/Honda-Car.jpg';
import CarCardMedia from './CarCardMedia';

const CarCard = () => (
  <div className="car-card-cont">
    <img src={car1} alt="car" />
    <small className="car-card-name">HONDA CX </small>
    <small className="car-card-break">..................</small>
    <p className="car-desc">
      An electric car is a new electrical machine designed world
    </p>
    <CarCardMedia />
  </div>
);

export default CarCard;
