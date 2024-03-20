// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import HeaderProfile from "../../components/Pefil/HeaderProfile";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../../constants/Constants";
import { PacienteService } from "../../services/PacienteService";
import { AuthService } from "../../services/AuthService";
import { useNavigation } from "@react-navigation/native";

const EditProfile = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${Constants.colors.gray[400]};
`;

const LogoutButton = styled(TouchableOpacity)`
  border-radius: 8px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${Constants.colors.gray[400]};
`;
const ProfileHistory = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${Constants.colors.gray[400]};
`;

const ButtonText = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  margin-left: 16px;
`;

const ButtonInfo = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[700]};
  margin-top: 4px;
  margin-left: 16px;
`;

const ButtonTexts = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Settings = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${Constants.colors.gray[400]};
`;

const PerfilScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <HeaderProfile />
      <ProfileActions />
      <ProfileLogOut />
    </View>
  );
};

const ProfileLogOut = () => {
  const navigate = useNavigation();
  const logOut = async () => {
    const authService = new AuthService();
    authService.logout();
    navigate.navigate("Start");
  };
  return (
    <LogoutButton onPress={() => logOut()}>
      <Text
        style={{
          fontFamily: Constants.fontConfig.Sm.Medium.FontFamily,
          fontSize: 16,
          color: `${Constants.colors.primary[600]}`,
          marginRight: 8,
        }}
      >
        Sair
      </Text>
      <Ionicons
        name="exit"
        size={24}
        color={`${Constants.colors.primary[600]}`}
      />
    </LogoutButton>
  );
};

const ProfileActions = () => {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <EditProfile
        onPress={() => {
          alert("Em desenvolvimento");
        }}
      >
        <Ionicons
          name="pencil-sharp"
          size={24}
          color={`${Constants.colors.primary[600]}`}
        />
        <ButtonText>Editar meus dados</ButtonText>
      </EditProfile>
      <ProfileHistory
        onPress={() => {
          alert("Em desenvolvimento");
        }}
      >
        <Ionicons
          name="calendar"
          size={24}
          color={`${Constants.colors.primary[600]}`}
        />
        <ButtonTexts>
          <ButtonText>Minhas Consultas</ButtonText>
          <ButtonInfo>
            Encontre aqui suas consultas agendadas e já realizadas
          </ButtonInfo>
        </ButtonTexts>
      </ProfileHistory>
      <Settings
        onPress={() => {
          alert("Em desenvolvimento");
        }}
      >
        <Ionicons
          name="settings-sharp"
          size={24}
          color={`${Constants.colors.primary[600]}`}
        />
        <ButtonTexts>
          <ButtonText>Configurações</ButtonText>
          <ButtonInfo>Defina suas preferências e redefina sua senha</ButtonInfo>
        </ButtonTexts>
      </Settings>
    </View>
  );
};

export default PerfilScreen;
