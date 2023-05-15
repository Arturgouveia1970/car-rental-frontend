import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } 

const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export default store;
