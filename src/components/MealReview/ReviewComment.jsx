import React, { useState } from "react";
import styled from "styled-components";
import Upload from "../../Icon/Upload";
import axios from "axios";
import { toast } from "react-hot-toast";
function ReviewComment({ uploadComment, data }) {
  const [inputFocused, setInputFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleInputButton = () => {
    return commentValue !== ""
      ? inputFocused
        ? "#FE6B01"
        : "#c9cad0"
      : "#c9cad0";
  };
  const PostComment = () => {
    axios({
      method: "POST",
      url: `https://stag-server.xquare.app/mukgen/review-comment/${data.id}`,
      headers: {
        "X-Not-Using-Xquare-Auth": true,
      },
      data: {
        content: commentValue,
      },
    })
      .then((res) => {
        toast.success(`댓글 등록`, {
          icon: "",
        });
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
        console.log(err);
      });
  };
  const handleCommentSubmit = () => {
    if (commentValue.trim() !== "") {
      const date = new Date();

      const newComment = {
        reviewCommentId: "영양사 선생님",
        createdAt: date,
        content: commentValue,
      };

      uploadComment((prevComments) => [...prevComments, newComment]);
      PostComment();
      setCommentValue("");
    }
  };

  return (
    <>
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
