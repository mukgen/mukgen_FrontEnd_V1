import React from "react";
import { LineAnimateTime } from "./style"; // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

const LineGraph = (data = []) => {
  const max = Math.max.apply(
    this,
    data.map((v) => +v.count)
  );
  const Location = [];

  for (let i = 0; i < data.length - 1; i++) {
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
          second={1 + 0.1 * i} // 계산을 처음 한 번밖에 안하기에 넘겨주는 편이 더 좋을 것 같아 이렇게 만듦
        />
      ))}
    </g>
  );
};

export default LineGraph;
