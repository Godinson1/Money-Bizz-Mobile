import { setUserLoading, getUser, setUserError } from "../slices/user";
import axios from "axios";
import { LOCAL_USER_BASE_URLS } from "../../constants/Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "..";

export const activateUser = (
  data: codeData,
  setLoading: Function,
  showMessage: Function
) => async (dispatch: typeof store.dispatch) => {
  try {
    setLoading(true);
    const res = await axios.post(`${LOCAL_USER_BASE_URLS}/activate`, data);
    if (res) {
      setLoading(false);
      const { message } = res.data;
      showMessage(message);
      console.log(res.data);
      //dispatch(setIsLogin({ status: true, token }));
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

export const getUserDetail = () => async (dispatch: typeof store.dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const res = await axios.get(`${LOCAL_USER_BASE_URLS}/details`);
    if (res.data) {
      dispatch(getUser(res.data));
    }
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch(setUserError(err.response.data.message));
    }
  }
};

type codeData = {
  code: string;
};
