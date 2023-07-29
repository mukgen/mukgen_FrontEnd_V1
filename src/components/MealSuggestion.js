import React from "react";
import { styled } from "styled-components";

const List = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #fff;
  width: 460px;
  cursor: pointer;
`;

const Listcontent = styled.div`
  display: flex;
  padding: 12px 0;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

const ListInfo = styled.div`
  display: flex;
  padding: 8px 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
`;

const ListName = styled.div`
  color: #494a4f;
`;

const ListDate = styled.div`
  color: #85858d;
`;

function MealSuggestion() {
  return (
    <List>
      <Listcontent>시리얼 금지. 아침은 무조건 국물과 밥</Listcontent>
      <ListInfo>
        <ListName>이태영</ListName>
        <ListDate>23.05.07 10:32</ListDate>
      </ListInfo>
    </List>
  );
}

export default MealSuggestion;
