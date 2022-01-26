import { setIsSignUp, setIsLogin, setIsLoggedOut } from "../slices/auth";
import axios from "axios";
import {
  LOCAL_AUTH_BASE_URLS,
  LOCAL_USER_BASE_URLS,
} from "../../constants/Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "..";
import { loginData } from "../../components/helpers";

export const registerUser = (
  data: userData,
  setLoading: Function,
  showMessage: Function
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`${LOCAL_AUTH_BASE_URLS}/register`, data);
    if (res) {
      setLoading(false);
      const { token, message } = res.data;
      showMessage(message);
      setAuthorization(token);
      dispatch(setIsLogin({ status: true, token }));
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err.response.data);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const loginUser = (
  data: loginData,
  setLoading: Function,
  showMessage: Function
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`${LOCAL_AUTH_BASE_URLS}/login`, data);
    if (res) {
      setLoading(false);
      const { token, message } = res.data;
      showMessage(message);
      await setAuthorization(token);
      dispatch(setIsLogin({ status: true, token }));
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err.response.data);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const resetPassword = (
  data: { email: string },
  setLoading: Function,
  showMessage: Function,
  navigation: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    console.log(data);
    setLoading(true);
    const res = await axios.post(
      `${LOCAL_USER_BASE_URLS}/password/reset`,
      data
    );
    if (res) {
      console.log(res);
      showMessage(res.data.message);
      setLoading(false);
      navigation.replace("ResetPassword");
    }
  } catch (err) {
    console.log(err.response.data);
    if (err && err.response && err.response.data) {
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const createNewPassword = (
  data: { password: string; mbCode: string },
  setLoading: Function,
  showMessage: Function,
  navigation: any
) => async (dispatch: typeof store.dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(
      `${LOCAL_USER_BASE_URLS}/password/update`,
      data
    );
    if (res) {
      console.log(res.data);
      showMessage(res.data.message);
      setLoading(false);
    }
  } catch (err) {
    console.log(err);
    if (err && err.response) {
      console.log(err);
      showMessage(err.response.data.message);
      setLoading(false);
    }
  }
};

export const logoutUser = () => async (dispatch: typeof store.dispatch) => {
  console.log("Logged out");
  await AsyncStorage.removeItem("BizzToken");
  delete axios.defaults.headers.common["mb-token"];
  dispatch(setIsLoggedOut({ status: false }));
};

export const setAuthorization = async (token: string) => {
  const BizzToken = token;
  await AsyncStorage.setItem("BizzToken", BizzToken);
  axios.defaults.headers.common["mb-token"] = BizzToken;
  console.log("AuthCheck", axios.defaults.headers.common["mb-token"]);
};

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  handle: string;
  password: string;
};
