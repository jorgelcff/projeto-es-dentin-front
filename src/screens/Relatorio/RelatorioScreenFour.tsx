import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useState } from "react";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/DentinForm/CurrentScreenWidget";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { RadioButton, Text } from "react-native-paper";
import styled from "styled-components/native";
import { RelatorioService } from "../../services/RelatorioService";

export default function RelatorioScreenFour({ navigation }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [answer4, setAnswer4] = useState("0");
  const onSubmit = async () => {
    //const dentinId = sessionStorage.getItem("dentinId");
    const Q1 = await sessionStorage.getItem("Q1");
    const Q2 = await sessionStorage.getItem("Q2");
    const Q3 = await sessionStorage.getItem("Q3");
    const Q4 = answer4;

    const questions = {
      fkDentin: 2,
      alimentacao: Q3,
      dores: Q4,
      higiene: {
        frequenciaEscovacao: Q1,
        usoFioDental: Q2,
      },
      dataEmissao: new Date(),
      dataReferencia: new Date(),
    };

    const relatorioService = new RelatorioService();

    try {
      console.log("questions", questions);
      const response = await relatorioService.postRelatorio(questions);
      console.log(response);
    } catch (error) {
      console.log("Erro na postagem de formulário:", error);
    }

    setIsDisabled(true);
  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <CurrentScreenWidget numberOfFilledWidgets={4} />

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
            <Title>Tem sentido alguma dor bucal?</Title>

            <View
              style={{
                width: "100%",
              }}
            >
              <RadioButton.Group
                onValueChange={(newValue: any) => setAnswer4(newValue)}
                value={answer4}
              >
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Não, sem dor"
                  value="Não, sem dor"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Um leve desconforto ocasional"
                  value="Um leve desconforto ocasional"
                />
                <RadioButton.Item
                  style={{
                    width: "100%",
                  }}
                  label="Sim, dor persistente"
                  value="Sim, dor persistente"
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
