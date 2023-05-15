import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Users/registerSlice';
// import { reservationsReducer } from './Users/users';

const store = configureStore({
  reducer: {
    user: registerReducer,
    reservations: reservationsReducer,
  },
});

export default store;
