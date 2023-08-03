import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  user-select: none;
`;

export const ButtonContainer = styled.div`
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

export const SignTextBox = styled.div`
  display: flex;
  padding: 10px 4px;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const SignText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #c9cad0;
`;

export const Signhref = styled.div`
  display: flex;
  align-items: center;
`;

export const SignhrefText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #ff7a1b;
`;