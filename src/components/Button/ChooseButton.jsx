import React from "react";
import styled from "styled-components";

function ChooseButton({ buttonText, onClick, getCheck }) {
  return (
    <Button onClick={onClick} getCheck={getCheck}>
      {buttonText}
    </Button>
  );
}

export default ChooseButton;

const Button = styled.button`
  outline: none;
  display: flex;
  padding: 12px 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ getCheck }) => (getCheck ? "#ff7a1b" : "#ffd382")};
  border: ${({ getCheck }) => (getCheck ? "none" : "1px solid #FE6B01")};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: ${({ getCheck }) => (getCheck ? "#fff" : "#ff7a1b")};
  cursor: pointer;

  &:hover {
    background-color: ${({ getCheck }) => (getCheck ? "#fe6b01" : "#fdcc71")};
  }
  &:active {
    background-color: ${({ getCheck }) => (getCheck ? "#ea6200" : "#ffc65d")};
  }
`;
