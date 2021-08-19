import React from "react";
import styled from "styled-components/macro";

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const FeatureImg = styled.img`
  width: 35em;
  height: 21em;
`;


const Title = styled.h2`
  color: rgba(87, 83, 83, 0.77);
  font-family: Rowdies;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  margin: 10px 0;
`;


export function OurFeature(props) {
const { imgUrl, title } = props;

  return (
        <FeatureContainer>
          <Title> {title} </Title>
        <FeatureImg src={imgUrl} />
        </FeatureContainer>
  );

}
