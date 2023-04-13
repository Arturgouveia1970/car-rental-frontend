import { configureStore } from '@reduxjs/toolkit';
import { reservationsReducer } from './Users/users';

const store = configureStore({
  reducer: {
    user: regisReducer,
  },
});

export default store;
