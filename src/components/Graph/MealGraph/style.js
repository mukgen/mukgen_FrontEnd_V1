import { keyframes, styled } from "styled-components";

export const GraphBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 500px;
  height: auto;
  gap: 25px;
`;

const BarAnimate = keyframes`
  0% {
    height: 0;
    transform: translateY(270px);
  }
  100% {
    height: 100%;
    transform: translateY(0);
  }
`;

export const BarAnimateTime = styled.rect`
  animation: ${BarAnimate} 0.5s ease;
`;

const LineAnimate = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const LineAnimateTime = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${LineAnimate} 1s ${({second}) => second}s linear forwards;
`;

const CircleAnimate = keyframes`
  0% {
    transform: translateY(270px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CircleAnimateTime = styled.rect`
  animation: ${CircleAnimate} 0.5s ease;
`;

const TextAnimate = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TextAnimateTime = styled.text`
  animation: ${TextAnimate} 1s ease;
`;

export const DateBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
  justify-content: space-between;
  gap: 12px;
`;

export const DateItem = styled.div`
  width: auto;
  height: auto;
  padding: 4px 12px;
  border-radius: 100px;

  font-weight: 400;
  font-size: 16px;

  background-color: ${(props) => (props.istoday ? "#FFE1CC" : "#ffffff")};
  color: ${(props) => (props.istoday ? "#FE6B01" : "#6B6C71")};
`;