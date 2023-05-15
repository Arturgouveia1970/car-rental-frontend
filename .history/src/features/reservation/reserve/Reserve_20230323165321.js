import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import ReservationCars from './ReservationCars';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // const user = useSelector((state) => state.user);

  const today = new Date().toISOString().slice(0, 10);

  const findCars = (e) => {
    e.preventDefault();
    if (startDate && city) {
      axios
        .get(`https://dreamcars.onrender.com/api/v1/cars/${id}`)
        .then((response) => setCars(response.data.cars));
      setLoading(true);
    }
  };

  const reserveCar = (e) => {
    e.preventDefault();
    if (startDate && endDate && city) {
      setLoading(true);
      axios
        .post(
          `https://dreamcars.onrender.com/api/v1/reservations/${Number(id)}/${startDate}/${endDate}/${city}`,
        )
        .then(() => {
          setReserved(true);
        })
        .catch((error) => {
          setLoading(false);
          setErrorMessage(error.response.data.error);
        });
    }
  };

  if (cars.length > 0) {
    return (
      <ReservationCars
        startDate={startDate}
        endDate={endDate}
        city={city}
        cars={cars}
        setCars={setCars}
        setLoadingFirst={setLoading}
      />
    );
  }

  if (reserved) {
    return <Navigate replace to="/myreservations" />;
  }

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center pt-5`}
    >
      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a </h2>
      <p className={`${styles.zindex} fs-5 text-white`}>
        Pull up in a fancy car for your next big event!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Choose a city and a reservation date!
      </p>
      <form
        className={`${styles.zindex} ${styles.form} d-flex justify-content-around mb-5 align-items-end`}
        onSubmit={Number(id) ? reserveCar : findCars}
      >
        <div>
          <label htmlFor="city" className="form-label text-white ms-3">
            Your city:
          </label>
          <input
            id="city"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="City"
            aria-label=".form-control-lg example"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label text-white ms-3">
            start date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Start Date"
            aria-label=".form-control-lg example"
            value={startDate}
            min={today}
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="date" className="form-label text-white ms-3">
            end date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="End Date"
            aria-label=".form-control-lg example"
            value={endDate}
            min={startDate}
            required
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        {loading ? (
          <button
            type="submit"
            className={`${styles.btn} btn disabled px-4 ms-4`}
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
            {Number(id) ? 'Reserve' : 'Next'}
          </button>
        )}
      </form>
      <p className={`${styles.zindex} ${styles.errorMsg}`}>{errorMessage}</p>
    </div>
  );
};

export default Reserve;
