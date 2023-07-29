import React from "react";
import styled, { keyframes } from "styled-components";

const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ScoreMean = styled.div`
  color: #ff7a1b;
  font-size: 24px;
  font-weight: 600;
`;

const ScoreMeanBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const ScoreTitle = styled.p`
  color: #fc6b01;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;
const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 300px;
  border-radius: 100px;
  background-color: #f5f6f6;
`;

const ScoreText = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;
const stretchAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${({ width }) => width || 0}px;
  }
`;
const CoreContainer = styled.div`
  border-radius: 100px;
  background: linear-gradient(270deg, #ff7a1b 0%, #ffaf76 100%);
  width: ${({ width }) => width || 0}px;
  height: 20px;
  animation: ${stretchAnimation} 1s ease-in-out; /* 1초 동안 ease-in-out 속도로 애니메이션 적용 */
`;
function Score({ num, index }) {
  return (
    <ScoreContainer>
      <ScoreTitle>{5 - index}점</ScoreTitle>
      <BaseContainer>
        <CoreContainer width={(num / sum) * 400} />
      </BaseContainer>
      <ScoreText>{num}</ScoreText>
    </ScoreContainer>
  );
}

const data = [
  {
    id: "Score5",
    num: 9,
  },
  {
    id: "Score4",
    num: 5,
  },
  {
    id: "Score3",
    num: 0,
  },
  {
    id: "Score2",
    num: 1,
  },
  {
    id: "Score1",
    num: 2,
  },
];
const sum = data.map((item) => item.num).reduce((acc, curr) => acc + curr, 0);
function MealGrade() {
  return (
    <>
      <ScoreBox>
        <ScoreMeanBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
          >
            <path
              d="M31.673 45.647C32.1814 45.3401 32.8181 45.3401 33.3265 45.647L44.0854 52.1406C45.2971 52.8719 46.7918 51.7856 46.4703 50.4073L43.6152 38.1685C43.4802 37.5901 43.6768 36.9846 44.1257 36.5957L53.6335 28.359C54.7033 27.4323 54.1314 25.6751 52.7211 25.5554L40.2051 24.4936C39.6138 24.4434 39.0988 24.0701 38.8673 23.5237L33.9729 11.9758C33.4216 10.6749 31.5779 10.6749 31.0266 11.9758L26.1323 23.5237C25.9007 24.0701 25.3857 24.4434 24.7944 24.4936L12.2784 25.5554C10.8681 25.6751 10.2962 27.4323 11.366 28.359L20.8738 36.5957C21.3227 36.9846 21.5193 37.5901 21.3844 38.1685L18.5292 50.4073C18.2077 51.7856 19.7024 52.8719 20.9142 52.1406L31.673 45.647Z"
              fill="#FF7A1B"
            />
          </svg>
          <ScoreMean>4.43</ScoreMean>
        </ScoreMeanBox>
        <Container>
          {data.map((e, i) => (
            <Score key={i} num={e.num} index={i} />
          ))}
        </Container>
      </ScoreBox>
    </>
  );
}

export default MealGrade;

// const Container = styled.div`
//   width: ${({width}) => width || 0}px;
//   height: 500px;
//   background-color: #000000;
// `
