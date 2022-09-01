import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

const configStore = configureStore({
  reducer: {
    user: userReducer
  }
})

export default configStore;