import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurFeature } from "../../components/ourFeature";
import { MiniLine } from "../../components/miniLine";

import Feature1Img from "../../assets/illustrations/fsports-cant-use.PNG";
import Feature2Img from "../../assets/illustrations/green-ticket.png";
import Feature3Img from "../../assets/illustrations/smart-contract-cant-use.PNG";
import Feature4Img from "../../assets/illustrations/cant-use-champions.PNG";

const FeaturesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(184, 184, 184, 0.95);
  padding: 10px; 0
`;

const FeatureContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: "row";
  margin-bottom: 4em;
`;

export function FeaturesSection(props) {
  return (

    <FeaturesContainer name="featuresSection">
    <SectionTitle> Our Features </SectionTitle>
    <MiniLine />
    <Marginer direction="vertical" margin="2em" />
      <FeatureContainerRow>
        <Marginer direction="vertical" margin="1em" />
        <OurFeature
          title="Fantasy Sports"
          imgUrl={Feature1Img}
        />
        <Marginer direction="horizontal" margin="8em" />
        <OurFeature
          title="Utility Driven NFTs"
          imgUrl={Feature2Img}
        />
      </FeatureContainerRow>

      <Marginer direction="vertical" margin="8em" />

      <FeatureContainerRow>
        <Marginer direction="vertical" margin="1em" />
        <OurFeature
          title="Smart Wallet & Contracts"
          imgUrl={Feature3Img}
        />
        <Marginer direction="horizontal" margin="8em" />
        <OurFeature
          title="Rewards & Incentives"
          imgUrl={Feature4Img}
        />
      </FeatureContainerRow>

    </FeaturesContainer>

  );

}
