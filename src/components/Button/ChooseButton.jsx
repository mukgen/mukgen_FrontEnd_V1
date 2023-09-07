import React from "react";
import styled from "styled-components";

function ChooseButton({ buttonText, onClick }) {
  return <Button onClick={onClick}>{buttonText}</Button>;
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
  background-color: #ff7a1b;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fe6b01;
  }
  &:active {
    background-color: #ea6200;
  }
`;
