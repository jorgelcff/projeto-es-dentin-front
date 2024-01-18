// Navigation.js
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import StyledComponentExample from "../components/StyledComponentExample";
import LoginScreen from "../screens/Login/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPasswordScreen";
import StartScreen from "../screens/Start/Start";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../components/utils/ImageWrapper";
import RegisterScreen from "../screens/Register/RegisterScreen";
import SecondRegisterScreen from "../screens/Register/SecondRegisterScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="StyledComponent" component={StyledComponentExample} />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerTitle: "Entrar",
          title: "Entrar",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper
                // Remove the 'style' property with the 'cursor' value
                width={24}
                height={24}
                source={require("../../assets/Home/close-icon.png")}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          headerTitle: "Redefinir senha",
          title: "Redefinir senha",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper
                // Remove the 'style' property with the 'cursor' value
                width={24}
                height={24}
                source={require("../../assets/Home/close-icon.png")}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerTitle: "Criar uma conta",
          title: "Criar uma conta",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper
                // Remove the 'style' property with the 'cursor' value
                width={24}
                height={24}
                source={require("../../assets/Home/close-icon.png")}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="SecondRegisterScreen"
        component={SecondRegisterScreen}
        options={({ navigation }) => ({
          headerTitle: "Criar uma conta",
          title: "Criar uma conta",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper
                width={24}
                height={24}
                source={require("../../assets/Home/close-icon.png")}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
