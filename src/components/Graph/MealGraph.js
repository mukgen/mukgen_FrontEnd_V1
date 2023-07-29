import React from "react";
import MealGraphDate from "./MealGraphDate";
import { keyframes, styled } from "styled-components";

const secondData = [
  {
    date: "7/10",
    count: 3,
  },
  {
    date: "7/11",
    count: 4,
  },
  {
    date: "7/12",
    count: 1,
  },
  {
    date: "7/13",
    count: 5,
  },
  {
    date: "7/14",
    count: 4,
  },
  {
    date: "7/15",
    count: 1,
  },
  {
    date: "7/16",
    count: 4,
  },
];

const GraphBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 500px;
  height: auto;
  gap: 25px;
`;

//
const BarGraph = (data, color) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );

  return (
    <g>
      {data.map((v, i) => (
        <BarAnimateTime
          key={`${v.date}bar`}
          width="50"
          height={(v.count / max) * 220 + 25}
          fill={color}
          x={i * 75}
          y={260 - (v.count / max) * 220}
          rx="25"
          ry="25"
        />
      ))}
    </g>
  );
};

const LineGraph = (data) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );
  const Location = [];

  for (let i = 0; i < 6; i++) {
    Location.push({
      date: data[i].date,
      x1: i * 75 + 25,
      y1: 260 - (data[i].count / max) * 220,
      x2: (i + 1) * 75 + 25,
      y2: 260 - (data[i + 1].count / max) * 220,
    });
  }

  return (
    <g>
      {Location.map((v, i) => (
        <LineAnimateTime
          key={`${v.date}line`}
          stroke="#FE6B01"
          d={`M${v.x1} ${v.y1} ${v.x2} ${v.y2}`}
          strokeWidth="4"
          style={{
            animationDelay: `${1 + 0.1 * i}s`,
          }}
        />
      ))}
    </g>
  );
};

const LineAnimate = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const LineAnimateTime = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${LineAnimate} 1s linear forwards;
`;

const CircleGraph = (data) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );

  return (
    <g>
      {data.map((v, i) => (
        <AnimateTime
          key={`${v.date}circle`}
          width="10"
          height="10"
          fill="#FFF"
          x={i * 75 + 20}
          y={255 - (v.count / max) * 220}
          rx="10"
          ry="10"
          stroke="#FE6B01"
          strokeWidth="4"
        />
      ))}
    </g>
  );
};
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

const BarAnimateTime = styled.rect`
  animation: ${BarAnimate} 0.5s ease;
`;

const Animate = keyframes`
  0% {
    transform: translateY(270px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimateTime = styled.rect`
  animation: ${Animate} 0.5s ease;
`;

const Texts = (data) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );

  return (
    <g>
      {data.map((v, i) => (
        <TextAnimateTime
          key={`${v.date}text`}
          x={i * 75 + 25 - v.count.toString().length * 5}
          y={240 - (v.count / max) * 220}
          style={{
            fontFamily: "Pretendard",
            fontSize: "16px",
            fontWeight: "400",
            fill: "#85858D",
          }}
        >
          {v.count}
        </TextAnimateTime>
      ))}
    </g>
  );
};

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

const TextAnimateTime = styled.text`
  animation: ${TextAnimate} 1s ease;
`;

function MealGraph() {
  return (
    <>
      <GraphBox>
        <svg viewBox="0 0 500 260" width="500" height="260">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#FE984D", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FE984D", stopOpacity: 0.2 }}
              />
            </linearGradient>
          </defs>
          {BarGraph(secondData, "url(#grad)")}
          {LineGraph(secondData)}
          {CircleGraph(secondData)}
          {Texts(secondData)}
        </svg>
      </GraphBox>
      <MealGraphDate />
    </>
  );
}

export default MealGraph;
