import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/main";
import DetailPage from "./screens/detail";

// Import any other screens you want to use
const Stack = createStackNavigator();
export default function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="main" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="detail" component={DetailPage} options={{ headerShown: false }}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
