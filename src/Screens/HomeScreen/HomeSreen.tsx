import React from "react";
import styled from "styled-components";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const HomeScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  height: 100vh;
`;

function HomeSreen() {
  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
    </HomeScreenContainer>
  );
}

export default HomeSreen;
