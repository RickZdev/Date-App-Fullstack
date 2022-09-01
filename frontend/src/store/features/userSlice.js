import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: true,
    username: '',
    password: '',
    userToken: null,
    numOfUsers: 20,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loading = true;
      state.userToken = action.payload.token;
      state.username = action.payload.firstName;
      state.password = action.payload.lastName;
    },
    logoutUser: (state) => {
      state.loading = true;
      state.userToken = null;
      state.numOfUsers = 20;
    },
    addUser: (state) => {
      state.numOfUsers = state.numOfUsers + 2;
    },
    removeUser: (state) => {
      state.numOfUsers = state.numOfUsers - 2;
    }
  }
})

const userAction = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
export { userAction };