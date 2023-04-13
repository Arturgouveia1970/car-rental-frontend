import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './User/registerSlice.js';

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
