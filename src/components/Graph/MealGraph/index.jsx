import React from "react";
import MealGraphDate from "./MealGraphDate";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import CircleGraph from "./CircleGraph";
import Texts from "./Texts";  // 파일을 분리하는 편이 깔끔해보일 것 같아 이렇게 함
import { GraphBox } from "./style"; // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

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
      <MealGraphDate Data={secondData} />
    </>
  );
}

export default MealGraph;
