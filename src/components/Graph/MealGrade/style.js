import styled, { keyframes } from "styled-components";

export const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ScoreMean = styled.div`
  color: #ff7a1b;
  font-size: 24px;
  font-weight: 600;
`;

export const ScoreMeanBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ScoreTitle = styled.p`
  color: #fc6b01;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 300px;
  border-radius: 100px;
  background-color: #f5f6f6;
`;

export const ScoreText = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;

export const stretchAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${({ width }) => width || 0}px;
  }
`;

export const CoreContainer = styled.div`
  border-radius: 100px;
  background: linear-gradient(270deg, #ff7a1b 0%, #ffaf76 100%);
  width: ${({ width }) => width || 0}px;
  height: 20px;
  animation: ${stretchAnimation} 1s ease-in-out; /* 1초 동안 ease-in-out 속도로 애니메이션 적용 */
`;