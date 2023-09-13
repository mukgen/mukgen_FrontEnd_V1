import React from "react";
import { TextAnimateTime } from "./style";  // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

const Texts = ({ data = [] }) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  ) || 1;

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

export default Texts;