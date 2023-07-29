import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function SignButton({
  buttontext,
  introtext,
  hreftext,
  buttonColor,
  buttonPointer,
  postLogin,
}) {
  return (
    <ButtonBox>
      <ButtonContainer
        onClick={() => buttonPointer && postLogin()}
        style={{
          backgroundColor: `${buttonColor}`,
          cursor: `${buttonPointer}`,
        }}
      >
        {buttontext}
      </ButtonContainer>
      <SignTextBox>
        <SignText>{introtext}</SignText>
        <Signhref>
          <SignhrefText>{hreftext}</SignhrefText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.6667 10L6 5.33333L7.33333 4L13.3334 10L7.33333 16L6 14.6667L10.6667 10Z"
              fill="#FF7A1B"
            />
          </svg>
        </Signhref>
      </SignTextBox>
    </ButtonBox>
  );
}

export default SignButton;

const ButtonBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  user-select: none;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #c9cad0;
  border-radius: 10px;
  width: 100%;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const SignTextBox = styled.div`
  display: flex;
  padding: 10px 4px;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const SignText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #c9cad0;
`;

const Signhref = styled.div`
  display: flex;
  align-items: center;
`;

const SignhrefText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #ff7a1b;
`;
