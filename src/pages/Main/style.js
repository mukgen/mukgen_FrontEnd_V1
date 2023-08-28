import styled from "styled-components";

export const Cover = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0px 40px;
  background-color: #f5f6f6;
  font-family: Pretendard;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MainBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  gap: 40px;
  margin: auto;
`;

//Suggestion
export const MealSuggestionBox = styled.div`
  display: flex;
  width: 460px;
  height: auto;
  flex-direction: column;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

//Review
export const MealReviewBox = styled.div`
  display: flex;
  width: 460px;
  height: auto;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  padding: 24px 0;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;

export const Title2 = styled.div`
  display: flex;
  padding: 40px 0 24px 0;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  color: #ff7a1b;
  font-size: 16px;
  font-weight: 400;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

//Graph
export const MealGraphBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
`;

export const GraphBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 680px;
  height: 360px;
  padding: 24px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  border-radius: 8px;
`;

export const GradeBox = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  gap: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 680px;
  height: auto;
  box-sizing: border-box;
`;
