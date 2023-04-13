import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './sers/registerSlice'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
