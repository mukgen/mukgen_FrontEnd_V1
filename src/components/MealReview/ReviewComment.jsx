import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Comment";
import Upload from "../../Icon/Upload";
function ReviewComment() {
  const [inputFocused, setInputFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const commentDate = `${year}.${month}.${day} ${hour}:${minute}`;

  const handleInputButton = () => {
    return commentValue !== ""
      ? inputFocused
        ? "#FE6B01"
        : "#c9cad0"
      : "#c9cad0";
  };

  const handleCommentSubmit = () => {
    if (commentValue.trim() !== "") {
      const newComment = {
        nickName: "영양사 선생님",
        uploadtime: commentDate,
        contents: commentValue,
      };

      setComments((prevComments) => [...prevComments, newComment]);

      setCommentValue("");
    }
  };

  return (
    <>
      <CommentContainer>
        <CommentBlock>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              nickName={comment.nickName}
              uploadtime={comment.uploadtime}
              contents={comment.contents}
            />
          ))}
        </CommentBlock>
      </CommentContainer>
      <CommentInputContainer>
        <CommentInputBox inputFocused={inputFocused}>
          <CommentInput
            maxLength={100}
            placeholder="댓글을 입력해주세요"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleCommentSubmit();
              }
            }}
          />
        </CommentInputBox>
        <UploadButton style={{ backgroundColor: handleInputButton() }}>
          <Upload />
        </UploadButton>
      </CommentInputContainer>
    </>
  );
}

export default ReviewComment;

const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 10px 10px 10px;
  align-items: center;
  gap: 8px;
  position: sticky;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
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
  height: 262px;
`;

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;
