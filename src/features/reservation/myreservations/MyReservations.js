/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-const-assign */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import moment from 'moment';
// import Moment from 'react-moment';
import styles from './MyReservations.module.css';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  // const [cars, setCars] = useState();
  // const [end_date, setEndDate] = useState();
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dreamcars2.onrender.com/api/v1/reservations/${user.user.id}`,
      )
      .then((response) => {
        setReservations(response.data.reservations);
        // setCars(response.data.cars);
        // eslint-disable-next-line no-console
        console.log(response.data.reservations);
        setLoading(false);
        // setStartDate(moment(response.data.reservations.reservation).format('YY/MM/DD'));
        // setEndDate(moment(response.data.reservations.reservation).format('YY/MM/DD'));
        // console.log(start_date);
        // console.log(end_date);
        // const diffInDays = () => date2.diff(date1, 'days');
        // const total = diffInDays * response.data.reservations.price;
        // console.log(diffInDays);
        // console.log(total);
      });
  }, [user.user.id]);

  if (reservations.length <= 0) {
    if (loading) {
      // const dateOne = moment(reservations.start_date).format('YYYYMMDD');
      // console.log(dateOne);
      // const dateTwo = moment(reservations.end_date).format('YYYYMMDD');
      // console.log(dateTwo);
      // const diffInDays = dateTwo.diff(dateOne, 'days');
      // const total = diffInDays * (cars.price);
      // console.log(total);
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

  // const date = new Date();
  // const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  // const dateOne = moment(reservations.start_date).format('YYYYMMDD');
  // console.log(dateOne);
  // const dateTwo = moment(reservations.end_date).format('YYYYMMDD');
  // console.log(dateTwo);
  // eslint-disable-next-line no-unused-vars
  // const diffInDays = () => dateTwo.diff(dateOne, 'days');
  // console.log(dateTwo.diff(dateOne, 'days'));

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <h2 className={`${styles.header} m-5`}>My Reservations</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {reservations.map((res) => (
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
              {/* {
                // console.log((moment(res.reservation.end_date).format('YYYYMMDD')))
                (dateOne = moment(res.reservation.start_date).format('YYYYMMDD'))(dateTwo = moment(res.reservation.end_date).format('YYYYMMDD'))(diffInDays = dateTwo.diff(dateOne, 'days'))(total = diffInDays * res.car.price)
              } */}
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
                  {}
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
