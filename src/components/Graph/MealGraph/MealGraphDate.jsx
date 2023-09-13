import React from "react";
import { DateBox, DateItem } from "./style";  // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦

function formatDate(date) {
  const [month, day] = date.split("/");
  return `${month} / ${day}`;
}

function MealGraphDate({ data = [] }) {  // 나중에는 Data를 Props로 넘겨줘야하기에 이렇게 바꿈
  return (
    <DateBox>
      {data.map((week, index) => (
        <DateItem key={index} istoday={index === 6}>
          {formatDate(week.date)}
        </DateItem>
      ))}
    </DateBox>
  );
}

export default MealGraphDate;
