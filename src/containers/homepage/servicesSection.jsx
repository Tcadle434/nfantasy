import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurService } from "../../components/ourService";

import Service1Img from "../../assets/illustrations/trophy_field.jpg";
import Service2Img from "../../assets/illustrations/tatum.PNG";
import service3Img from "../../assets/illustrations/eth.jpg"



const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(184, 184, 184, 0.95);
  padding: 10px; 0
`;

const DescriptionText = styled.h1`
  font-family: Rowdies;
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin: 20px 200px;
  line-height: 1.4
  align-items: center;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle> What is NFanTasy? </SectionTitle>
      <Marginer direction="vertical" margin="1em" />
      <DescriptionText> Welcome to the most innovative bridge between Fantasy Sports and the world of Crypto. NFanTasy aims to combine these two communities via utility driven NFTs that allow you to create lineups and compete with different Points Boosts. </DescriptionText>
      <Marginer direction="vertical" margin="5em" />
      <OurService
        title="GETTING STARTED"
        description="Participate in Daily and Weekly Fantasy Sports events against other people. Buy in, draft your team and cheer on your players. Scoring will be tracked in real time so you can always see where you stand amongst your competitors"
        imgUrl={Service1Img}
      />
      <OurService
        title="POINTS BOOSTS"
        description="Points Boosts are ERC-721 tokens living on the Ethereum blockchain stored in IPFS and secured via smart contracts. Each token offers unique boosts, giving value to players that might not have been as sought after before"
        imgUrl={Service2Img}
        isReversed
      />
      <OurService
        title="PAYOUTS"
        description="During play, the coins from the buy in will be locked in a pool until completion of the event. Once the scoring is finalized, players will be rewarded through a tiered payment system, with the best teams receiving the largest % of the pool"
        imgUrl={service3Img}
      />
    </ServicesContainer>

  );

}
