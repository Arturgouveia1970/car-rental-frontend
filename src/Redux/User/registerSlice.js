import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  logged_in: false,
  error: null,
};

export const register = createAsyncThunk(
  'user/register',
  ({
    email, name, password, setLoading,
  }) => {
    const result = axios
      .post(
        `https://dreamcars2.onrender.com/api/v1/users/sign_up/${name}/${email}/${password}`,
      )
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        return {
          user: null,
          logged_in: false,
          error: error.response.data.error,
        };
      });
    return result;
  },
);

export const login = createAsyncThunk(
  'user/login',
  ({ email, setLoading }) => {
    const result = axios
      .get(`https://dreamcars2.onrender.com/api/v1/users/sign_in/${email}`)
      .then((response) => {
        localStorage.getItem('user', JSON.parse(response.data));
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        return {
          user: null,
          logged_in: false,
          error: error.response.data.error,
        };
      });
    return result;
  },
);

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    checkUser: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        return user;
      }
      return {
        user,
        logged_in: false,
        error: null,
      };
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [register.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [login.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [login.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default registerSlice.reducer;
export const { checkUser } = registerSlice.actions;
