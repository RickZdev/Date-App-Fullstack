import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    loading: true,
    viewedOnboarding: async () => {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        return true;
      } else {
        return false;
      }
    }
  },
  reducers: {
    onLoading: (state) => {
      state.loading = true;
    },
    notLoading: (state) => {
      state.loading = false;
    },
    // getOnViewedOnboarding: async (state) => {
    //   const value = await AsyncStorage.getItem('@viewedOnboarding');
    //   if (value !== null) {
    //     state.viewedOnboarding = true;
    //   } else {
    //     state.viewedOnboarding = false;
    //   }
    // },
  }
})

const onboardingAction = onboardingSlice.actions;
const onboardingReducer = onboardingSlice.reducer;

export default onboardingReducer;
export { onboardingAction };