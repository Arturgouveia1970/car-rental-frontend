/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CarCard.module.css';

const Car = ({
  id, model, year, price, image,
}) => (
  <NavLink className={styles.links} key={id} to={`/car/${id}`}>
    <div className={styles.carCnt} key={id}>
      <div className={styles.imgCnt}>
        <img src={image} alt={model} className={styles.carImg} />
      </div>
      <div className="model-detail d-flex flex-column justify.content.center align-items-center">
        <h3 className="h4 mt-3">{model}</h3>
        <h5 className="h6 pt-1">{year}</h5>
        <h5 className={styles.price}>
          $
          {' '}
          {price}
          {' '}
          per day
        </h5>
      </div>
    </div>
  </NavLink>
);

export default Car;
