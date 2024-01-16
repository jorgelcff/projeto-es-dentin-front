import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";

const ButtonSecondarySmallStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Secondary.Small
    .BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Secondary.Small.Radius};
  border-color: ${Constants.buttonConfig.Default.Secondary.Default.BorderColor};
  border-width: ${Constants.buttonConfig.Default.Secondary.Default.BorderWidth};
  padding: 14px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Secondary.Default.Color};
`;

interface ButtonSecondarySmallProps {
  title: string;
}

export default function ButtonSecondarySmall({
  title,
  ...props
}: ButtonSecondarySmallProps) {
  return (
    <ButtonSecondarySmallStyle {...props}>
      {/* Touchable highlight can only receive one child (has to do this trick) */}
      <>
        <ButtonText>{title}</ButtonText>
      </>
    </ButtonSecondarySmallStyle>
  );
}
