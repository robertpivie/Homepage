import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Pages/Home";

import { colorsHex } from "./styles";

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

function App() {
  const options = {
    home: {
      title: "KLM Codes",
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={options.home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
