import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../common-components/header/Header';
import { xs, sm, md } from '../styled-components/device';
import CollapsibleCard from './Components/CollapsibleCard';
import PlusIcon, { PlusIconWrapper } from '../common-components/PlusIcon';

const AsideContainer = styled.aside`
  background: #1f2530;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: scroll;
  transition: all 0.3s;
  min-width: 88px;
  max-width: 88px;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.13);
  margin-right: -88px;

  ${xs}{
    display: none;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
  margin-left: 88px;
  background-color: #f3f3f3;
  ${xs}{
    margin-left: 0;
    width: 100%;
  }

  ${PlusIconWrapper} {
    margin: 0 40px 80px;

    ${sm}{
      width: 80%;
    }
    ${md}{
      width: 70%;
    }
  }
`;

const Dashboard = () => {
  return (
    <Fragment>
      <AsideContainer />

      <MainContainer>
        <Header />
        <div className="content-wrap">
          <CollapsibleCard />
          <PlusIcon />
        </div>
      </MainContainer>
    </Fragment>
  );
};

export default Dashboard;
