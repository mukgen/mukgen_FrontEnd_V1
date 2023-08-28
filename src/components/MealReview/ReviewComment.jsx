import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Modal/Comment";
import Upload from "../../Icon/Upload";
function SuggestionComment() {
  const [inputFocused, setInputFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const handleInputButton = () => {
    return commentValue !== ""
      ? inputFocused
        ? "#FE6B01"
        : "#c9cad0"
      : "#c9cad0";
  };
  return (
    <>
      <CommentContainer>
        <CommentBlock>
          <Comment
            nickName={"영양사 선생님"}
            uploadtime={"2023.08.25 17:10"}
            contents={"감사합니다 다음 급식에도 낼게요"}
          />
        </CommentBlock>
      </CommentContainer>
      <CommentInputContainer>
        <CommentInputBox inputFocused={inputFocused}>
          <CommentInput
            placeholder="댓글을 입력해주세요"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
        </CommentInputBox>
        <UploadButton style={{ backgroundColor: handleInputButton() }}>
          <Upload />
        </UploadButton>
      </CommentInputContainer>
    </>
  );
}

export default SuggestionComment;

const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 10px 10px 10px;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 30px;
`;

const CommentInputBox = styled.div`
  display: flex;
  padding: 10px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 80px;
  border: 2px solid ${(props) => (props.inputFocused ? "#FF7A1B" : "#c9cad0")};
  background: #fff;
  width: 100%;
`;

const CommentInput = styled.input`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  outline: none;
  border: none;
  &::placeholder {
    color: #c9cad0;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

const UploadButton = styled.button`
  display: flex;
  padding: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #c9cad0;
  border: none;
  outline: none;
`;

const CommentContainer = styled.div`
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;
