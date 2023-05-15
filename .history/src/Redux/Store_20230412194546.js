import { configureStore } from '@reduxjs/toolkit';
import { register

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
