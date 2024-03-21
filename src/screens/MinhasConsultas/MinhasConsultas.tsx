// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DentinScreen from "../Dentin/Dentin";
import PerfilScreen from "../Perfil/Pefil";
import ListaConsultas from "../../components/MinhasConsultas/ListaConsultas";
import DoctorsList from "../../components/Home/DoctorsList";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageWrapper from "../../components/utils/ImageWrapper";


const MinhasConsultasScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <ListaConsultas />
    </View>
  );
};

export default MinhasConsultasScreen;
