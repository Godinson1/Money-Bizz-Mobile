import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { List } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS, images } from "../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Connections"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  modalVisible: boolean;
  setModalVisible: Function;
};

const PaymentOptionScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    setModalVisible(true);
  }, []);
  const showAlert = () => {
    alert("In progress");
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <ScrollView style={styles.tfa}>
          <View style={styles.dashcon}>
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
                  Payment Options
                </Text>
                <Text
                  style={{
                    color: COLORS.gray,
                    ...FONTS.body4,
                  }}
                >
                  Tap any of the options below to quick save in no time.
                </Text>
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => showAlert()}>
                  <View style={styles.items}>
                    <List.Item
                      title="Use bank card **** **** 56"
                      left={(props) => <List.Icon {...props} icon="percent" />}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => alert("Hello")}>
                  <View style={styles.items}>
                    <List.Item
                      title="Use a new card"
                      left={(props) => <List.Icon {...props} icon="folder" />}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => alert("Hello")}>
                  <View style={styles.items}>
                    <List.Item
                      title="Pay with bank"
                      left={(props) => <List.Icon {...props} icon="share" />}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 2,
    padding: 10,
    paddingBottom: 100,
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
  optionContainer: {
    marginTop: 10,
    height: 50,
    backgroundColor: "transparent",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 1,
    justifyContent: "center",
  },
  items: {},
});

export default PaymentOptionScreen;
