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

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <InputStyle
      placeholder={placeholder}
      {...props}
      placeholderTextColor={Constants.inputConfig.Default.Color}
    />
  );
}
