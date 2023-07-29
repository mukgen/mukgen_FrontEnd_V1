import React from "react";
import { styled } from "styled-components";

const Review = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 12px 10px;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ffe8bc;
  width: 460px;
  cursor: pointer;
`;

const ReviewcontentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Reviewcontent = styled.div`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

const ReviewInfo = styled.div`
  display: flex;
  padding: 8px 10px;
  width: calc(100% - 20px);
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
`;

const ReviewName = styled.p`
  color: #494a4f;
  margin: 0;
`;

const ReviewDate = styled.p`
  color: #fe984d;
  margin: 0;
`;

const StarBox = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
`;

const StarNumber = styled.div`
  color: #fe6b01;
  font-size: 16px;
  font-weight: 400;
`;

function MealReview() {
  return (
    <Review>
      <StarBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
        >
          <path
            d="M23.3799 34.3603C23.7613 34.1301 24.2387 34.1301 24.6201 34.3603L32.6892 39.2305C33.598 39.779 34.7191 38.9642 34.4779 37.9305L32.3366 28.7514C32.2354 28.3176 32.3828 27.8634 32.7194 27.5717L39.8503 21.3943C40.6526 20.6992 40.2238 19.3813 39.166 19.2916L29.779 18.4952C29.3355 18.4575 28.9493 18.1775 28.7756 17.7677L25.1049 9.10684C24.6914 8.13121 23.3086 8.13121 22.8951 9.10684L19.2244 17.7677C19.0507 18.1775 18.6645 18.4575 18.221 18.4952L8.83396 19.2916C7.77625 19.3813 7.34736 20.6992 8.14967 21.3943L15.2806 27.5717C15.6172 27.8634 15.7646 28.3176 15.6634 28.7514L13.5221 37.9305C13.2809 38.9642 14.402 39.779 15.3108 39.2305L23.3799 34.3603Z"
            fill="#FF7A1B"
          />
        </svg>
        <StarNumber>4.5</StarNumber>
      </StarBox>
      <ReviewcontentBox>
        <Reviewcontent>시리얼 금지. 아침은 무조건 국물과 밥</Reviewcontent>
        <ReviewInfo>
          <ReviewName>이태영</ReviewName>
          <ReviewDate>23.05.07 10:32</ReviewDate>
        </ReviewInfo>
      </ReviewcontentBox>
    </Review>
  );
}
export default MealReview;
