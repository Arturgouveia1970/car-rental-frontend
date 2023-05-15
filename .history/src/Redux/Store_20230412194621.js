import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from '.'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
