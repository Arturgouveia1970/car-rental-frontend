/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './newCar.module.css';
// import Sidebar from '../../common/sidebar/Sidebar';

const Newcar = () => {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);
  // const user = useSelector((state) => state.user);

  const submitCar = (e) => {
    e.preventDefault();
    setLoading(true);
    const car = {
      model,
      year,
      image,
      price,
    };

    axios
      .post('https://dreamcars.onrender.com/api/v1/cars', car)
      .then((response) => {
        setLoading(false);
        setModel('');
        setYear('');
        setImage('');
        setPrice('');
        setResponseMsg(response.data.success);
      })
      .catch((err) => {
        setLoading(false);
        setResponseMsg(err.response.data.error);
      });
  };
  // const newLocal = <Sidebar />;

  return (
    <div className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}>
      <div className={`${styles.textctn}`}>
      <h2 className={`${styles.zindex} fs-1 text-white`}>Add Car</h2>
      <p className={`${styles.zindex} fs-5 text-white text-center`}>
        You&apos;ve got a fancy car from which you want to make some extra
        bucks? Add it on our website!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Fill the details of your car.
      </p>
      <form
        className={`${styles.zindex} ${styles.form} d-flex justify-content-center mb-0 align-items-end`}
        onSubmit={submitCar}
      >
        <div className="d-flex mb-3">
          <div>
            <label htmlFor="model" className="form-label text-white ms-3">
              Model:
            </label>
            <input
              id="model"
              className={`${styles.input} form-control form-control-lg px-4 mx-2`}
              type="text"
              placeholder="Model"
              aria-label=".form-control-lg example"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="driverName" className="form-label text-white ms-3">
              year:
            </label>
            <input
              id="year"
              className={`${styles.input} form-control form-control-lg px-4 mx-2`}
              type="text"
              placeholder="Year"
              aria-label=".form-control-lg example"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="d-flex mb-3">
          <div>
            <label htmlFor="price" className="form-label text-white ms-3">
              Price per day:
            </label>
            <input
              id="price"
              className={`${styles.input} form-control form-control-lg px-4 mx-2`}
              type="number"
              placeholder="Price"
              aria-label=".form-control-lg example"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              required
            />
          </div>
          <div>
            <label htmlFor="picture" className="form-label text-white ms-3">
              Picture:
            </label>
            <input
              id="picture"
              className={`${styles.input} form-control form-control-lg px-4 mx-2`}
              type="text"
              placeholder="Image Link"
              aria-label=".form-control-lg example"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        </div>
        {loading ? (
          <button
            type="button"
            className={`${styles.btn} btn px-4 ms-4 disabled`}
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
            Add
          </button>
        )}
      </form>
      <p className={`${styles.zindex} fs-5 fw-semibold`}>{responseMsg}</p>
    </div>
    </div>
  );
};

export default Newcar;
