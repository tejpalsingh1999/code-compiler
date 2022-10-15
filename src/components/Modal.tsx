import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 30%;
  padding: 2rem;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Modal() {
  return (
    <ModalContainer>
      <ModalContent>
        <Header>
          <h2 className="heading">Update Folder Name</h2>
          <button>Close Button</button>
        </Header>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
