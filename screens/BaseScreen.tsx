import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackScreenParamList } from "../types";
import { COLORS, SIZES, FONTS, images } from "../constants";

const { onboarding1, onboarding2, onboarding3, onboarding4 } = images;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackScreenParamList,
  "SplashScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const onBoarding = [
  {
    title: "A Journey to endless financial opportunities.",
    description: "Save and send money to loved ones without hassle.",
    img: onboarding1,
  },
  {
    title: "Ajo`.",
    description: "Collectively save money with friends and families.",
    img: onboarding2,
  },
  {
    title: "Invest.",
    description: "Join other bizzers to invest and grow funds with time.",
    img: onboarding3,
  },
  {
    title: "Automatic Save and Safe Lock.",
    description: "Set time to lock funds and/or save automatically.",
    img: onboarding4,
  },
];

const scrollX = new Animated.Value(0);

const renderContent = () => {
  return (
    <Animated.ScrollView
      pagingEnabled
      horizontal
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {onBoarding.map((item, index) => (
        <View key={index} style={{ width: SIZES.width, height: SIZES.height }}>
          <View
            style={{
              flex: 1,
              marginTop: -350,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{ width: "50%", height: "20%" }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "43%",
              left: 30,
              right: 30,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
                textAlign: "center",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                marginTop: SIZES.base,
                color: COLORS.gray,
                textAlign: "center",
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

const renderDots = () => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);
  return (
    <View style={styles.dotContainer}>
      {onBoarding.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [SIZES.base, 17, SIZES.base],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dots, { width: dotSize, height: dotSize }]}
            opacity={opacity}
            key={`dots-${index}`}
          ></Animated.View>
        );
      })}
    </View>
  );
};

const SplashScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}></View>
      <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Moneybizz</Text>
      <View style={styles.header}>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.primary,

                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              New to Moneybizz? Sign Up
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

    alignItems: "center",
  },
  header: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  footer: {
    flex: 1,
    width: SIZES.width,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: COLORS.primary,
  },
  logoContainer: {
    marginVertical: 20,
  },
  button: {
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginBottom: 10,
  },
  dotContainer: {
    height: SIZES.padding,
    flexDirection: "row",
  },
  dotRootContainer: {
    height: SIZES.padding,
    bottom: "-0.7%",
  },
  dots: {
    borderRadius: 28,
    marginHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
});

export default SplashScreen;
