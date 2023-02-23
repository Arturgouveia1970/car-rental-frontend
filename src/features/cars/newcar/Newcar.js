import React, { useState } from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
// import CarsListHeader from '../carlist/CarsListHeader';
import car1 from '../../../assets/images/Honda-Car.jpg';
import './Newcar.css';

const NewCar = () => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      <Sidebar />
      <div className="new-car-form">
        <img src={car1} alt="car" />
        <form className="add-car-form">
          <input type="text" placeholder="Model" onChange={onChange} />
          <input type="text" placeholder="Year" onChange={onChange} />
          <input type="text" placeholder="Image Url" onChange={onChange} />
        </form>
        <div className="text">
          <button type="button" className="addcar-btn">Add Car</button>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
