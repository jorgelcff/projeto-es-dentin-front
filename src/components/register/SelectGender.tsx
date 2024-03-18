import { View, TextInputProps, Text } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker from the correct package
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Input from "../utils/Input";
import { useContext, useEffect, useState } from "react";
import * as Store from "../../redux/store/store";
import { PacienteCreate } from "../../models/Paciente";

interface InputWithTitleProps extends TextInputProps {
  TextTitle: string;
  InputPlaceHolder: string;
}

const InputWithTitle = styled.View`
  background-color: ${Constants.colors.gray[0]};
  margin-top: 8px;
`;

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[800]};
  margin-bottom: 4px;
`;

const PickerStyle = styled(Picker)`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  border-radius: ${Constants.inputConfig.Default.Radius};
  width: ${Constants.inputConfig.Default.Width};
  height: ${Constants.inputConfig.Default.Height};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  padding: ${Constants.inputConfig.Default.Padding};
  color: ${(props: any) =>
    props.color ? `${props.color}` : Constants.inputConfig.Ontouch.Login.Color};
  margin: ${(props: any) => (props.margin ? `${props.margin}px` : 0)};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : 0)};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : 0};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : 0};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : 0};
  max-width: 500px;
`;

export default function SelectGender({
  TextTitle,
  InputPlaceHolder,
  ...props
}: InputWithTitleProps) {
  const { registerInfo, setRegisterInfo }: any = useContext(
    Store.RegisterContext
  );
  const handleChange = (value: PacienteCreate, type: any) => {
    setRegisterInfo((prev: PacienteCreate) => ({ ...prev, [type]: value }));
  };
  const [selectedLanguage, setSelectedLanguage] = useState("0");
  return (
    <InputWithTitle>
      <Title>{TextTitle}</Title>
      <PickerStyle
        selectedValue={selectedLanguage as string}
        placeholder={InputPlaceHolder}
        onValueChange={(itemValue: any, itemIndex) => {
          handleChange(itemValue, "sexo");
        }}
        dropdownIconColor={Constants.colors.primary[900]}
        collapsable={true}
        color={`${Constants.inputConfig.Ontouch.Settings.Color}`}
        {...props}
      >
        <Picker.Item
          style={{
            color: Constants.colors.primary[900],
            fontSize: 16,
          }}
          label="Selecione seu gênero"
          value="0"
        />
        <Picker.Item
          style={{ color: Constants.colors.primary[900], fontSize: 16 }}
          label="Masculino"
          value="M"
        />
        <Picker.Item
          style={{ color: Constants.colors.primary[900], fontSize: 16 }}
          label="Feminino"
          value="F"
        />
        <Picker.Item
          style={{ color: Constants.colors.primary[900], fontSize: 16 }}
          label="Outro"
          value="O"
        />
        <Picker.Item
          style={{ color: Constants.colors.primary[900], fontSize: 16 }}
          label="Prefiro não dizer"
          value="N"
        />
      </PickerStyle>
    </InputWithTitle>
  );
}
