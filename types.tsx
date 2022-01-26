export type RootStackParamList = {
  Root: undefined;
  Notification: undefined;
  Splash: undefined;
  NotFound: undefined;
  Activate: undefined;
  Connections: undefined;
  Save: undefined;
  PaymentOptionScreen: undefined;
};

type userData = {
  firstName: string;
  lastName: string;
  email: string;
};

export type RootStackScreenParamList = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  Notification: undefined;
  FinishRegistration: any;
  VerifyEmail: undefined;
  ResetPassword: undefined;
  NotFoundScreen: undefined;
  Activate: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Savings: undefined;
  Invest: undefined;
  Notification: undefined;
  Account: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  SavingScreen: undefined;
};

export type TabThreeParamList = {
  Notification: undefined;
};

export type TabFourParamList = {
  InvestScreen: undefined;
};

export type TabFiveParamList = {
  AccountScreen: undefined;
};
