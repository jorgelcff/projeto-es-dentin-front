import { View, TextInputProps } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Input from "./Input";

interface InputWithTitleProps extends TextInputProps {
  TextTitle: string;
  TextSubtitle: string;
  InputPlaceHolder: string;
  mask: "cpf" | "telephone" | "date";
}

const InputTitle = styled.View`
  background-color: ${Constants.colors.gray[0]};
  margin-top: 8px;
`;

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[800]};
  margin-bottom: 4px;
`;

export default function InputWithTitleMask({
  mask,
  TextTitle,
  InputPlaceHolder,
  ...props
}: InputWithTitleProps) {
  const applyMask = (value: string) => {
    switch (mask) {
      case "cpf":
        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
      case "telephone":
        return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "$1 $2-$3");
      case "date":
        return value.replace(/^(\d{2})(\d{2})(\d{2})$/, "$1/$2/$3");
      default:
        return value;
    }
  };

  return (
    <InputTitle>
      <Title>{TextTitle}</Title>
      <Input
        maxLength={mask === "cpf" ? 14 : mask === "telephone" ? 15 : 8}
        placeholder={InputPlaceHolder}
        onChangeText={(value) => {
          const maskedValue = applyMask(value);
          props.onChangeText?.(maskedValue);
        }}
        style={{
          marginBottom: 24,
          color: Constants.inputConfig.Ontouch.Settings.Color,
        }}
        {...props}
      />
    </InputTitle>
  );
}
