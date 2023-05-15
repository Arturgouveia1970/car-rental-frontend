import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from '.users/registerSlice'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
