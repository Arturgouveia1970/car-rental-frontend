import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Users'

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
