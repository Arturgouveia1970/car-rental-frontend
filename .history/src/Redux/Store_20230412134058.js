import { configureStore } from '@reduxjs/toolkit';
import reser

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
