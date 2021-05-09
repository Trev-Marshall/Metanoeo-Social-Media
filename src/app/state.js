import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Features/signInSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  }
});