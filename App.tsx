import "intl";
import "intl/locale-data/jsonp/en";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState, useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { AuthContext } from "./components/context";
import { appTheme, fontsDefinition, COLORS, FONTS } from "./constants/";
import {
  setIsLogin,
  setIsLoggedOut,
  getUserDetail,
  showUserBalance,
} from "./redux";

const { customDarkTheme, customDefaultTheme } = appTheme;

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [balance, setBalance] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootStateOrAny) => state.auth);
  const { isUserLoading, user } = useSelector(
    (state: RootStateOrAny) => state.user
  );

  useEffect(() => {
    const getToken = async () => {
      let userToken;
      userToken = await AsyncStorage.getItem("BizzToken");
      axios.defaults.headers.common["mb-token"] = userToken;
    };
    getToken();
  }, []);

  const authContext = useMemo(
    () => ({
      toggleTheme: async () => {
        setIsDarkTheme(!isDarkTheme);
        console.log(isDarkTheme);
        await AsyncStorage.setItem(
          "mode",
          isDarkTheme === false ? "dark" : "light"
        );
      },
      logout: async () => {
        await AsyncStorage.removeItem("BizzToken");
        delete axios.defaults.headers.common["mb-token"];
        dispatch(setIsLoggedOut({ status: false }));
      },
      showBalance: async () => {
        setBalance(!balance);
        dispatch(showUserBalance(balance));
        await AsyncStorage.setItem(
          "balance",
          balance === true ? "show" : "hide"
        );
      },
    }),
    [isDarkTheme]
  );

  if (Platform.OS === "android") {
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
      (Intl as any).__disableRegExpRestore();
    }
  }

  useEffect(() => {
    const getToken = async () => {
      let userToken;
      userToken = await AsyncStorage.getItem("BizzToken");
      axios.defaults.headers.common["mb-token"] = userToken;
      dispatch(setIsLogin({ status: true, token: userToken }));
    };
    getToken();
  }, []);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(fontsDefinition);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    const getAppMode = async () => {
      const mode = await AsyncStorage.getItem("mode");
      setIsDarkTheme(mode === "dark" ? true : false);
    };
    getAppMode();
  }, []);

  useEffect(() => {
    const getBalanceStatus = async () => {
      const showBalance = await AsyncStorage.getItem("balance");
      console.log(showBalance);
      setIsDarkTheme(showBalance === "show" ? true : false);
    };
    getBalanceStatus();
  }, []);

  useEffect(() => {
    dispatch(getUserDetail());
  }, [getUserDetail]);

  useEffect(() => {
    setActive(
      user && user.data && user.data.details && user.data.details.active
    );
  }, [active]);

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  if (!isLoadingComplete) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
          Moneybizz
        </Text>
      </View>
    );
  } else if (isUserLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
          Loading...
        </Text>
      </View>
    );
  } else {
    console.log(active);
    return (
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <SafeAreaProvider>
            <Navigation theme={theme} token={token} activeUser={active} />
            <StatusBar />
          </SafeAreaProvider>
        </AuthContext.Provider>
      </PaperProvider>
    );
  }
};

export default App;
