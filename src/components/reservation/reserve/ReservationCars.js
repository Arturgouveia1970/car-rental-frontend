/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './Reserve.module.css';

const ReservationCars = ({
  cars, city, start_date, end_date, setCars, setLoadingFirst,
}) => {
  const [car, setCar] = useState(cars[0]);
  const [reserved, setReserved] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const reserveCar = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://dreamcars4.onrender.com/api/v1/reservation/${user.user.id}/${car.id}/${city}/${start_date}/${end_date}`,
      )
      .then(() => setReserved(true));
    setLoading(true);
  };

  const backToFirstPage = () => {
    setLoadingFirst(false);
    setCars([]);
  };

  if (reserved) {
    return <Navigate replace to="/reservation" />;
  }

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}
    >
      <button
        aria-label="Some label"
        type="button"
        className={`${styles.zindex} ${styles.backBtn} btn text-white fs-1 align-self-start ms-3`}
        onClick={() => backToFirstPage()}
      >
        <i className="fa-regular fa-circle-left" />
      </button>
      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a car</h2>
      <p className={`${styles.zindex} fs-5 text-white`}>
        Take your dream car to your next big event!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Choose one of our amazing cars!
      </p>
      <form
        onSubmit={reserveCar}
        className={`${styles.zindex} d-flex justify-content-around mb-5 align-items-baseline`}
      >
        <select
          className={`${styles.input} form-select`}
          onChange={(e) => setCar(cars[e.target.value])}
        >
          {cars.map((car, index) => (
            <option defaultValue key={car.id} value={index}>
              {car.model}
            </option>
          ))}
        </select>
        {loading ? (
          <button
            aria-label="Some label"
            type="submit"
            className={`${styles.btn} disabled btn px-4 ms-4`}
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
            Reserve
          </button>
        )}
      </form>

      <div className={`${styles.zindex} ${styles.carCard} d-flex`}>
        <img src={car.image} alt="car" className={styles.carImg} />
        <div className={styles.carInfo}>
          <h3 className="fs-2 fs-sm-3 mb-2">
            <span>Model: </span>
            {car.model}
          </h3>
          <h5 className="fs-5">
            $
            {' '}
            {car.price}
          </h5>
        </div>
      </div>
    </div>
  );
};

ReservationCars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setCars: PropTypes.func.isRequired,
  setLoadingFirst: PropTypes.func.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default ReservationCars;
