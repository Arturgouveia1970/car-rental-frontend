import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Users/registerSlice';
import styles from './Login.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setLoading(true);
      dispatch(login({ name, email, setLoading }));
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
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingUsername">Name</label>
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
        <div className="">
          <input
            type="password"
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
            Log in
          </button>
        )}
      </form>
      <p className={`${styles.errorMsg} fs-5`}>{user.error}</p>
      <NavLink to="/register">
        <span className="btn btn-secondary">Sign up</span>
      </NavLink>
    </div>
  );
};

export default Login;