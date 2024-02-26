import { View, Text } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ImageWrapper from "../../components/utils/ImageWrapper";

const DentinTitle = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: 32px;
  color: ${Constants.colors.gray[800]};
  width: 100%;
  text-align: center;
  margin-top: 24px;
`;
const DentinSubTitle = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: 30px;
  font-weight: 600;
  color: ${Constants.colors.primary[900]};
  width: 100%;
  line-height: 35px;
`;

const BoldText = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.colors.primary[600]};
`;

const LineBreak = styled.Text`
  flex: 1;
`;

const DentinImg = styled.Image``;

const DentinScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <DentinTitle>Dentin</DentinTitle>
      <View style={{ width: "100%", marginTop: 16 }}>
        <DentinSubTitle>Olá,</DentinSubTitle>
        <DentinSubTitle>
          Eu sou o <BoldText>Dentin</BoldText>
        </DentinSubTitle>
      </View>
      <ImageWrapper
        source={require("../../../assets/Dentin/dentin.png")}
        width={300}
        height={300}
        resizeMode={"contain"}
      />
    </View>
  );
};

export default DentinScreen;
