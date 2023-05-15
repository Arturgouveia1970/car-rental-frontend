import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
