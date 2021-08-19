import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
`;

const ServiceImg = styled.img`
  width: 35em;
  height: 21em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 58%;
  align-items: center;

`;

const Title = styled.h2`
  color: rgba(87, 83, 83, 0.77);
  font-family: Rowdies;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  margin: 10px 0;
`;

const Details = styled.p`
  color: #000000;
  font-family: Rowdies;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  max-width: 55%;
`;

export function OurService(props) {
const { imgUrl, title, description, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
        <DescriptionContainer>
          <Title> {title} </Title>
          <Details> {description} </Details>
        </DescriptionContainer>
        <ServiceImg src={imgUrl} />
    </ServiceContainer>

  );

}
