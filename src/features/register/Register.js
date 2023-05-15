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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Button from '../components/button/Button';
// import './Login.scss';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState();

  // const [isActive, setActive] = useState(true);

  // const ToggleClass = () => {
  //   setActive(false);
  // };

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      name,
      email,
      password,
    };

    axios
      .post('https://dreamcars.onrender.com/api/v1/users', user)
      .then((response) => {
        setLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setResponseMsg(response.data.success);
      })
      .catch((err) => {
        setLoading(false);
        setResponseMsg(err.response.data.error);
      });
  };

  return (
    <div className="container page-login">
      <form action="Post" className="login-form container-fluid vw-100 d-flex flex-column align-items-center justify-content-center" method="POST" id="signup-form" ref={sendForm}>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          {/* <span
            className={isActive ? 'error-message' : 'error-message active'}
          >
            This username or email already exists
          </span> */}
          <input
            // value={name}
            type="text"
            id="name"
            // name="name"
            value={name}
            className="form-field"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            // value={email}
            type="email"
            id="email"
            // name="email"
            value={email}
            className="form-field"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            // ref={password}
            type="text"
            id="password"
            // name="password"
            value={password}
            className="form-field"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loading ? (
          <button
            type="button"
            className="btn px-4 ms-4 disabled"
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <div>
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
          </div>
        )}
      </form>
      <p className="fs-5 fw-semibold">{responseMsg}</p>
    </div>
  );
};

export default Register;
