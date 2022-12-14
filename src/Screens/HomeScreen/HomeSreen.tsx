import React from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const HomeScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function HomeSreen() {
  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
      <Modal />
    </HomeScreenContainer>
  );
}

export default HomeSreen;
