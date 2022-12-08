import React from 'react';
import './Carlist.css';
import { useNavigate } from 'react-router-dom';
import CarCard from '../../../common/carcard/CarCard';
import Sidebar from '../../../common/sidebar/Sidebar';
import CarsListHeader from './CarsListHeader';

const Cars = () => {
  const navigate = useNavigate();
  const HandleDetails = (id) => navigate(`/Cars/${id}/details`);

  return (
    <div className="carslist-cont">
      <Sidebar />
      <div className="carslist-wrapper">
        <carsListHeader />
        <div className="car-cards-list">
          {Array.from(Array(10).keys()).map((car) => (
            <div
              key={car}
              className="car-card"
              onClick={() => { HandleDetails(car); }}
              aria-hidden="true"
            >
              <carCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
