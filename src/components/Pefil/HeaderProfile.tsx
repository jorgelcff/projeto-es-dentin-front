import React, { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: 32px;
  color: ${Constants.colors.gray[800]};
  width: 100%;
  margin-top: 16px;
`;

const ProfileName = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: 20px;
  font-weight: 600;
  color: ${Constants.colors.gray[800]};
  width: 100%;
  text-align: center;
  margin-top: 8px;
  line-height: 24px;
`;

const ProfileMail = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-weight: 600;
  color: ${Constants.colors.gray[700]};
  width: 100%;
  text-align: center;
  line-height: 18px;
`;

const ProfileContent = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
`;

const PefilHeader = () => {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      const usuarioData = await AsyncStorage.getItem("usuario");
      if (usuarioData) {
        const parsedUsuario = JSON.parse(usuarioData);
        setUsuario(parsedUsuario);
      }
    };

    fetchUsuario();
  }, []);
  return (
    <Header>
      <Title>Perfil</Title>
      <ProfileContent>
        <Ionicons name="person-circle-outline" size={50} color="black" />
        {usuario && (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <ProfileName>{usuario.nome}</ProfileName>
            <ProfileMail>{usuario.email}</ProfileMail>
          </View>
        )}
      </ProfileContent>
    </Header>
  );
};

export default PefilHeader;
