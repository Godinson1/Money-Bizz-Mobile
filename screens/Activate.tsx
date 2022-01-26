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
import { notValidPassword } from "../components/helpers";
import { activateUser } from "../redux";
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

const Activate = ({ navigation }: Props) => {
  const [code, setCode] = useState<string>("");
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

  const activate = () => {
    if (notValidPassword(code)) {
      setLoading(false);
      showErrorMessage("Please provide a valid code sent.");
    } else {
      const userData = {
        code,
      };
      dispatch(activateUser(userData, setLoading, showErrorMessage));
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
      ></View>
      <View style={{ marginVertical: 50 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Activate Account
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Bizz Code
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter code"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(code) => setCode(code)}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VerifyEmail")}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
          >
            Didn’t receive code?
          </Text>
        </TouchableWithoutFeedback>
        <View>
          <TouchableOpacity
            disabled={code === "" ? true : false}
            style={styles.button}
            onPress={() => activate()}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Activate"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ bottom: "-55%" }}>{showMessage()}</View>
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

export default Activate;
