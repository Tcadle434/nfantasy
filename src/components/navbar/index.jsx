import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Logo } from "../logo";
import { Button } from "../button";
import { Marginer } from "../../components/marginer";
import { Element, scroller } from "react-scroll";



const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 0em;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  justify-content: space-between;
  `;

const BrandContainer = styled.div`

`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MetamaskButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: ${theme.primary};
    border: none;
    color: rgb(199,199,199);
  }
`;

export function Navbar(props) {
  const scrollToServicesSection= () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 })
  }
  const scrollToFeaturesSection= () => {
    scroller.scrollTo("featuresSection", { smooth: true, duration: 1500 })
  }
  const scrollToRoadmapSection= () => {
    scroller.scrollTo("roadmapSection", { smooth: true, duration: 1500 })
  }
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small onClick={scrollToServicesSection}> &nbsp; Learn &nbsp; </Button>
        <Marginer direction="horizontal" margin="16px" />
        <Button small onClick={scrollToFeaturesSection}> Features </Button>
        <Marginer direction="horizontal" margin="16px" />
        <Button small onClick={scrollToRoadmapSection}> Roadmap </Button>
        <Marginer direction="horizontal" margin="16px" />
        <MetamaskButton small> Connect </MetamaskButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );

}
