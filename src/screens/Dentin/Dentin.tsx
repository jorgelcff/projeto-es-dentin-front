import {
  View,
  Text,
  TouchableHighlight,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ImageWrapper from "../../components/utils/ImageWrapper";
import Tooltip from "react-native-walkthrough-tooltip";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp, useNavigation } from "@react-navigation/native";

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

interface DentinScreenProps {
  route: RouteProp<any, "DentinScreen">;
}

const DentinScreen = ({ route }: DentinScreenProps) => {
  const { statusDenTin } = route.params ? route.params : "";
  const [showTip, setTip] = useState(false);
  const [dentin, setDentin] = useState("");
  const [dentinIcon, setDentinIcon] = useState<any>();
  const [dentinImg, setDentinImg] = useState<any>();

  const navigate = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const nextStep = () => {
    navigate.navigate("Relatorio1");
  };

  useEffect(() => {
    console.log("dentin setado");
    setDentin(statusDenTin);
  }, [statusDenTin]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <DentinTitle>Dentin</DentinTitle>
      <View style={{ width: "100%", marginTop: 16 }}>
        <DentinSubTitle>Olá,</DentinSubTitle>
        <DentinSubTitle>
          Eu sou o <BoldText>Dentin</BoldText>
        </DentinSubTitle>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          isVisible={showTip}
          content={
            <View>
              {dentin != "Sujo" ? (
                <Text>O DenTIn está feliz! Continue assim!</Text>
              ) : (
                <Text>Ah não! O DenTIn está mal. Reforce seus cuidados.</Text>
              )}
            </View>
          }
          onClose={() => setTip(false)}
          allowChildInteraction={false} 
          placement="bottom"
        >
          <TouchableOpacity
            style={{
              backgroundColor: dentin != "Sujo" ? "#1DBEAB" : "#981C1C",
              width: 70,
              height: 70,
              marginTop: 20,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setTip(true);
              console.log(statusDenTin);
            }}
          >
            <ImageWrapper
              source={
                dentin != "Sujo"
                  ? require("../../../assets/Dentin/smile-face.png")
                  : require("../../../assets/Dentin/bad-face.png")
              }
              width={40}
              height={40}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </Tooltip>
        <ImageWrapper
          source={
            dentin != "Sujo"
              ? require("../../../assets/Dentin/dentin.png")
              : require("../../../assets/Dentin/badDentin.png")
          }
          width={width - 120}
          height={width - 120}
          resizeMode={"contain"}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#1DBEAB",
            width: 70,
            height: 70,
            marginTop: 20,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => nextStep()}
        >
          <Ionicons name="chatbubbles" size={35} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DentinScreen;
