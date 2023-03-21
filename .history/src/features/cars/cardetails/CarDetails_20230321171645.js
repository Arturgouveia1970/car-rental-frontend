// eslint-plugin-react-hooks
import React, { useEffect, useState, useCallback } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CarDetails.module.css';
// import Sidebar from '../../common/sidebar/Sidebar';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);

  // fetch data callback function vvv asyncronous
  const fetchData = useCallback(async (id) => {
    setLoading(true);
    // await axios get function
    await axios
      .get(`https://dreamcars.onrender.com/api/v1/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        // console.log(response.data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    // call the callback function
    fetchData(id);

    // include the function in the dependencies
  }, [id, fetchData]);

  // const newLocal = <Sidebar />;
  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`https://carrental2.onrender.com/api/v1/cars/${id}`)
  //     .then((response) => {
  //       setCar(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     });
  // }, [id]);

  return (
    <>
      {/* {newLocal} */}
      <h2 className={styles.title}>CAR DETAILS</h2>
      <div className={styles.detailContainer}>
        <div className={styles.car}>
          <img src={car.image} alt={car.model} />
        </div>
        <div className={styles.detail}>
          <h2>{car.model}</h2>
          <div className={styles.carYear}>
            <p>Year: </p>
            <p>{car.year}</p>
          </div>
          <div className={styles.price}>
            <p>Price per day: </p>
            <p className={styles.priceColor}>
              $
              {car.price}
            </p>
          </div>
          <NavLink to={`/reserve/${id}`} className={styles.btncontainer}>
            <button type="button" className={styles.reservebtn}>
              <i className="fa-solid fa-car-side me-3" />
              Reserve
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
