import { useRef } from "react";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  fixedPriceState: any;
  SufixValue: string;
  InputFormatter: (value: string) => string;
}

const InputStyle = styled.TextInput`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  max-width: 90%;
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  color: ${Constants.inputConfig.Ontouch.Settings.Color};
`;

const ViewInput = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  height: ${Constants.inputConfig.Default.Height};
  margin-bottom: 24px;
  border-radius: ${Constants.inputConfig.Default.Radius};
  width: 100%;
  padding: ${Constants.inputConfig.Default.Padding};
`;

const SufixText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  color: ${Constants.inputConfig.Ontouch.Settings.Color};
  margin-left: 5px;
`;

export default function Input({
  fixedPriceState,
  SufixValue,
  InputFormatter,
  ...props
}: InputProps) {
  const { fixedState, setFixedState } = fixedPriceState;
  const inputRef = useRef<TextInput>(null);
  return (
    <ViewInput onPress={() => inputRef.current?.focus()} activeOpacity={1}>
      <InputStyle
        keyboardType={"numeric"}
        placeholderTextColor={Constants.inputConfig.Default.Color}
        value={fixedState}
        onChangeText={(value) => {
          const valueFiltered = value.replace(",", ".").replace(/[^0-9]/g, "");
          setFixedState(InputFormatter(valueFiltered));
        }}
      />
      <SufixText>{SufixValue}</SufixText>
    </ViewInput>
  );
}
