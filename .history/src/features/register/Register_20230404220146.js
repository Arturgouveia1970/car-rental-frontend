/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/Users/registerSlice';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setLoading(true);
      dispatch(register({
        email, name, setLoading,
      }));
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/home" />;
  }

  return (
    <div
      className={`${styles.container} container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <h2 className={`${styles.header} fs-2 mb-5`}>Sign Up</h2>
      <form onSubmit={formSubmit} className={styles.form}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingInput">password</label>
        </div>
        {loading ? (
          <button type="button" className="btn btn-primary disabled mb-3">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className="btn btn-primary mb-3">
            Sign up
          </button>
        )}
      </form>
      <p className={`${styles.errorMsg} fs-5`}>
        {user.error}
      </p>
      <NavLink to="/login">
        <span>Log in</span>
      </NavLink>
    </div>
  );
};

export default Register;
