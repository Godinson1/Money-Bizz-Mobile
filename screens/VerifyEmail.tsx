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
import { isEmail } from "../components/helpers";
import { resetPassword } from "../redux";
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

const VerifyEmail = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
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

  const verify = () => {
    if (!isEmail(email)) {
      setLoading(false);
      showErrorMessage("Please provide a valid email address");
    } else {
      const userData = {
        email,
      };
      dispatch(
        resetPassword(userData, setLoading, showErrorMessage, navigation)
      );
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
      <View style={{ marginVertical: 50 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Verify Email
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Email
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter email"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View>
          <TouchableOpacity
            disabled={email === "" ? true : false}
            style={styles.button}
            onPress={() => verify()}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Verify"}
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

export default VerifyEmail;
