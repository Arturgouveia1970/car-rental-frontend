import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from '.users/'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
