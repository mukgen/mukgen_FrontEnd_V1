import React from "react";
import * as _ from "./style"; // 파일 분리

function MealSuggestion() {
  return (
    <_.List>
      <_.Listcontent>시리얼 금지. 아침은 무조건 국물과 밥</_.Listcontent>
      <_.ListInfo>
        <_.ListName>이태영</_.ListName>
        <_.ListDate>23.05.07 10:32</_.ListDate>
      </_.ListInfo>
    </_.List>
  );
}

export default MealSuggestion;
