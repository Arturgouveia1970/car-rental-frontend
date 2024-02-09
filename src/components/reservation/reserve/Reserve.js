/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReservationCars from './ReservationCars';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => {
  const { id } = useParams();
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [city, setCity] = useState('');
  // const [price, setPrice] = useState(0);
  // const [total, setTotal] = useState(0);
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((state) => state.user);

  const today = new Date().toISOString().slice(0, 10);

  const findCars = (e) => {
    e.preventDefault();
    if (start_date) {
      setLoading(true);
      axios
        .get('https://dreamcars4.onrender.com/api/v1/cars')
        .then((response) => {
          const { cars } = response.data;
          // console.log(cars); // Log the cars array to inspect its structure
          if (cars.length > 0) {
            setCar(cars);
            // const totalPrice = cars.reduce((acc, car) => acc + car.price, 0);
            // setPrice(totalPrice);
            // console.log(totalPrice);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const reserveCar = (e) => {
    e.preventDefault();
    if (start_date && city) {
      setLoading(true);
      axios
        .post(
          `https://dreamcars4.onrender.com/api/v1/reservation/${user.user.id}/${Number(id)}/${city}/${start_date}/${end_date}`,
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

  if (car.length > 0) {
    return (
      <ReservationCars
        start_date={start_date}
        end_date={end_date}
        city={city}
        cars={car}
        // price={price}
        setCars={setCar}
        setLoadingFirst={setLoading}
      />
    );
  }

  if (reserved) {
    return <Navigate replace to="/reservation" />;
  }

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center pt-5`}
    >
      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a car</h2>
      <p className={`${styles.zindex} fs-5 text-white`}>
        take the car of your dreams for a ride!!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Choose a city and the reservation dates!
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
            Starting date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Date"
            aria-label=".form-control-lg example"
            value={start_date}
            min={today}
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label text-white ms-3">
            Ending date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Date"
            aria-label=".form-control-lg example"
            value={end_date}
            min={today}
            required
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        {/* <div className={`${styles.total}`}>{total}</div> */}
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
