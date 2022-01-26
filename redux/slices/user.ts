import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isUserLoading: false,
  status: false,
  showBalanceStatus: false,
  error: "",
  success: "",
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.isUserLoading = false;
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      return state;
    },
    setUserLoading: (state, action) => {
      state.isUserLoading = true;
      return state;
    },
    setUserError: (state, action) => {
      state.isUserLoading = false;
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
    setUserSuccess: (state, action) => {
      state.isUserLoading = false;
      state.isLoading = false;
      state.success = action.payload;
      return state;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      return state;
    },
    showUserBalance: (state, action) => {
      state.showBalanceStatus = action.payload;
      return state;
    },
  },
});

export const {
  setUserError,
  setUserLoading,
  getUser,
  setStatus,
  setUserSuccess,
  showUserBalance,
} = user.actions;

export default user.reducer;
