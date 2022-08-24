import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./features/onboardingSlice";

const configStore = configureStore({
  reducer: {
    onboardingReducer: onboardingReducer,
  }
})

export default configStore;