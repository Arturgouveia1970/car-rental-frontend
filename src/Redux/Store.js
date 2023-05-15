import { configureStore } from '@reduxjs/toolkit';
// import registerReducer from './Users/registerSlice';
import { usersReducer } from './Users/users';

const store = configureStore({
  reducer: {
    // user: registerReducer,
    users: usersReducer,
  },
});

export default store;
