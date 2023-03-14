import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Onboarding, DestinationDetail } from "./screens/";
// extra screens
import Tabs from "./navigation/tabs";

import { icons, COLORS, SIZES } from "./constants";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/Login";
import SignInScreen from "./screens/SignIn";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf")
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Onboarding"}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: null,
            headerShown: "false"
          }}
        />

        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{ headerShown: false }}
        />

        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}

       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};