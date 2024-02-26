// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DentinScreen from "../Dentin/Dentin";
import PerfilScreen from "../Perfil/Pefil";
import HomeHeader from "../../components/Home/HeaderHome";
import DoctorsList from "../../components/Home/DoctorsList";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dentin"
        component={DentinScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const dentistas = [
  {
    id: 1,
    nome: "Dr. Daniel Zmboni",
    especialidade: "Odontologia Geral",
    avaliacao: 4.5,
  },
  {
    id: 2,
    nome: "Dr. Allyson Ryan",
    especialidade: "Ortodontia",
    avaliacao: 4.2,
  },
  {
    id: 3,
    nome: "Dr. Jorge Freitas",
    especialidade: "Implantodontia",
    avaliacao: 4.8,
  },
  {
    id: 4,
    nome: "Dr. Lucas Gabriel",
    especialidade: "Endodontia",
    avaliacao: 4.0,
  },
  {
    id: 5,
    nome: "Dr. Erick Daniel",
    especialidade: "Periodontia",
    avaliacao: 4.7,
  },
];

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <HomeHeader />
      <DoctorsList />
    </View>
  );
};

export default HomeScreen;