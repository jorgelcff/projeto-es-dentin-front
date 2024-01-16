// components/StyledComponentExample.js
import React from "react";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: #333;
`;

const StyledComponentExample = () => {
  return (
    <StyledContainer>
      <StyledText>Olá, Mundo!</StyledText>
    </StyledContainer>
  );
};

export default StyledComponentExample;
