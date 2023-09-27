import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/User/registerSlice';
import styles from './Login.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      dispatch(login({ email, setLoading }));
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/home" />;
  }

  return (
    <div
      className={`${styles.container} container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <h2 className={`${styles.header} fs-2 mb-5`}>Log in</h2>
      <form onSubmit={formSubmit} className={styles.form}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingUsername">email address</label>
        </div>

        {/* <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingUsername">Password</label>
        </div> */}
        {loading ? (
          <button type="button" className="btn btn-primary disabled mb-3">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className="btn btn-primary mb-3">
            Log in
          </button>
        )}
      </form>
      <p className={`${styles.errorMsg} fs-5`}>{user.error}</p>
      <NavLink className={styles.button} to="/register">
        <span className="btn btn-info mb-0">Sign up</span>
      </NavLink>
    </div>
  );
};

export default Login;
