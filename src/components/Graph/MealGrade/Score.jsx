import React from "react";
import * as _ from "./style";  // style.js에서 export한 것을 모두 가져와서 _로 정의한다는 뜻이다.

function Score({ num, index, sum }) {
  return (
    <_.ScoreContainer>
      <_.ScoreTitle>{5 - index}점</_.ScoreTitle>
      <_.BaseContainer>
        <_.CoreContainer width={(num / sum) * 400} />
      </_.BaseContainer>
      <_.ScoreText>{num}</_.ScoreText>
    </_.ScoreContainer>
  );
}

export default Score;