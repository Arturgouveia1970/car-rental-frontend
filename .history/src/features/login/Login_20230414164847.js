// import React, { useState } from 'react';
// import { NavLink, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../Redux/Users/registerSlice';
// import styles from './Login.module.css';

// /* eslint-disable jsx-a11y/label-has-associated-control */
// const Login = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   const formSubmit = (e) => {
//     e.preventDefault();
//     if (name && email) {
//       setLoading(true);
//       dispatch(login({
//         name, email, password, setLoading,
//       }));
//     }
//   };

//   if (user.logged_in) {
//     return <Navigate replace to="/home" />;
//   }

//   return (
//     <div
//       className={`${styles.container}
//         container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
//     >
//       <h2 className={`${styles.header} fs-2 mb-5`}>Log in</h2>
//       <form onSubmit={formSubmit} className={styles.form}>
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingUsername"
//             placeholder="Name"
//             value={name}
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="floatingUsername">Name</label>
//         </div>
//         <div className="form-floating mb-3">
//           <input
//             type="email"
//             className="form-control"
//             id="floatingInput"
//             placeholder="name@example.com"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="floatingInput">Email address</label>
//         </div>
//         <div className="">
//           <input
//             type="password"
//             className="form-control"
//             id="floatingInput"
//             placeholder="password"
//             value={password}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <label htmlFor="floatingInput">password</label>
//         </div>
//         {loading ? (
//           <button type="button" className="btn btn-primary disabled mb-3">
//             <i className="fa-solid fa-spinner fa-spin" />
//           </button>
//         ) : (
//           <button type="submit" className="btn btn-primary mb-3">
//             Log in
//           </button>
//         )}
//       </form>
//       <p className={`${styles.errorMsg} fs-5`}>{user.error}</p>
//       <NavLink to="/register">
//         <span className="btn btn-secondary">Sign up</span>
//       </NavLink>
//     </div>
//   );
// };

// export default Login;

/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
// import Button from '../components/button/Button';
// import './Login.scss';

const LoginScreen = () => {
  const loginForm = useRef();
  const name = useRef();
  const password = useRef();
  const email = useRef();

  const [isActive, setActive] = useState(true);

  const ToggleClass = () => {
    setActive(false);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://dreamcars.onrender.com/api/v1/users/login', requestOptions);
    if (dataResponse.ok) {
      const userData = await dataResponse.json();
      localStorage.setItem('current_user', JSON.stringify(userData));
      window.location.href = '/';
    } else {
      ToggleClass();
    }
  };

  return (
    <div className="container page-login">

      <form action="Post" className="login-form" method="POST" ref={loginForm}>
        <h2>LOGIN</h2>

        <div className="add-padding-below">
          <span
            className={
             isActive ? 'error-message' : 'error-message active'
            }>Error with credentials
            </span>

          <input
            ref={name}
            type="text"
            id="name"
            name="name"
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={email}
            type="text"
            id="email"
            name="email"
            className="form-field"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="add-padding-below">
          <input
            ref={password}
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <p className="signin-message">
          Don&apos;t have an account yet?
          <Link to="/register">
            SIGN UP
          </Link>
        </p>

        <div className="form-bottom-bar">
          {/* <button
            btnAxn={sendForm}
            label="Login"
            size="main"
            color="dark"
          /> */}
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={sendForm}
          >
            Log in
          </button>
        </div>
      </form>

    </div>
  );
};

export default LoginScreen;
