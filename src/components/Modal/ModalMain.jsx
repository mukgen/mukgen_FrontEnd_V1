import React, { useState } from "react";
import styled from "styled-components";
import Star from "./Star";
import ModalContent from "./ModalContent";
import Close from "../../Icon/Close";

function ModalMain({ title, setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Background>
      <ReviewContainer>
        <HeaderContainer>
          <BlankBox />
          <HeaderTitle>{title}</HeaderTitle>
          <Close onClick={closeModal} />
        </HeaderContainer>
        <MainBox>
          {Star(3)}
          <ModalContent />
        </MainBox>
      </ReviewContainer>
    </Background>
  );
}

export default ModalMain;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
`;

const ReviewContainer = styled.div`
  display: flex;
  width: 660px;
  height: 760px;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 30px;
`;

const MainBox = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f5f6f6;
  box-sizing: border-box;
`;

const BlankBox = styled.div`
  width: 36px;
  height: 36px;
`;

const HeaderTitle = styled.p`
  color: #6b6c71;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;
