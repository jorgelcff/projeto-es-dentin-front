import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import React, { useContext, useEffect, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/register/CurrentScreenWidget";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import NotificationPopup from "../../components/utils/NotificationPopup";

import InputWithTitle from "../../components/utils/InputWithTitle";
import SelectConvenio from "../../components/register/SelectConvenio";
import { PacienteCreate } from "../../models/Paciente";
import { RadioButton, Text } from "react-native-paper";
import styled from "styled-components/native";
import InputWithTitleMask from "../../components/utils/InputWithTitleMask";

export default function RegisterScreen({ navigation }: any) {
  const { registerInfo, setRegisterInfo }: any = useContext(
    Store.RegisterContext
  );
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (value: PacienteCreate, type: any) => {
    setRegisterInfo((prev: PacienteCreate) => ({ ...prev, [type]: value }));
    console.log(registerInfo);
  };

  const transformData = (input: string) => {
    const year = input.slice(4);
    const month = input.slice(2, 4);
    const day = input.slice(0, 2);
    return `${year}-${month}-${day}`;
  };
  const onSubmit = async () => {
    setIsDisabled(true);
    const isEmailValid = () => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        registerInfo.email
      );
    };
    if (registerInfo.email && isEmailValid()) {
      navigation.navigate("SecondRegisterScreen");
      setIsDisabled(false);
    } else {
      setShowPopup(true);
      setIsDisabled(false);
    }
  };

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: keyboardVisible ? 350 : 20,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <CurrentScreenWidget numberOfFilledWidgets={1} />
            <InputWithTitleSubtitle
              TextTitle={"Insira seu nome"}
              TextSubtitle={"Como você deseja ser chamado"}
              InputPlaceHolder={"Nome"}
              onChangeText={(value: any) => handleChange(value, "nome")}
            />
            <InputWithTitleSubtitle
              TextTitle={"Insira seu email"}
              TextSubtitle={
                "Não vamos te enviar spam nem nada, é só pra entrar no aplicativo mesmo :)"
              }
              InputPlaceHolder={"Email"}
              onChangeText={(value: any) => {
                handleChange(value, "email");
              }}
            />

            <InputWithTitleMask
              TextTitle={"CPF"}
              InputPlaceHolder={"000.000.000-00"}
              onChangeText={(value: any) => {
                handleChange(value, "cpf");
              }}
              TextSubtitle={""}
              mask={"cpf"}
            />
            <InputWithTitleMask
              TextTitle={"Telefone"}
              InputPlaceHolder={"(00) 00000-0000"}
              onChangeText={(value: any) => {
                handleChange(value, "telefone");
              }}
              TextSubtitle={""}
              mask={"telephone"}
            />
            <InputWithTitleMask
              TextTitle={"Data de nascimento"}
              InputPlaceHolder={"xx/xx/xxxx"}
              onChangeText={(value: any) => {
                const data = transformData(value);
                handleChange(data, "dataNasc");
              }}
              mask={"date"}
            />
            <InputWithTitle
              TextTitle={"Cidade"}
              InputPlaceHolder={"Cidade"}
              onChangeText={(value: any) => {
                handleChange(value, "cidade");
              }}
              TextSubtitle={""}
            />
            <InputWithTitle
              TextTitle={"UF"}
              InputPlaceHolder={"UF"}
              onChangeText={(value: any) => {
                handleChange(value, "uf");
              }}
              TextSubtitle={""}
            />
            <InputWithTitle
              TextTitle={"Bairro"}
              InputPlaceHolder={"Bairro"}
              onChangeText={(value: any) => {
                handleChange(value, "bairro");
              }}
              TextSubtitle={""}
            />
            <InputWithTitle
              TextTitle={"Rua"}
              InputPlaceHolder={"Rua"}
              onChangeText={(value: any) => {
                handleChange(value, "rua");
              }}
              TextSubtitle={""}
            />
            <InputWithTitle
              TextTitle={"Endereço"}
              InputPlaceHolder={"Número"}
              onChangeText={(value: any) => {
                handleChange(value, "endereco");
              }}
              TextSubtitle={""}
            />

            <Title>Selecione seu gênero</Title>
            <RadioButton.Group
              onValueChange={(newValue: any) => handleChange(newValue, "sexo")}
              value={registerInfo.sexo}
            >
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="Feminino"
                value="F"
              />
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="Masculino"
                value="M"
              />
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="Outro"
                value="O"
              />

              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="Prefiro não dizer"
                value="P"
              />
            </RadioButton.Group>

            <Title>Selecione seu convênio</Title>
            <RadioButton.Group
              onValueChange={(newValue: any) =>
                handleChange(newValue, "fkConvenio")
              }
              value={registerInfo.fkConvenio}
            >
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="Nenhum"
                value={0}
              />
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="001"
                value={1}
              />
              <RadioButton.Item
                style={{
                  width: "100%",
                }}
                label="002"
                value={2}
              />
            </RadioButton.Group>
          </KeyboardAvoidingView>
        </ScrollView>
        <ButtonPrimaryDefault
          title={"Continuar"}
          onPress={() => {
            onSubmit();
          }}
          disabled={isDisabled}
          style={{
            backgroundColor: isDisabled
              ? Constants.colors.gray[700]
              : Constants.buttonConfig.Default.Primary.Small.BackgroundColor,
            marginBottom: 30,
          }}
        />
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
