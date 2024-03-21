import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";

const FooterText = styled.Text`
  font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Regular.FontSize};
  color: #9a9ba0;
  text-align: right;
  margin-right: 64px;
  margin-bottom: 26px;
`;

export default FooterText;
