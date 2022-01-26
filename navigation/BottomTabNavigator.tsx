import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import SavingScreen from "../screens/SavingScreen";
import InvestScreen from "../screens/InvestScreen";
import Notification from "../screens/Notification";
import AccountScreen from "../screens/AccountScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
  TabFiveParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user } = useSelector((state: RootStateOrAny) => state.user);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Savings"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="save" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Notification"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications" color={color} />
          ),

          tabBarBadge: `${
            user &&
            user.data &&
            user.data.notifications &&
            user.data.notifications.length === 0
              ? ""
              : user &&
                user.data &&
                user.data.notifications &&
                user.data.notifications.length
          }`,
          tabBarBadgeStyle: {
            backgroundColor: `${
              user &&
              user.data &&
              user.data.notifications &&
              user.data.notifications.length === 0
                ? "white"
                : "green"
            }`,
          },
        }}
      />

      <BottomTab.Screen
        name="Invest"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="rocket" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, headerStyle: { elevation: 0 } }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SavingScreen"
        component={SavingScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Notification"
        component={Notification}
        options={{ headerTitle: "Notification", headerStyle: { elevation: 0 } }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="InvestScreen"
        component={InvestScreen}
        options={{ headerTitle: "InvestScreen" }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </TabFiveStack.Navigator>
  );
}
