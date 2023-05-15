/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react';
// import { Navigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../Redux/Users/registerSlice';
// import styles from './Register.module.css';

// const Register = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const user = useSelector((state) => state.user);

//   const formSubmit = (e) => {
//     e.preventDefault();
//     if (name && email && password) {
//       setLoading(true);
//       dispatch(register({
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
//       container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
//     >
//       <h2 className={`${styles.header} fs-2 mb-5`}>Sign Up</h2>
//       <form onSubmit={formSubmit} className={styles.form}>
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingName"
//             placeholder="Name"
//             value={name}
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="floatingName">Name</label>
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
//             Sign up
//           </button>
//         )}
//       </form>
//       <p className={`${styles.errorMsg} fs-5`}>
//         {user.error}
//       </p>
//       <NavLink to="/login">
//         <span>Log in</span>
//       </NavLink>
//     </div>
//   );
// };

// export default Register;

/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../components/button/Button';
// import './Login.scss';

const Register = () => {
  const name = useState();
  const email = useState();
  const password = useState();
  const loginForm = use();

  const [isActive, setActive] = useState(true);

  const ToggleClass = () => {
    setActive(false);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const signupOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name.current.value.trim(),
          email: email.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    await fetch('https://dreamcars.onrender.com/api/v1/users', signupOptions);

    const loginOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          email: email.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://dreamcars.onrender.com/api/v1/users/sign_in', loginOptions);
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
      <form action="Post" className="login-form" method="POST" id="signup-form" ref={loginForm}>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <span
            className={isActive ? 'error-message' : 'error-message active'}
          >
            This username or email already exists
          </span>
          <input
            // value={name}
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
            // value={email}
            type="email"
            id="email"
            name="email"
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            // ref={password}
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <p className="signin-message">
          Already have an account?
          <Link to="/login">
            LOGIN
          </Link>
        </p>

        <div className="form-bottom-bar">
          {/* <Button
            btnAxn={sendForm}
            label="Signup"
            size="main"
            color="dark"
          /> */}
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={sendForm}
          >
            Sign Up
          </button>
        </div>
      </form>

    </div>
  );
};

export default Register;
