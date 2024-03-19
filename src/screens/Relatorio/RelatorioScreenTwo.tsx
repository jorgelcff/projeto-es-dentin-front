import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useState, useContext } from "react";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/DentinForm/CurrentScreenWidget";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { RadioButton } from "react-native-paper";
import * as Store from "../../redux/store/store";
import styled from "styled-components/native";

export default function RelatorioScreenTwo({ navigation }: any) {
  const { formInfo, setFormInfo }: any = useContext(Store.FormContext);

  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (value: string, type: string, type2: string) => {
    console.log(type, type2, value);
    setFormInfo((prev: any) => ({
      ...prev,
      [type]: {
        ...prev.higiene,
        [type2]: value,
      },
    }));
    console.log(formInfo);
  };
  const [answer2, setAnswer2] = useState("0");

  const onSubmit = async () => {
    handleChange(answer2, "higiene", "usoFioDental");
    navigation.navigate("Relatorio3");
  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <CurrentScreenWidget numberOfFilledWidgets={2} />
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
            <Title>Você tem usado o fio-dental?</Title>

            <View
              style={{
                width: "100%",
              }}
            >
              <RadioButton.Group
                onValueChange={(newValue: any) => {
                  setAnswer2(newValue);
                  setIsDisabled(false);
                }}
                value={answer2}
              >
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Sim, com regularidade"
                  value="Sim, com regularidade"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Algumas vezes após a escovação"
                  value="Algumas vezes após a escovação"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Não tenho usado"
                  value="Não tenho usado"
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
