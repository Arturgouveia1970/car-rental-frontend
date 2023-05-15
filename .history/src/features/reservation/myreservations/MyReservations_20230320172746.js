import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import styles from './MyReservations.module.css';

const MyReservations = () => {
  const { id } = useParams();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  // const user = useSelector((state) => state.user);
  const fetchdata = useCallback(a)
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dreamcars.onrender.com/api/v1/reservations/${id}`,
      )
      .then((response) => {
        setReservations(response.data.reservations);
        setLoading(false);
      });
  }, []);

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
    <div className="container-fluid d-flex flex-column align-items-center">
      <h2 className="my-4">My Reservations</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {reservations.map((res) => (
          <div className={`${styles.card} d-flex m-4`} key={res.reservation.id}>
            <img className={styles.img} src={res.car.picture} alt="car" />
            <div className="ms-3 mt-1">
              <h3 className={styles.car}>
                <span>Car model: </span>
                <span className="fw-bold">{res.car.model}</span>
              </h3>
              <p>
                <span>Reservation date: </span>
                <span className="fw-bold">
                  {moment(res.reservation.date).format('MMMM Do YYYY')}
                </span>
              </p>
              <p>
                <span>Reservation city: </span>
                <span className="fw-bold">{res.reservation.city}</span>
              </p>
              <p>
                <span>Driver&apos;s name: </span>
                <span className="fw-bold">{res.car.driver_name}</span>
              </p>
              <p>
                <span>Price Per Day: </span>
                <span className="fw-bold">
                  $
                  {res.car.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReservations;
