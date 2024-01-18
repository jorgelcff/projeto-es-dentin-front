import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Input from "./Input";
import { TextInputProps } from "react-native";

interface PriceFuelInputProps extends TextInputProps {
  TextTitle: string;
  TextSubtitle: string;
  fixedPriceState: any;
}

const InputWithTitleSubtitleStyle = styled.View`
  background-color: ${Constants.colors.gray[0]};
  margin-top: 8px;
  max-width: 500px;
`;

const Title = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  color: ${Constants.colors.gray[800]};
`;

const Subtitle = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
  color: ${Constants.colors.gray[700]};
  margin-top: 4px;
  margin-bottom: 16px;
`;

export default function PriceFuelInput({
  TextTitle,
  TextSubtitle,
  fixedPriceState,
  ...props
}: PriceFuelInputProps) {
  const { fixedPriceFuel, setFixedPriceFuel } = fixedPriceState;
  return (
    <InputWithTitleSubtitleStyle {...props}>
      <Title>{TextTitle}</Title>
      <Subtitle>{TextSubtitle}</Subtitle>
      <Input
        fixedPriceState={fixedPriceState}
        SufixValue={"/ litro"}
        InputFormatter={
          Constants.GasPriceInputFormatter as (value: string | number) => string
        }
      />
    </InputWithTitleSubtitleStyle>
  );
}
