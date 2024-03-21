import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
// import ImageWrapper from "./ImageWrapper";
// import { EmptyImage } from "../../assets/Home/Empty.png";

interface EmptyProps {
  title: string;
  subtitle: string;
}

const Title = styled.Text`
  color: ${Constants.colors.gray[700]};
  font-size: ${Constants.fontConfig.H3.Bold.FontSize};
  font-family: ${Constants.fontConfig.H3.Bold.FontFamily};
  margin-top: 16px;
`;

const Subtitle = styled.Text`
  color: ${Constants.colors.gray[600]};
  font-size: ${Constants.fontConfig.H3.Regular.FontSize};
  font-family: ${Constants.fontConfig.H3.Regular.FontFamily};
  text-align: center;
  margin-top: 8px;
`;

const ContentView = styled.View`
  display: flex;
  align-items: center;
`;

export default function Empty({ title, subtitle, ...props }: EmptyProps) {
  return (
    <ContentView>
      {/* <ImageWrapper source={EmptyImage} width={"185px"} height={"117px"} /> */}
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ContentView>
  );
}
