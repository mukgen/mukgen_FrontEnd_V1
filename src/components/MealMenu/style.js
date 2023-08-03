import { styled } from "styled-components";

export const Review = styled.div`
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

export const ReviewcontentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Reviewcontent = styled.div`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

export const ReviewInfo = styled.div`
  display: flex;
  padding: 8px 10px;
  width: calc(100% - 20px);
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
`;

export const ReviewName = styled.p`
  color: #494a4f;
  margin: 0;
`;

export const ReviewDate = styled.p`
  color: #fe984d;
  margin: 0;
`;

export const StarBox = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
`;

export const StarNumber = styled.div`
  color: #fe6b01;
  font-size: 16px;
  font-weight: 400;
`;