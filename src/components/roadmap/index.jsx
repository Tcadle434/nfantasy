import React from "react";
import styled, { css } from "styled-components";


const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoadmapImg = styled.img`
  width: 80em;
  height: 40em;

`;


export function Roadmap(props) {
const { imgUrl } = props;
  return(
    <RoadmapContainer>
      <RoadmapImg src={imgUrl}/>
    </RoadmapContainer>

  );
}
