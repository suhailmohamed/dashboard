import React from 'react';
import styled from 'styled-components';

import { sm } from "../../styled-components/device";
import { theme } from "../../styled-components/theme";

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${theme.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  min-height: 56px;
  z-index: ${theme.zIndex10};

  ${sm} {
    min-height: 80px;
    padding: 12px 24px;
    left: 88px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper />
  );
};

export default Header;
