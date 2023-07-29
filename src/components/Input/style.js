import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const InputTitle = styled.p`
  color: #85858d;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c9cad0;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  border: none;
  outline: none;
  color: #000;
  &::placeholder {
    color: #c9cad0;
  }
`;

export const NoSamePwd = styled.p`
  color: #d52020;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;
