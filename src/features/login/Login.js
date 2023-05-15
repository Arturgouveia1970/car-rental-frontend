// eslint camelcase: ["error", {properties: "never"}]

import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Users/registerSlice';
import styles from './Login.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [logged_in, setLogged_in] = useState(false);
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      setLoading(true);
      setLogged_in(true);
      dispatch(login({
        email, password, setLoading, setLogged_in,
      }));
    }
  };

  if (logged_in) {
    return <Navigate to="/home" />;
  }

  return (
    <div
      className={`${styles.container}
        container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <h2 className={`${styles.header} fs-2 mb-5`}>Log in</h2>
      <form onSubmit={formSubmit} className={styles.form}>
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
          <label htmlFor="floatingInput"> </label>
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
      <p className={`${styles.errorMsg} fs-5`}>{user}</p>
      <NavLink to="/register">
        <span className="btn btn-secondary">Sign up</span>
      </NavLink>
    </div>
  );
};

export default Login;

// /* eslint linebreak-style: ["error", "windows"] */
// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// // import Button from '../components/button/Button';
// // import './Login.scss';

// const LoginScreen = () => {
//   const { id } = useParams();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [loading, setLoading] = useState(false);

//   // const [isActive, setActive] = useState(true);

//   // const ToggleClass = () => {
//   //   setActive(false);
//   // };
//   const dispatch = useDispatch();

//   const fetchUser = (id) => (async (dispatch) => {
//     setLoading(true);
//     // await axios get function
//     await axios
//       .get(`https://dreamcars.onrender.com/api/v1/users/${id}`)
//       .then((response) => {
//         setEmail(response.data);
//         setPassword(response.data);
//         // console.log(response.data);
//         setLoading(false);
//         dispatch({ type: 'FETCH_USERS', payload: response });
//       });
//   });

//   useEffect(() => {
//     fetchUser(id);
//     dispatch(id);
//   }, [id, fetchUser, dispatch]);

//   if (loading) {
//     return (
//   <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
//         <i className="fa-solid fa-spinner fa-spin fs-1" />
//       </div>
//     );
//   }
//   return (
//     <div className="container page-login">

//       <form
//         action="Post"
//         className="login-form container-fluid vw-100 d-flex flex-column
//           align-items-center justify-content-center" method="POST" ref={fetchUser}>
//         <h2>LOGIN</h2>

//         {/* <div className="add-padding-below">
//           <span
//             className={
//             isActive ? 'error-message' : 'error-message active'
//             }
//           >
//             Error with credentials
//           </span>
//         </div> */}

//         <div className="add-padding-below">
//           <input
//             value={email}
//             type="text"
//             id="email"
//             name="email"
//             className="form-field"
//             placeholder="example@email.com"
//             required
//           />
//         </div>
//         <div className="add-padding-below">
//           <input
//             value={password}
//             type="text"
//             id="password"
//             name="password"
//             className="form-field"
//             placeholder="Password"
//             required
//           />
//         </div>

//         <p className="signin-message">
//           Don&apos;t have an account yet?
//           <Link to="/register">
//             SIGN UP
//           </Link>
//         </p>

//         <Link to={`/home/${id}`} className="form-bottom-bar">
//           <button
//             type="submit"
//             className="btn btn-primary mb-3"
//             onClick={fetchUser}
//           >
//             Log in
//           </button>
//         </Link>
//       </form>

//     </div>
//   );
// };

// export default LoginScreen;
