import { configureStore } from '@reduxjs/toolkit';
// import registerReducer from './Users/registerSlice';


const store = configureStore({
  reducer: {
    // user: registerReducer,
    reservations: reservationsReducer,
  },
});

export default store;
