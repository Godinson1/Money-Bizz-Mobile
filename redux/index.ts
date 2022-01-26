import store from "./store";
import {
  setIsLogin,
  setIsSignUp,
  setUserData,
  setIsLoggedOut,
} from "./slices/auth";
import {
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  createNewPassword,
} from "./actions/auth";
import { activateUser, getUserDetail } from "./actions/user";
import { showUserBalance } from "./slices/user";

export {
  store,
  setUserData,
  setIsLogin,
  setIsSignUp,
  setIsLoggedOut,
  activateUser,
  getUserDetail,
  logoutUser,
  loginUser,
  registerUser,
  resetPassword,
  showUserBalance,
  createNewPassword,
};
