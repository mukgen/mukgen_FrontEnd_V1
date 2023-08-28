import React from "react";
import styled from "styled-components";

function ModalContent({ nickname, date, contents }) {
  return (
    <>
      <ContentBox>{contents}</ContentBox>
      <ContentInfoBox>
        <UserName>{nickname}</UserName>
        <ContentDate>{date}</ContentDate>
      </ContentInfoBox>
    </>
  );
}

export default ModalContent;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 12px 40px;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f6f6;
  box-sizing: border-box;
  margin: 10px 0 0 0;

  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentInfoBox = styled.div`
  display: flex;
  padding: 8px 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const UserName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentDate = styled.p`
  color: #c9cad0;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
