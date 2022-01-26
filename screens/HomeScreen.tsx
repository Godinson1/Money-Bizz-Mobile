import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, RootStateOrAny } from "react-redux";
import { FAB, useTheme, List, Avatar } from "react-native-paper";
import { COLORS, SIZES, FONTS, images } from "../constants";
import { useTheme as NativeTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { getUserMessage, formatNumber } from "../components/helpers";
import Save from "./Save";
import Connection from "./Connections";

const { onboarding1, onboarding2 } = images;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Connections"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [connectionModalVisible, setConnectionModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  const { isUserLoading, user, showBalanceStatus } = useSelector(
    (state: RootStateOrAny) => state.user
  );
  const paperTheme = useTheme();
  const { colors } = NativeTheme();

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third",
    },
    {
      id: "58694a0f-3ga1-471f-bd96-145571e29d72",
      title: "Fourth",
    },
  ];

  const colorss = paperTheme.dark ? "white" : "white";
  const iconColor = paperTheme.dark ? "white" : COLORS.primary;

  const Item = ({ title }: { title: string }) => (
    <View style={styles.item}>
      <Text style={{ color: colorss, fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );

  const ItemOne = ({ title }: { title: string }) => (
    <View style={styles.itemOne}>
      <Text style={{ color: colorss, fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => <Item title={item.title} />;
  const renderItemOne = ({ item }: { item: any }) => (
    <ItemOne title={item.title} />
  );

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.textHeader}>
            <View>
              <Text style={{ color: colors.text, ...FONTS.h3 }}>
                {user.data && user.data.details && user.data.details.firstName},
              </Text>
              <Text style={{ color: colors.text, ...FONTS.body4 }}>
                {getUserMessage()}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <View pointerEvents="none">
                  <View style={styles.avatar}>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                      }}
                      source={onboarding1}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dashboard}>
            <View style={styles.dash}>
              <View>
                <View style={{}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    T.BALANCE
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {showBalanceStatus ? formatNumber(3000) : "******"}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    A.BALANCE
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {showBalanceStatus ? formatNumber(3000) : "******"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.dashcon}>
              <View style={{}}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  CONNECTIONS
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => setConnectionModalVisible(true)}
                    >
                      <View pointerEvents="none">
                        <View
                          style={[
                            styles.avatar,
                            {
                              backgroundColor: COLORS.lightPrimary,
                              justifyContent: "center",
                            },
                          ]}
                        >
                          <Text
                            style={{
                              ...FONTS.h3,
                              color: COLORS.white,
                              textAlign: "center",
                            }}
                          >
                            +
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Notification")}
                    >
                      <View pointerEvents="none">
                        <View style={styles.avatar}>
                          <Image
                            resizeMode="cover"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 50,
                            }}
                            source={onboarding1}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Notification")}
                    >
                      <View
                        pointerEvents="none"
                        style={{ marginLeft: 25, position: "absolute" }}
                      >
                        <View style={styles.avatar}>
                          <Image
                            resizeMode="cover"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 50,
                            }}
                            source={onboarding1}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Notification")}
                    >
                      <View
                        pointerEvents="none"
                        style={{ marginLeft: 65, position: "absolute" }}
                      >
                        <View style={styles.avatar}>
                          <Image
                            resizeMode="cover"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 50,
                            }}
                            source={onboarding1}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Notification")}
                    >
                      <View
                        pointerEvents="none"
                        style={{ marginLeft: -5, position: "absolute" }}
                      >
                        <View style={styles.avatar}>
                          <Image
                            resizeMode="cover"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 50,
                            }}
                            source={onboarding1}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 45 }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    SEE ALL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{ color: colors.text, fontSize: 12, fontWeight: "bold" }}
            >
              TRENDING
            </Text>
          </View>
          <View style={styles.tfa}>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={onboarding1}
            />
          </View>
          <View style={styles.dash}>
            <View style={{ marginTop: 10, marginBottom: 5 }}>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                TO-DO
              </Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Activate")}>
                <Ionicons
                  size={25}
                  style={{ marginBottom: -3 }}
                  name="refresh-circle"
                  color={iconColor}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemOne}>
            <Text style={{ color: colorss, fontSize: 14, fontWeight: "bold" }}>
              Add BVN
            </Text>
          </View>
          <View style={styles.itemOne}>
            <Text style={{ color: colorss, fontSize: 14, fontWeight: "bold" }}>
              Turn on Autosave
            </Text>
          </View>
          <View style={styles.itemOne}>
            <Text style={{ color: colorss, fontSize: 14, fontWeight: "bold" }}>
              Safelock Fund
            </Text>
          </View>
          <View style={styles.optionContainer}>
            <TouchableOpacity onPress={() => alert("Hello")}>
              <View style={styles.items}>
                <List.Item
                  title="See your recent activities"
                  description="Check your most recent activities on Moneybizz"
                  left={(props) => <List.Icon {...props} icon="camera" />}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{ color: colors.text, fontSize: 12, fontWeight: "bold" }}
            >
              REFER & EARN
            </Text>
          </View>
          <View style={styles.tfa}>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={onboarding1}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{ color: colors.text, fontSize: 12, fontWeight: "bold" }}
            >
              QUICK OPTIONS
            </Text>
          </View>

          <Connection
            modalVisible={connectionModalVisible}
            setModalVisible={setConnectionModalVisible}
          />
          <Save
            modalVisible={saveModalVisible}
            setModalVisible={setSaveModalVisible}
          />
        </View>
      </ScrollView>

      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => setSaveModalVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  textHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  smallTitle: {
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  item: {
    backgroundColor: "#05233E",
    borderRadius: 10,
    height: 140,
    width: 140,
    padding: 20,
    margin: 5,
  },
  itemOne: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 50,
    padding: 15,
    margin: 2,
  },
  tfa: {
    height: 80,
    marginVertical: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  optionContainer: {
    marginTop: 14,
    height: 90,
    backgroundColor: "transparent",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    justifyContent: "center",
  },
  items: {},
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    marginTop: 5,
  },
  dashboard: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  dash: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dashcon: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
