import { configureStore } from '@reduxjs/toolkit';
import { reservationsReducer } from './Users/users';

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
