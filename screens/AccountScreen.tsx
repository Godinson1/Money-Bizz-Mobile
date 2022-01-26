import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useTheme, List } from "react-native-paper";
import { COLORS, SIZES, FONTS, images } from "../constants";
import { useTheme as NativeTheme } from "@react-navigation/native";
import { AuthContext } from "../components/context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackScreenParamList } from "../types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamList,
  "SignUpScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function AccountScreen({ navigation }: Props) {
  const [balance, setBalance] = useState<boolean>(false);
  const paperTheme = useTheme();
  const { colors } = NativeTheme();
  const { toggleTheme, logout, showBalance } = useContext(AuthContext);
  const { isUserLoading, user, showBalanceStatus } = useSelector(
    (state: RootStateOrAny) => state.user
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text
              style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}
            >
              My Account
            </Text>
            <Text
              style={{ color: colors.text, fontSize: 13, fontWeight: "bold" }}
            >
              {user &&
                user.data &&
                user.data.details &&
                user.data.details.firstName}{" "}
              {user &&
                user.data &&
                user.data.details &&
                user.data.details.lastName}
            </Text>
          </View>
          <View style={styles.avatar}></View>
        </View>
        <View style={styles.tfa}></View>
        <View style={styles.header}>
          <View>
            <Text
              style={{ color: colors.text, fontSize: 13, fontWeight: "bold" }}
            >
              Enable Finger Print/Face ID
            </Text>
          </View>
          <View>
            <Switch />
          </View>
        </View>
        <View style={styles.header}>
          <View>
            <Text
              style={{ color: colors.text, fontSize: 13, fontWeight: "bold" }}
            >
              Show Dashboard Account Balance
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => showBalance()}>
              <View pointerEvents="none">
                <Switch value={showBalanceStatus} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header}>
          <View>
            <Text
              style={{ color: colors.text, fontSize: 13, fontWeight: "bold" }}
            >
              Enable Dark Mode
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => toggleTheme()}>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="My Account Settings"
                left={(props) => <List.Icon {...props} icon="account" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Today's Rate"
                left={(props) => <List.Icon {...props} icon="percent" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Self Help"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Add Your Bvn"
                left={(props) => <List.Icon {...props} icon="lock" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Refer & Earn N1000"
                left={(props) => <List.Icon {...props} icon="share" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Withdraw Funds"
                left={(props) => <List.Icon {...props} icon="dollar" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="My Card & Bank Settings"
                left={(props) => <List.Icon {...props} icon="card" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => alert("Hello")}>
            <View style={styles.items}>
              <List.Item
                title="Contact Us"
                left={(props) => <List.Icon {...props} icon="phone" />}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => logout()}>
            <View style={styles.items}>
              <List.Item
                title="Logout"
                left={(props) => <List.Icon {...props} icon="close" />}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  tfa: {
    height: 80,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  optionContainer: {
    marginTop: 7,
    height: 50,
    backgroundColor: "transparent",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    justifyContent: "center",
  },
  items: {},
});
