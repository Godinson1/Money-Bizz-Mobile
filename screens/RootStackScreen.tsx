import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./LoginScreen";
import SignUpScreen from "./RegisterScreen";
import SplashScreen from "./BaseScreen";
import FinishRegistration from "./FinishRegistration";
import NotFoundScreen from "./NotFoundScreen";
import VerifyEmail from "./VerifyEmail";
import ResetPassword from "./ResetPassword";
import Activate from "./Activate";

import { RootStackScreenParamList } from "../types";

const RootStack = createStackNavigator<RootStackScreenParamList>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="NotFoundScreen" component={NotFoundScreen} />
      <RootStack.Screen
        name="FinishRegistration"
        component={FinishRegistration}
      />
      <RootStack.Screen name="VerifyEmail" component={VerifyEmail} />
      <RootStack.Screen name="ResetPassword" component={ResetPassword} />
      <RootStack.Screen name="Activate" component={Activate} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
