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
import { validateLogin } from "../components/helpers";
import { loginUser } from "../redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackScreenParamList } from "../types";
import { COLORS, SIZES, FONTS } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamList,
  "SignInScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SignInScreen = ({ navigation }: Props) => {
  const [data, setData] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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

  const login = () => {
    const { error, valid } = validateLogin({ data, password });
    if (!valid) {
      setLoading(false);
      showErrorMessage(error);
    } else {
      const userData = {
        data,
        password,
      };
      dispatch(loginUser(userData, setLoading, showErrorMessage));
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...FONTS.h3, color: COLORS.white }}>Moneybizz</Text>
      <View style={{ marginVertical: 50 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Welcome Back
        </Text>
        <Text
          style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
        >
          Login to continue the bizzer experience.
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Email or Handle
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter email or handle"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(data) => setData(data)}
          />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Password
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => login()}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VerifyEmail")}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
              textAlign: "center",
            }}
          >
            Forgot Password ?
          </Text>
        </TouchableWithoutFeedback>
        <View style={{ bottom: "-25%" }}>{showMessage()}</View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
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
  textInput: { color: COLORS.white },
});

export default SignInScreen;
