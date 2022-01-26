import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  BackHandler,
  Alert,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS, images } from "../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Connections"
>;

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const Save = ({ modalVisible, setModalVisible }: Props) => {
  const [data, setData] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{ backgroundColor: modalVisible ? "rgba(0,0,0,0.5)" : "" }}
        >
          <View style={styles.tfa}>
            <KeyboardAvoidingView>
              <View style={styles.dashcon}>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                  >
                    <AntDesign
                      name="arrowleft"
                      style={{ width: 29, height: 40 }}
                      size={29}
                      color={COLORS.white}
                    />
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View>
                <View style={{ width: "100%", padding: 10 }}>
                  <View style={{ marginBottom: 30, marginTop: 20 }}>
                    <Text
                      style={{
                        color: COLORS.gray,
                        ...FONTS.h3,
                      }}
                    >
                      Quick Save
                    </Text>
                    <Text
                      style={{
                        color: COLORS.gray,
                        ...FONTS.body4,
                      }}
                    >
                      Enter an amount to top-up bizz wallet.
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: COLORS.gray,
                      ...FONTS.body4,
                    }}
                  >
                    Tap here & enter (ie. 5000)
                  </Text>

                  <View style={styles.textContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="5000"
                      keyboardType="numeric"
                      placeholderTextColor={COLORS.gray}
                      selectionColor={COLORS.gray}
                      onChangeText={(data) => setData(data)}
                    />
                  </View>
                </View>
                <View style={{ width: "100%", padding: 10 }}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => alert("")}
                  >
                    <Text
                      style={{
                        ...FONTS.h3,
                        color: COLORS.primary,

                        textAlign: "center",
                      }}
                    >
                      Proceed
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dashcon: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textContainer: {
    height: 45,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius,
    width: "100%",
    marginVertical: 7,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingHorizontal: 5,
  },
  tfa: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: "black",
    borderRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 2,
    padding: 10,
    marginTop: 200,
  },
  textInput: { color: COLORS.white },
  buttons: {
    height: 50,
    width: "100%",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Save;
