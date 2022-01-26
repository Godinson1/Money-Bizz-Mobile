import * as React from "react";
import { useTheme } from "react-native-paper";
import { StyleSheet, FlatList, ScrollView, View, Text } from "react-native";
import { useTheme as NativeTheme } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function SavingScreen() {
  const { colors } = NativeTheme();
  const paperTheme = useTheme();

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
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third",
    },
    {
      id: "58694a0f-3331-471f-bd96-145571e29d72",
      title: "Third",
    },
  ];

  const colorss = paperTheme.dark ? "white" : "white";

  const Item = ({ title }: { title: string }) => (
    <TouchableWithoutFeedback onPress={() => alert("I dey work!")}>
      <View style={styles.item}>
        <Text style={{ color: colorss, fontSize: 20, fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({ item }: { item: any }) => <Item title={item.title} />;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text
              style={{ color: colors.text, fontSize: 25, fontWeight: "bold" }}
            >
              Savings
            </Text>
            <Text
              style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}
            >
              N50,000
            </Text>
          </View>
          <View style={styles.avatar}></View>
        </View>
        <View style={styles.tfa}></View>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#05233E",
    borderRadius: 10,
    height: 140,
    width: 140,
    padding: 20,
    margin: 5,
  },
  header: {
    marginTop: 15,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#05233E",
  },
  tfa: {
    height: 80,
    marginVertical: 10,
    backgroundColor: "#05233E",
    borderRadius: 10,
  },
});
