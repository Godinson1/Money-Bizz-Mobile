import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme as NativeTheme } from "@react-navigation/native";

export default function NotificationScreen() {
  const { colors } = NativeTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>
        Notification Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
