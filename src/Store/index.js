import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../redux/slices/UserSlice/UserSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
