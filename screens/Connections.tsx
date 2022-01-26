import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS, images } from "../constants";

const Connection = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
}) => {
  const [data, setData] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const test = () => alert("E dey work");
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.centeredView}>
          <ScrollView style={styles.tfs}>
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
                    Create Connection
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray,
                      ...FONTS.body4,
                    }}
                  >
                    Send funds to bizzer wallet at a Go!
                  </Text>
                </View>
                <Text
                  style={{
                    color: COLORS.gray,
                    ...FONTS.body4,
                  }}
                >
                  Bizzer Handle
                </Text>
                <View style={styles.textContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="@handle"
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
                  Amount
                </Text>
                <View style={styles.textContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="5000"
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
                  Reason
                </Text>
                <View style={[styles.textContainer, { height: 85 }]}>
                  <TextInput
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    placeholder="Use this one take flex.. Problem no dey finish!"
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.gray}
                    onChangeText={(data) => setData(data)}
                    multiline={true}
                    numberOfLines={10}
                  />
                </View>
              </View>
              <View style={{ width: "100%", padding: 10 }}>
                <TouchableOpacity style={styles.buttons} onPress={() => test()}>
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
          </ScrollView>
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
  modalView: {
    flex: 1,
    margin: 20,
    width: "100%",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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

  tfs: {
    flex: 1,
    height: SIZES.height,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 2,
    padding: 10,
    bottom: 1,
    marginTop: 160,
    marginVertical: -7,
  },
  textInput: { color: COLORS.white },
  buttons: {
    height: 50,
    width: "100%",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginBottom: 30,
  },
});

export default Connection;
