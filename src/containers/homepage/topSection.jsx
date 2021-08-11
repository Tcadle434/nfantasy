import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background_header_field.jpg";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image:url(${BackgroundImg});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(29, 27, 27, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SloganText = styled.h1`
  font-family: Radley;
  font-size: 96px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function TopSection(props) {
  return(
  <TopContainer>
    <BackgroundFilter>
      <Marginer direction="vertical" margin="12em" />
        <Logo />
      <Marginer direction="vertical" margin="4em" />
        <SloganText>NFTs Just Met</SloganText>
        <SloganText>Fantasy Sports</SloganText>
      <Marginer direction="vertical" margin="4em" />
        <ButtonContainer>
          <Button display="inline-block" >Mint Boosts</Button>
          <Marginer direction="horizontal" margin="8em" />
          <Button flex-direction="row" > Play Now </Button>
        </ButtonContainer>
    </BackgroundFilter>
  </TopContainer>
  );
}
