import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Carslist.css';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from '../../common/sidebar/Sidebar';
import CarCard from './CarCard';
import './Carousel.css';

const Carlist = () => {
  const [cars, setCars] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get('https://dreamcars.onrender.com/api/v1/cars')
      .then((response) => {
        setCars(response.data.cars);
        // console.log(response.data);
        setloading(false);
      });
  }, []);

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 2;
  }
  if (lgUp) {
    SlideToShowNumber = 3;
  }
  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }
  const newLocal = <Sidebar />;

  return (
    <>
      {newLocal}
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>Our Latest Cars</strong>
      </h2>
      <p className="fs-5 text-center text-muted mb-5">
        Please select a car from below to reserve
      </p>
      <div>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button type="button" onClick={previousSlide}>
              <i className="fa-solid fa-caret-left" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button type="button" onClick={nextSlide}>
              <i className="fa-solid fa-caret-right" />
            </button>
          )}
          className="car-carousel"
          wrapAround
          slidesToShow={SlideToShowNumber}
          renderBottomCenterControls={false}
        >
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
      </div>
    </>
  );
};

export default Carlist;
