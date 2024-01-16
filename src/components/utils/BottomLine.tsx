import { Dimensions } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";

const LineStyle = styled.View`
  border-bottom-color: ${Constants.colors.gray[100]};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-left: -20px;
`;

interface BottomLineProps {
  marginTop: number;
}

export default function BottomLine({ marginTop, ...props }: BottomLineProps) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <LineStyle
      style={{ width: windowWidth, marginTop: marginTop }}
      {...props}
    />
  );
}
