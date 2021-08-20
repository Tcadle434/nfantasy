import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/background_header_field.jpg";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Navbar } from "../../components/navbar"
import { Element, scroller } from "react-scroll";


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image:url(${BackgroundImg});
  position=relative;
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
  font-size: 64px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {

  const scrollToNextSection= () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 })
  }

  return(
  <Element name="topSection">
    <TopContainer>
      <BackgroundFilter>
      <Navbar />
        <Marginer direction="vertical" margin="6em" />
          <Logo />
        <Marginer direction="vertical" margin="2em" />
          <SloganText>NFTs Just Met</SloganText>
          <SloganText>Fantasy Sports</SloganText>
        <Marginer direction="vertical" margin="4em" />
          <ButtonContainer>
            <Button display="inline-block" >Mint Boosts</Button>
            <Marginer direction="horizontal" margin="8em" />
            <Button flex-direction="row" > &nbsp; Play Now &nbsp; </Button>
          </ButtonContainer>
      </BackgroundFilter>
    </TopContainer>
  </Element>
  );
}
