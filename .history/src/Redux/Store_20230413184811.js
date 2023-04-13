import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import registerReducer from './Users/registerSlice';

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
