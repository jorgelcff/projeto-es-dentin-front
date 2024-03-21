import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  placeholder?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  color?: string;
}

const InputStyle = styled.TextInput`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  border-radius: 4px;
  width: 60%;
  height: 40px;
  font-size: 12px;
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  padding: 8px;
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

export default function HeaderHomeInput({ placeholder, ...props }: InputProps) {
  return (
    <InputStyle
      placeholder={placeholder}
      {...props}
      placeholderTextColor={Constants.inputConfig.Default.Color}
    />
  );
}
