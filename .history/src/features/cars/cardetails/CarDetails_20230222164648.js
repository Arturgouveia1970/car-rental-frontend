// eslint-plugin-react-hooks
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CarDetails.module.css';
import Sidebar from '../../common/sidebar/Sidebar';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://carrental2.onrender.com/api/v1/cars/${id}`)
      .then((response) => {
        setCar(response.data.car);
        
        console.log(id);
        setLoading(false);
      });
  }, [id]);

  const newLocal = <Sidebar />;
  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }
  return (
    <>
      {newLocal}
      <h2 className={styles.title}>CAR DETAILS</h2>
      <div className={styles.detailContainer}>
        <div className={styles.car}>
          <img src={car.image} alt={car.model} />
        </div>
        <div className={styles.detail}>
          <h2>{car.model}</h2>
          <div className={styles.carYear}>
            <p>year:</p>
            <p>{car.year}</p>
          </div>
          <div className={styles.price}>
            <p>Price Per Day: </p>
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
