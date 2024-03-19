import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useContext, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/DentinForm/CurrentScreenWidget";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { RadioButton } from "react-native-paper";
import styled from "styled-components/native";

export default function RelatorioScreenOne({ navigation }: any) {
  const { formInfo, setFormInfo }: any = useContext(Store.FormContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [answer1, setAnswer1] = useState("0");

  const handleChange = (value: string, type: string, type2: string) => {
    setFormInfo((prev: any) => ({
      ...prev,
      [type]: {
        ...prev.higiene,
        [type2]: value,
      },
    }));
    console.log(formInfo);
  };

  const onSubmit = async () => {
    handleChange(answer1, "higiene", "frequenciaEscovacao");
    navigation.navigate("Relatorio2");
  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <CurrentScreenWidget numberOfFilledWidgets={1} />
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Title>
              Quantas vezes em média você escovou o dente por dia essa semana?
            </Title>

            <View
              style={{
                width: "100%",
              }}
            >
              <RadioButton.Group
                onValueChange={(newValue: any) => {
                  setAnswer1(newValue);
                  setIsDisabled(false);
                }}
                value={answer1}
              >
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="1 vez"
                  value="1 vez"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="2 a 3 vezes"
                  value="2 a 3 vezes"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="4 ou mais vezes"
                  value="4 ou mais vezes"
                />
              </RadioButton.Group>
            </View>
          </View>

          <ButtonPrimaryDefault
            title={"Continuar"}
            onPress={() => {
              onSubmit();
            }}
            disabled={isDisabled}
            style={{
              bottom: 0,
              position: "absolute",
              backgroundColor: isDisabled
                ? Constants.colors.gray[700]
                : Constants.buttonConfig.Default.Primary.Small.BackgroundColor,
              marginBottom: 20,
            }}
          />
        </View>
        {showPopup && (
          <NotificationPopup
            title={"Email inválido ou já existente."}
            setShowPopup={setShowPopup}
            bottom={"30px"}
          />
        )}
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[800]};
  margin-bottom: 4px;
`;
