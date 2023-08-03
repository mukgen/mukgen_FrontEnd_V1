import React from "react";
import { CircleAnimateTime } from "./style";  // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

const CircleGraph = (data) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );

  return (
    <g>
      {data.map((v, i) => (
        <CircleAnimateTime
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

export default CircleGraph;