import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Logo } from "../logo";
import { Button } from "../button";
import { MiniLine } from "../miniLine";

import BackgroundImg from "../../assets/illustrations/Rectangle-5.png";


const FooterContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:url(${BackgroundImg});
  background-color: rgba(184, 184, 184, 0.95);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FooterTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #FFFFFF;
`;

export function Footer(props) {
  return (
  <FooterContainer>
    <FooterTitle>Follow Us</FooterTitle>
    <MiniLine />
  </FooterContainer>
  );
}
