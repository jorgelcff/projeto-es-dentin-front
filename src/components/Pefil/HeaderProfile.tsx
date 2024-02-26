import React from "react";
import { View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ImageWrapper from "../utils/ImageWrapper";

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
  return (
    <Header>
      <Title>Perfil</Title>
      <ProfileContent>
        <ImageWrapper
          width={50}
          height={50}
          source={require("../../../assets/Profile/avatar.png")}
        />
        <ProfileName>Melk Victor</ProfileName>
        <ProfileMail>melk@victor.com</ProfileMail>
      </ProfileContent>
    </Header>
  );
};

export default PefilHeader;
