import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalContent from "./ModalContent";
import Close from "../../Icon/Close";
import ReviewComment from "../MealReview/ReviewComment";
import Comment from "../Comment";

function ModalMain({ title, closeModal, starRating, data, createDate }) {
  const [comments, setComments] = useState([]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    setComments(data.reviewCommentResponseList);
  }, [data]);

  return (
    <Background onClick={handleBackgroundClick}>
      <Container>
        <HeaderContainer>
          <BlankBox />
          <HeaderTitle>{title}</HeaderTitle>
          <Close closeModal={closeModal} />
        </HeaderContainer>
        <Box>
          <MainBox>
            {starRating}
            <BackgroundImage url={data.imageUrl}>
              <ImageBlur>
                <ReviewImage url={data.imageUrl} />
              </ImageBlur>
            </BackgroundImage>
            <ModalContent
              contents={data.content}
              nickname={data.userNickname}
              createDate={createDate}
            />
          </MainBox>
          <CommentContainer>
            <CommentBlock>
              {comments?.map((comment, index) => (
                <Comment
                  key={index}
                  nickName={comment.reviewCommentId}
                  uploadtime={comment.createdAt}
                  contents={comment.content}
                />
              ))}
            </CommentBlock>
          </CommentContainer>
        </Box>
        <ReviewComment data={data} uploadComment={setComments} />
      </Container>
    </Background>
  );
}

export default ModalMain;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 1px;
  }
`;

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

const Container = styled.div`
  display: flex;
  width: 560px;
  height: 608px;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 24px;
  position: relative;
`;

const MainBox = styled.div`
  display: flex;
  padding: 10px 20px 40px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f5f6f6;
  box-sizing: border-box;
`;

const BlankBox = styled.div`
  width: 28px;
  height: 28px;
`;

const HeaderTitle = styled.p`
  color: #6b6c71;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
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

const BackgroundImage = styled.div`
  width: 520px;
  height: 300px;
  box-sizing: border-box;
  background-image: url(${(props) => props.url});
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ImageBlur = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  position: absolute;
  display: flex;
  justify-content: center;
`;

const ReviewImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 460px;
`;
