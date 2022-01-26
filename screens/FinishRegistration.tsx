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
import { AntDesign } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
import { validateSecondReg } from "../components/helpers";
import { loginUser, logoutUser, registerUser } from "../redux";
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
  route: any;
};

const FinishRegistration = ({ route, navigation }: Props) => {
  const [handle, setHandle] = useState<string>("");
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

  const register = () => {
    const { error, valid } = validateSecondReg({
      handle,
      password,
      confirmPassword,
    });
    if (!valid) {
      setLoading(false);
      showErrorMessage(error);
    } else {
      const { firstName, lastName, email } = route.params.userData ?? {
        firstName: null,
        lastName: null,
        email: null,
      };
      const userData = {
        firstName,
        lastName,
        email,
        handle,
        password,
      };
      dispatch(registerUser(userData, setLoading, showErrorMessage));
      alert("You click me guy!");
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            style={{ width: 29, height: 40 }}
            size={29}
            color={COLORS.white}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Continue Registration
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Handle
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter handle"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(handle) => setHandle(handle)}
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
          <TouchableOpacity style={styles.button} onPress={() => register()}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Register"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ bottom: "-17%" }}>{showMessage()}</View>
      </View>
    </KeyboardAvoidingView>
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
  textInput: { color: COLORS.white },
});

export default FinishRegistration;
