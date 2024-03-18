// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DentinScreen from "../Dentin/Dentin";
import PerfilScreen from "../Perfil/Pefil";
import HomeHeader from "../../components/Home/HeaderHome";
import DoctorsList from "../../components/Home/DoctorsList";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageWrapper from "../../components/utils/ImageWrapper";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1DBEAB",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const active = "../../../assets/Home/home-smile-icon-active.png";
            const inactive =
              "../../../assets/Home/home-smile-icon-inactive.png";
            return (
              <ImageWrapper
                source={focused ? require(active) : require(inactive)}
                width={size}
                height={size}
                resizeMode={"contain"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Dentin"
        component={DentinScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const active = "../../../assets/Home/tooth-icon-active.png";
            const inactive = "../../../assets/Home/tooth-icon-inactive.png";
            return (
              <ImageWrapper
                source={focused ? require(active) : require(inactive)}
                width={size}
                height={size}
                resizeMode={"contain"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const active = "../../../assets/Home/user-settings-icon-active.png";
            const inactive =
              "../../../assets/Home/user-settings-icon-inactive.png";
            return (
              <ImageWrapper
                source={focused ? require(active) : require(inactive)}
                width={size}
                height={size}
                resizeMode={"contain"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};



const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <HomeHeader />
      <DoctorsList />
    </View>
  );
};

export default HomeScreen;
