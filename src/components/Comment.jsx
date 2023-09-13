import React from "react";
import styled from "styled-components";

function Comment({ nickName, uploadtime, contents }) {
  const createData = new Date(uploadtime);
  const year = createData.getFullYear().toString().slice(2);
  const month = (createData.getMonth() + 1).toString().padStart(2, "0");
  const day = createData.getDate().toString().padStart(2, "0");
  const hours = createData.getHours().toString().padStart(2, "0");
  const minutes = createData.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
  return (
    <CommentBox>
      <UserName>{nickName}</UserName>
      <ContentsBox>{contents}</ContentsBox>
      <CommentTime>{formattedDate}</CommentTime>
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
