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
  background-color: ${({ getCheck }) => (getCheck ? "#ffd382" : "#ff7a1b")};
  border: ${({ getCheck }) => (getCheck ? "1px solid #FE6B01" : "none")};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: ${({ getCheck }) => (getCheck ? "#ff7a1b" : "#fff")};
  cursor: pointer;

  &:hover {
    background-color: ${({ getCheck }) => (getCheck ? "#fdcc71" : "#fe6b01")};
  }
  &:active {
    background-color: ${({ getCheck }) => (getCheck ? "#ffc65d" : "#ea6200")};
  }
`;
