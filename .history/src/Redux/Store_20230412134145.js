import { configureStore } from '@reduxjs/toolkit';
import { reservationsReducer } from './Users/users';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});

export default store;
