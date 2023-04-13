import { configureStore } from '@reduxjs/toolkit';
import { regi

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
