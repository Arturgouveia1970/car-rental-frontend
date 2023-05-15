import { configureStore } from '@reduxjs/toolkit';
import { regiter

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
