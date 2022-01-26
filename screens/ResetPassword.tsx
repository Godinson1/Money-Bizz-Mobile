import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { validateResetPassword } from "../components/helpers";
import { createNewPassword } from "../redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackScreenParamList } from "../types";
import { COLORS, SIZES, FONTS, icons } from "../constants";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamList,
  "SignInScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ResetPassword = ({ navigation }: Props) => {
  const [mbCode, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDismissSnackBar = () => setVisible(false);
  const dispatch = useDispatch();

  const showMessage = () => {
    return (
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={{ backgroundColor: "red" }}
      >
        <Text style={{ color: COLORS.white }}>{message}</Text>
      </Snackbar>
    );
  };

  const showErrorMessage = (message: string) => {
    setVisible(true);
    setMessage(message);
  };

  const reset = () => {
    const { error, valid } = validateResetPassword({
      mbCode,
      password,
      confirmPassword,
    });
    if (!valid) {
      setLoading(false);
      showErrorMessage(error);
    } else {
      const userData = {
        mbCode,
        password,
      };
      dispatch(
        createNewPassword(userData, setLoading, showErrorMessage, navigation)
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 50 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Reset Password
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Bizz Reset Code
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter code"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(mbCode) => setCode(mbCode)}
          />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          New Password
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Confirm Password
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            secureTextEntry={true}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => reset()}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Reset"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ bottom: "-20%" }}>{showMessage()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  textContainer: {
    height: 45,
    backgroundColor: COLORS.lightPrimary,
    borderRadius: SIZES.radius,
    width: "100%",
    marginVertical: 7,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginVertical: 10,
  },
  textInput: {
    color: COLORS.white,
  },
});

export default ResetPassword;
