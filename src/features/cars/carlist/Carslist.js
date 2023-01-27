import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Carlist.css';
// import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import CarCard from '../../common/carcard/CarCard';
// import { v4 as uuidv4 } from 'uuid';
import Sidebar from '../../common/sidebar/Sidebar';
import CarsListHeader from './CarsListHeader';
import CarCard from './CarCard';
import './Carousel.css';

const Carlist = () => {
  const [cars, setCars] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get('https://carrental2.onrender.com/api/v1/cars')
      .then((response) => {
        setCars(response.data.cars);
        setloading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }
  return (
    <div className="carslist-cont">
      <Sidebar />
      <div className="carslist-wrapper">
        <CarsListHeader />
        <div className="car-cards-list">
          {/* <ul className="carlist"> */}
          <Carousel>
            {/* {
              cars.map((image, index) => (
                <img key={index} src={image.id} alt={cars.model} />
              ))
            } */}
            {cars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                model={car.model}
                image={car.image}
                year={car.year}
                price={car.price}
              />
            ))}
          </Carousel>
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Carlist;
