import { configureStore } from '@reduxjs/toolkit';
import { re

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
