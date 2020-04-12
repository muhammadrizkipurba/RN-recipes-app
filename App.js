import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

// To improve performance of navigation between screens on larger App 
useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    helvetica: require("./assets/fonts/Helvetica.ttf"),
    "helvetica-bold": require("./assets/fonts/Helvetica-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  };

  return <MealsNavigator />;
};