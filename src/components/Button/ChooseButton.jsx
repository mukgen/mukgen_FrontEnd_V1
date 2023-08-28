import React from "react";
import styled from "styled-components";

function ChooseButton({ buttonText, okButton }) {
  return <Button okButton={okButton}>{buttonText}</Button>;
}

export default ChooseButton;

const Button = styled.div`
  display: flex;
  padding: 12px 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.okButton ? "transparent" : "#FF7A1B")};
  background-color: ${(props) => (props.okButton ? "#FF7A1B" : "#ffe8bc")};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => (props.okButton ? "#fff" : "#FF7A1B")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.okButton ? "#FE6B01" : "#ffdd9d")};
  }
  &:active {
    background-color: ${(props) => (props.okButton ? "#EA6200" : "#FFD382")};
  }
`;
