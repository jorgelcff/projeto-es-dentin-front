// Navigation.js
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import StyledComponentExample from "../components/StyledComponentExample";
import LoginScreen from "../screens/Login/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPasswordScreen";
import StartScreen from "../screens/Start/Start";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../components/utils/ImageWrapper";
import RegisterScreen from "../screens/Register/RegisterScreen";
import SecondRegisterScreen from "../screens/Register/SecondRegisterScreen";
import DentistaScreen from "../screens/Dentista/Dentista";
import AgendamentoScreen from "../screens/Agendamento/Agendamento";
import ConfirmarConsultaScreen from "../screens/ConfirmarConsulta/ConfirmarConsulta";
import MinhasConsultasScreen from "../screens/MinhasConsultas/MinhasConsultas";
import RelatorioScreenOne from "../screens/Relatorio/RelatorioScreenOne";
import RelatorioScreenTwo from "../screens/Relatorio/RelatorioScreenTwo";
import RelatorioScreenThree from "../screens/Relatorio/RelatorioScreenThree";
// import ArrowBack from "../../assets/Button/icon-left.png";
import RelatorioScreenFour from "../screens/Relatorio/RelatorioScreenFour";

const Stack = createStackNavigator();

const ArrowBack = require("../../assets/Button/icon-left.png");

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="StyledComponent" component={StyledComponentExample} />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerTitle: "Entrar",
          title: "Entrar",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
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
              <ImageWrapper width={56} height={56} source={ArrowBack} />
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
              <ImageWrapper width={56} height={56} source={ArrowBack} />
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
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="DentistaScreen"
        component={DentistaScreen}
        options={({ navigation }) => ({
          headerTitle: "Dentista",
          title: "Dentista",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="AgendamentoScreen"
        component={AgendamentoScreen}
        options={({ navigation }) => ({
          headerTitle: "Agendar Consulta",
          title: "Agendar Consulta",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="ConfirmarConsultaScreen"
        component={ConfirmarConsultaScreen}
        options={({ navigation }) => ({
          headerTitle: "Confirmar Consulta",
          title: "Confirmar Consulta",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="MinhasConsultas"
        component={MinhasConsultasScreen}
        options={({ navigation }) => ({
          headerTitle: "Minhas Consultas",
          title: "Minhas Consultas",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Stack.Screen
        name="Relatorio1"
        component={RelatorioScreenOne}
        options={({ navigation }) => ({
          headerTitle: "DenTalk",
          title: "DenTalk",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Stack.Screen
        name="Relatorio2"
        component={RelatorioScreenTwo}
        options={({ navigation }) => ({
          headerTitle: "DenTalk",
          title: "DenTalk",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Stack.Screen
        name="Relatorio3"
        component={RelatorioScreenThree}
        options={({ navigation }) => ({
          headerTitle: "DenTalk",
          title: "DenTalk",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Stack.Screen
        name="Relatorio4"
        component={RelatorioScreenFour}
        options={({ navigation }) => ({
          headerTitle: "DenTalk",
          title: "DenTalk",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={56} height={56} source={ArrowBack} />
            </TouchableWithoutFeedback>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
