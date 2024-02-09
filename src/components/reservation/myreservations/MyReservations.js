/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-const-assign */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './MyReservations.module.css';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dreamcars4.onrender.com/api/v1/reservations/${user.user.id}`)
      .then((response) => {
        setReservations(response.data.reservations);
        // console.log(response.data.reservations);
        setLoading(false);
      });
  }, [user.user.id]);

  if (reservations.length <= 0) {
    if (loading) {
      return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-spinner fa-spin fs-1" />
        </div>
      );
    }
    return (
      <h2 className="mt-5 text-center">
        You don&apos;t have any reservations yet.
      </h2>
    );
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <h2 className={`${styles.header} m-5`}>My Reservations</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {reservations.map((res) => {
          const totalPrice = res.car.price * moment(res.reservation.end_date).diff(moment(res.reservation.start_date), 'days');
          return (
            <div className={`${styles.card} d-flex mb-3`} key={res.reservation.id}>
              <img className={styles.img} src={res.car.image} alt="car" />
              <div className="ms-3 mt-1">
                <h3 className={styles.car}>
                  <span className="fw-bold">{res.car.model}</span>
                </h3>
                <p>
                  <span>Reservation start date: </span>
                  <span className="fw-bold">
                    {moment(res.reservation.start_date).format('MMMM Do YYYY')}
                  </span>
                </p>
                <p>
                  <span>Reservation end date: </span>
                  <span className="fw-bold">
                    {moment(res.reservation.end_date).format('MMMM Do YYYY')}
                  </span>
                </p>
                <p>
                  <span>Reservation city: </span>
                  <span className="fw-bold">{res.reservation.city}</span>
                </p>
                <p>
                  <span>Price Per Day: </span>
                  <span className="fw-bold">
                    $
                    {res.car.price}
                  </span>
                </p>
                <p>
                  <span>Total Price: </span>
                  <span className="fw-bold">
                    $
                    {totalPrice}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReservations;
