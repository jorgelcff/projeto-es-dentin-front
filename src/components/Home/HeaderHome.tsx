import React, { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import HeaderHomeInput from "./HeaderHomeInput";
import HeaderHomeSelect from "./HeaderHomeSelect";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: 32px;
  color: ${Constants.colors.gray[0]};
  width: 100%;
  text-align: center;
  margin-top: 16px;
`;

const SubTitle = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Xsm.Bold.FontSize};
  font-weight: 600;
  color: ${Constants.colors.gray[700]};
  width: 100%;
  text-align: center;
  margin-top: 16px;
`;

const FindDoctorText = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[0]};
  width: 100%;
  text-align: center;
  margin-top: 4px;
`;

const FindDoctor = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const FindeDoctorInputs = styled.View`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
`;

const Header = styled.View`
  background-color: ${Constants.colors.primary[600]};
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-top: 8px;
  padding: 16px;
`;

const HomeHeader = () => {
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
      <Title>Dentin</Title>
      <SubTitle>Bem-vindo, {usuario && usuario.nome}</SubTitle>
      <FindDoctor>
        <FindDoctorText>Encontre um dentista agora</FindDoctorText>
        <FindeDoctorInputs>
          <HeaderHomeInput placeholder="Nome ou Especialidade" />
          <HeaderHomeSelect placeholder="Local" />
        </FindeDoctorInputs>
      </FindDoctor>
    </Header>
  );
};

export default HomeHeader;
