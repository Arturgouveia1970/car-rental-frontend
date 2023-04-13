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
    setLoading,
  }) => {
    const result = axios
      .post(
        'https://dreamcars.onrender.com/api/v1/users/sign_up}',
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
  ({
    setLoading,
  }) => {
    const result = axios
      .get('https://dreamcars.onrender.com/api/v1/users/login')
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
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload,
      state.logged_in = true;
      state.error = action.payload.error;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.user = null
      state.logged_in = false
      state.error = action.payload
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.logged_in = action.payload.logged_in
      state.error = action.payload.error
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null
      state.logged_in = false
      state.error = action.payload.error
    });
  },
});

export default registerSlice.reducer;
export const { checkUser } = registerSlice.actions;
