import { View, TextInputProps } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Input from "./Input";
import TextInputMask from "react-native-text-input-mask";

interface InputWithTitleProps extends TextInputProps {
  TextTitle: string;
  TextSubtitle: string;
  InputPlaceHolder: string;
  mask: string;
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
  return (
    <InputTitle>
      <Title>{TextTitle}</Title>
      <TextInputMask
        placeholder={InputPlaceHolder}
        mask={mask}
        style={{
          marginBottom: 24,
          color: Constants.inputConfig.Ontouch.Settings.Color,
        }}
        {...props}
      />
    </InputTitle>
  );
}
