import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "8px 11px " : "16px 22px")};
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #FFFFFF;
  font-weight: normal;
  font-size: ${({small}) => (small ? "16px" : "30px")};
  font-family: Radley;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary}
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
