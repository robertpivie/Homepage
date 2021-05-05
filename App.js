import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Home from "./Pages/Home";

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "rgb(66, 139, 70)",
    background: "rgb(255, 255, 255)",
    card: "rgb(233, 234, 180)",
    text: "rgb(0,0,0,0)",
    border: "rgb(183, 181, 110)",
    notification: "rgb(214, 216, 139)",
  },
};

function App() {
  try {
    // const headTag = document.querySelector("head");
    // const icon = document.createElement("link");
    // icon.setAttribute("rel", "icon");
    // icon.setAttribute("href", "./assets/logo-reduced.png");
    // headTag.appendChild(icon);
  } catch (e) {
    console.log(e);
    // oops?
  }

  const options = {
    home: {
      title: "KLM Codes",
    },
  };

  return (
    <React.Fragment>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={options.home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

export default App;
