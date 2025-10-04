import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, } from "react-native";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return() => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return(
      <View style= {{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
      <Image
      source={require("./assets/splash-screen.png")}
      style={{resizeMode:"contain"}}
      />
      </View>
    );
  }
  
  


  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
    
  );
}
