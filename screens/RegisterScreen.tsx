import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { validateFirstReg } from "../components/helpers";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackScreenParamList } from "../types";
import { COLORS, SIZES, FONTS } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamList,
  "FinishRegistration"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SignInScreen = ({ navigation }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDismissSnackBar = () => setVisible(false);

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

  const continueRegistration = () => {
    const { error, valid } = validateFirstReg({ firstName, lastName, email });
    if (!valid) {
      setLoading(false);
      showErrorMessage(error);
    } else {
      const userData = {
        firstName,
        lastName,
        email,
      };
      navigation.navigate("FinishRegistration", { userData });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Register
        </Text>
        <Text
          style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
        >
          Begin the journey to endless financial possibilities.
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          First Name
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter first name"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          Last Name
        </Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter last name"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View>
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
            style={styles.button}
            onPress={() => continueRegistration()}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              {loading ? "Loading..." : "Continue"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
              textAlign: "center",
            }}
          >
            Already have an account ? Login Here
          </Text>
        </TouchableWithoutFeedback>
        <View style={{ bottom: "-15%" }}>{showMessage()}</View>
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
