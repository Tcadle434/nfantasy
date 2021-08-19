import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { ServicesSection } from "./servicesSection";
import { FeaturesSection } from "./featuresSection";
import { ColoredLine } from "../../components/line";
import { RoadmapSection } from "./roadmapSection";

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return(
      <PageContainer>
        <TopSection />
        <ServicesSection />
        <ColoredLine />
        <FeaturesSection />
        <ColoredLine />
        <RoadmapSection />
      </PageContainer>
    );
}
