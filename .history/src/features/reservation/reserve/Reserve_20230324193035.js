import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import car1 from '../../../assets/images/Honda-Car.jpg';

const Reserve = () => (
  <div className="">
    <Sidebar />
    <div className="car-list">
      <img src={car1} alt="car" />
    </div>
  </div>
);

export default Reserve;
