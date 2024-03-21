import { useEffect } from "react";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
// import GooglePlayImage from "../../../assets/Start/googe-play-image.png";
import ImageWrapper from "../utils/ImageWrapper";
import { View, TouchableHighlightProps } from "react-native";

interface ButtonGooglePlayProps extends TouchableHighlightProps {
  title: string;
}
const ButtonGooglePlayStyle = styled.TouchableHighlight`
  background-color: ${Constants.colors.gray[100]};
  border-radius: 109px;
  border-color: ${Constants.buttonConfig.Default.Primary.Default.BorderColor};
  border-width: ${Constants.buttonConfig.Default.Primary.Default.BorderWidth};
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ButtonTitle = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.colors.gray[700]};
  margin-left: 10px;
`;

const ButtonSubtitle = styled.Text`
  font-size: ${Constants.fontConfig.Xsm.Regular.FontSize};
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  color: ${Constants.colors.gray[700]};
`;

export default function ButtonGooglePlay({
  title,
  ...props
}: ButtonGooglePlayProps) {
  return (
    <ButtonGooglePlayStyle
      {...props}
      underlayColor={Constants.colors.gray[100]}
    >
      {/* Touchable highlight can only receive one child (has to do this trick) */}
      <>
        {/* <ImageWrapper source={GooglePlayImage} width={'24px'} height={'24px'} /> */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ButtonSubtitle>Disponível no</ButtonSubtitle>
          <ButtonTitle>Google Play</ButtonTitle>
        </View>
      </>
    </ButtonGooglePlayStyle>
  );
}
