import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from '.users/regist'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
