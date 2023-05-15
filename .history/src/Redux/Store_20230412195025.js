import { configureStore } from '@reduxjs/toolkit';
import 

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
