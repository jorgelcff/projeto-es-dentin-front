import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useState, useContext } from "react";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/DentinForm/CurrentScreenWidget";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { RadioButton, Text } from "react-native-paper";
import styled from "styled-components/native";
import { RelatorioService } from "../../services/RelatorioService";
import * as Store from "../../redux/store/store";

export default function RelatorioScreenFour({ navigation }: any) {
  const { formInfo, setFormInfo }: any = useContext(Store.FormContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [answer4, setAnswer4] = useState("0");

  const onSubmit = async () => {
    setIsDisabled(true);
    const questions = {
      fkDentin: 2,
      alimentacao: formInfo.alimentacao,
      dores: answer4,
      higiene: {
        frequenciaEscovacao: formInfo.higiene.frequenciaEscovacao,
        usoFioDental: formInfo.higiene.usoFioDental,
      },
      dataEmissao: new Date(),
      dataReferencia: new Date(),
    };

    console.log("questions", questions);
    const relatorioService = new RelatorioService();

    try {
      const response = await relatorioService.postRelatorio(questions);
      if (response.status == "201") {
        navigation.navigate("Dentin", {
          statusDenTin: response.data.statusDenTin,
        });
      }
      console.log(response.data);
    } catch (error) {
      console.log("Erro na postagem de formulário:", error);
    }
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
                onValueChange={(newValue: any) => {
                  setAnswer4(newValue);
                  setIsDisabled(false);
                }}
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
            title={isDisabled ? "" : "Continuar"}
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
