import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { Roadmap } from "../../components/roadmap";
import { MiniLine } from "../../components/miniLine";

import roadmapImg from "../../assets/illustrations/roadmap.jpg";

const RoadmapContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(184, 184, 184, 0.95);
  padding: 10px; 0
`;


export function RoadmapSection(props) {
  return (
    <RoadmapContainer name="roadmapSection">
      <SectionTitle> Where we are Headed </SectionTitle>
      <MiniLine />
      <Marginer direction="vertical" margin="4em" />
      <Roadmap
        imgUrl={roadmapImg}
      />
    </RoadmapContainer>

  );

}
