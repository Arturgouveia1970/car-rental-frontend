/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './DeleteCar.module.css';

const  = ({
  id, image, model, year, cars, setCars,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const removeCar = (id) => {
    axios
      .delete(`https://dreamcars.onrender.com/api/v1/cars/${id}`)
      .then(() => {
        let filteredCars = [];
        filteredCars = cars.filter((car) => car.id !== id);
        setCars(filteredCars);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p className={`${styles.errorMsg} fs-5`}>{errorMessage}</p>
      <section className={`${styles.carCnt} mx-4`} key={id}>
        <div className={styles.imgCnt}>
          <img src={image} alt={model} className={styles.carImg} />
        </div>
        <div className="model-detail d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 mt-3">{model}</h3>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
            <h5 className="h6 pt-1">{year}</h5>
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeCar(id)}
          className="btn btn-danger mb-3"
        >
          Delete
        </button>
      </section>
    </>
  );
};

.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setCars: PropTypes.func.isRequired,
};

export default ;
