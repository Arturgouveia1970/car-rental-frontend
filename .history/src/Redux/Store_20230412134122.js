import { configureStore } from '@reduxjs/toolkit';
import { reservationsReducer } from './Users/users';

const store = configureStore({
  reducer: {
    user: reservationsReducer,
  },
});

export default store;
