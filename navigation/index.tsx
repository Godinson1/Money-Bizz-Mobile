import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import RootStackScreen from "../screens/RootStackScreen";

import { NotificationScreen } from "../screens/components";
import SplashScreen from "../screens/BaseScreen";
import Activate from "../screens/Activate";
import Connections from "../screens/Connections";
import Save from "../screens/Save";
import PaymentOptionScreen from "../screens/PaymentOptionScreen";
import VerifyEmail from "../screens/VerifyEmail";

type Theme = typeof DefaultTheme;

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  theme,
  token,
  activeUser,
}: {
  theme: Theme;
  token: any;
  activeUser: boolean;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      {token !== null ? (
        <RootNavigator />
      ) : activeUser !== true || undefined ? (
        <RootNavigator />
      ) : (
        <ActivateNavigator />
      )}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const ActivateStack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Activate" component={Activate} />
      <Stack.Screen name="Connections" component={Connections} />
      <Stack.Screen name="Save" component={Save} />
      <Stack.Screen
        name="PaymentOptionScreen"
        component={PaymentOptionScreen}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

function ActivateNavigator() {
  return (
    <ActivateStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivateStack.Screen name="Activate" component={Activate} />
      <ActivateStack.Screen name="VerifyEmail" component={VerifyEmail} />
    </ActivateStack.Navigator>
  );
}
