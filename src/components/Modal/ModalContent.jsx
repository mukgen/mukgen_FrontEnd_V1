import React from "react";
import styled from "styled-components";

function ModalContent({ nickname, date }) {
  return (
    <ContentBox>
      <ContentInfoBox>
        <UserName>{nickname}</UserName>
        <ContentDate>{date}</ContentDate>
      </ContentInfoBox>
    </ContentBox>
  );
}

export default ModalContent;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  background: #f5f6f6;

  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentInfoBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentDate = styled.p`
  color: #85858d;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
