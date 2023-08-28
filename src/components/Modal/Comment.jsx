import React from "react";
import styled from "styled-components";

function Comment({ nickName, uploadtime, contents }) {
  return (
    <CommentBox>
      <UserName>{nickName}</UserName>
      <ContentsBox>{contents}</ContentsBox>
      <CommentTime>{uploadtime}</CommentTime>
    </CommentBox>
  );
}

export default Comment;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px 0px;
  width: 100%;
  border-bottom: 1px solid #f5f6f6;
`;

const UserName = styled.p`
  color: #85858d;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const CommentTime = styled.p`
  color: #c9cad0;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const ContentsBox = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
