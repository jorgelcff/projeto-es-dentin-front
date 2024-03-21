import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useState, useContext } from "react";

import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/DentinForm/CurrentScreenWidget";

import NotificationPopup from "../../components/utils/NotificationPopup";
import { RadioButton } from "react-native-paper";
import styled from "styled-components/native";
import * as Store from "../../redux/store/store";

export default function RelatorioScreenThree({ navigation }: any) {
  const { formInfo, setFormInfo }: any = useContext(Store.FormContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [answer3, setAnswer3] = useState("0");

  const handleChange = (value: string, type: string) => {
    setFormInfo((prev: any) => ({
      ...prev,
      [type]: value,
    }));
    console.log(formInfo);
  };

  const onSubmit = async () => {
    handleChange(answer3, "alimentacao");
    navigation.navigate("Relatorio4");
  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <CurrentScreenWidget numberOfFilledWidgets={3} />
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
            <Title>Como foi sua alimentação nessa semana?</Title>

            <View
              style={{
                width: "100%",
              }}
            >
              <RadioButton.Group
                onValueChange={(newValue: any) => {
                  setAnswer3(newValue);
                  setIsDisabled(false);
                }}
                value={answer3}
              >
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Saudável e equilibrada"
                  value="Saudável e equilibrada"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Algumas refeições saudáveis, outras nem tanto"
                  value="Algumas refeições saudáveis, outras nem tanto"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Principalmente alimentos não saudáveis"
                  value="Principalmente alimentos não saudáveis"
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
