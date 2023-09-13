import React from "react";
import { BarAnimateTime } from "./style"; // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

const BarGraph = ({data = [], color = "#000"}) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  ) || 1;

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

export default BarGraph;