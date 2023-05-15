import { configureStore } from '@reduxjs/toolkit';
// import registerReducer from './Users/registerSlice';
import { }

const store = configureStore({
  reducer: {
    // user: registerReducer,
    reservations: reservationsReducer,
  },
});

export default store;
