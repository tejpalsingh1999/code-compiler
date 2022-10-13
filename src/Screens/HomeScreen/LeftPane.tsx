import React from "react";
import styled from "styled-components";

const StyledLeftPane = styled.div`
  position: fixed;
  width: 40%;
  height: 100vh;
  top: 0;
  left: 0;

  background: #221f20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
  }
`;
const SubHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  margin-bottom: 1.5rem;
  opacity: 75%;
`;

const AddNewButton = styled.a`
  color: black;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  &:hover {
    opacity: 0.9;
  }
`;

function LeftPane() {
  return (
    <StyledLeftPane>
      <ContentContainer>
        <Logo src="/logo.png" alt="" />
        <MainHeading>
          <span>Code</span> Deck
        </MainHeading>
        <SubHeading>Code. Compile. Debug</SubHeading>
        <AddNewButton href="">
          <span>+</span> Create New Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftPane>
  );
}

export default LeftPane;
