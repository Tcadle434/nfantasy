import React from "react";
import styled from "styled-components";

import NftLogo from "../../assets/logo/base_logo.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 20em;
  height: 20em;
`;

const LogoText = styled.div`
  margin-top: 6px;
  font-size: 64px;
  color: ${theme.primary};
  font-weight: 900;
`;

export function Logo(props) {
  return(
    <LogoContainer>
      <LogoImg src={NftLogo}/>
    </LogoContainer>

  );

}
