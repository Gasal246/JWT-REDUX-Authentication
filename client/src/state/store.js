import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../state/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
