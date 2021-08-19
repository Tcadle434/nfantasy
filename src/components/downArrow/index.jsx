import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

const ArrowIcon = styled.div`
  margin-top: 4px;
  color: #FFFFFF;
  font-size: 40px;
`;

export function DownArrow() {
  return (
  <ArrowContainer>
    <ArrowIcon>
      <FontAwesomeIcon icon={faAngleDown} />
    </ArrowIcon>
  </ArrowContainer>
);
}
