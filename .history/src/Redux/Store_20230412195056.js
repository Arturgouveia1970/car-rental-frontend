import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Users/registerSlice';

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
