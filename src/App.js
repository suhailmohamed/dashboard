import React, { Fragment } from "react";

import './App.scss'
import Dashboard from "./pages/dashboard/Dashboard";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
`;


const App = () => {
  return (
    <Fragment>
      <DashboardContainer>
        <Dashboard />
      </DashboardContainer>
    </Fragment>
  );
};

export default App;