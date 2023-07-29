import React from "react";
import { styled } from "styled-components";

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
    count: 6,
  },
  {
    date: "7/18",
    count: 4,
  },
];

const DateBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
  justify-content: space-between;
  gap: 12px;
`;

const DateItem = styled.div`
  width: auto;
  height: auto;
  padding: 4px 12px;
  border-radius: 100px;

  font-weight: 400;
  font-size: 16px;

  background-color: ${(props) => (props.istoday ? "#FFE1CC" : "#ffffff")};
  color: ${(props) => (props.istoday ? "#FE6B01" : "#6B6C71")};
`;

function formatDate(date) {
  const [month, day] = date.split("/");
  return `${month} / ${day}`;
}

function MealGraphDate() {
  return (
    <DateBox>
      {secondData.map((week, index) => (
        <DateItem key={index} istoday={index === 6}>
          {formatDate(week.date)}
        </DateItem>
      ))}
    </DateBox>
  );
}

export default MealGraphDate;
