import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: 16px 22px;
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #FFFFFF;
  font-weight: normal;
  font-size: 30px;
  font-family: Radley;
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
